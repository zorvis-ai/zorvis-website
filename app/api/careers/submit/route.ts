import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const MAX_RESUME_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function sanitizeFilename(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(req: Request) {
  try {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_SERVICE_ROLE ||
      process.env.SUPABASE_SERVICE_KEY;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabaseKey = serviceRoleKey || anonKey;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Server is not configured for submissions. Add Supabase URL and key env vars." },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const fullName = String(formData.get("full_name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const jobId = String(formData.get("job_id") || "").trim();
    const jobTitle = String(formData.get("job_title") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const linkedinUrl = String(formData.get("linkedin_url") || "").trim();
    const githubUrl = String(formData.get("github_url") || "").trim();
    const portfolioUrl = String(formData.get("portfolio_url") || "").trim();
    const coverNote = String(formData.get("cover_note") || "").trim();
    const resume = formData.get("resume");

    if (!fullName || !email || !jobId || !jobTitle || !(resume instanceof File)) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and attach a resume." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.has(resume.type)) {
      return NextResponse.json(
        { error: "Please upload a PDF or Word document." },
        { status: 400 }
      );
    }

    if (resume.size > MAX_RESUME_SIZE) {
      return NextResponse.json(
        { error: "File must be under 10MB." },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const originalName = sanitizeFilename(resume.name || "resume");
    const extension = originalName.includes(".")
      ? originalName.split(".").pop()
      : "pdf";
    const candidateName = sanitizeFilename(fullName) || "candidate";
    const path = `${Date.now()}-${candidateName}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(path, resume, { contentType: resume.type, upsert: false });

    if (uploadError) {
      return NextResponse.json(
        { error: "Resume upload failed. Please try again." },
        { status: 500 }
      );
    }

    const { error: insertError } = await supabase.from("job_applications").insert({
      job_id: jobId,
      job_title: jobTitle,
      full_name: fullName,
      email,
      phone: phone || null,
      linkedin_url: linkedinUrl || null,
      github_url: githubUrl || null,
      portfolio_url: portfolioUrl || null,
      cover_note: coverNote || null,
      resume_url: `${supabaseUrl}/storage/v1/object/resumes/${path}`,
      resume_filename: resume.name,
      source: "careers_page",
    });

    if (insertError) {
      return NextResponse.json(
        { error: "Application submission failed. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

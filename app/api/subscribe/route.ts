import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const IS_PROD = process.env.NODE_ENV === "production";

export async function POST(req: Request) {
  try {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_SERVICE_ROLE ||
      process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: "Server is not configured." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const email = String(body.email || "").trim().toLowerCase();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error } = await supabase.from("email_subscribers").insert({
      email,
      full_name: body.full_name?.trim() || null,
      company_name: body.company_name?.trim() || null,
      company_size: body.company_size || null,
      industry: body.industry || null,
      country: body.country || "IN",
      source: body.source || "website",
      source_detail: body.source_detail || null,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      user_agent: req.headers.get("user-agent") || null,
      referrer: req.headers.get("referer") || null,
    });

    if (error) {
      // If duplicate email, treat as success (idempotent UX)
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, duplicate: true });
      }
      console.error("Subscribe failed", error);
      return NextResponse.json(
        {
          error: IS_PROD
            ? "Could not subscribe. Please try again."
            : `Subscribe failed: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe route error", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

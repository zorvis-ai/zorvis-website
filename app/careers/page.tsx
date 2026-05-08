"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, Tag } from "@/components/Nav";

const JOBS = [
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    type: "Full-Time",
    location: "NCR, India",
    badge: "⚡ Open",
    badgeColor: "#4F46E5",
    comp: "Stock Options + Competitive Cash",
    description: "You will be one of the first engineers at Zorvis AI, owning the entire frontend experience — from the HR dashboard used daily by customers to the candidate-facing mobile interface used by thousands of applicants.",
    responsibilities: [
      "HR dashboard: real-time Kanban pipeline — drag-and-drop state transitions, live score updates, candidate detail drawers, bulk actions",
      "Candidate test PWA: mobile-first progressive web app, under 3 seconds on mid-range Android on 4G",
      "Offer and document flows: offer letter generation UI, digital acceptance, document collection tracking",
      "Compliance UI: deadline calendars, alert surfaces, employee self-service views",
      "Free-tier experience: conversion-optimised interfaces that turn free users into paying customers",
      "Design-to-code execution: working from specs or directly shaping UI decisions",
    ],
    requirements: [
      "3+ years of production frontend experience with React and TypeScript",
      "Strong CSS and responsive design skills — you know what works on a mid-range Android on a slow network",
      "Experience with Next.js (App Router preferred)",
      "Comfort with real-time UI: WebSocket-based live updates, optimistic state management",
      "Performance-first instinct: bundle size, lazy loading, render optimisation",
      "Ability to work from a backend API contract and ship independently",
    ],
    niceToHave: [
      "Experience with Tailwind CSS and component libraries (shadcn/ui or similar)",
      "Prior work on mobile-first or PWA products for bandwidth-constrained users",
      "Familiarity with Supabase Realtime or equivalent WebSocket-based state sync",
    ],
    whyJoin: [
      "Your work is what every customer sees — UI quality is a direct business driver",
      "Small team means real influence: your opinions on product and design will be heard",
      "Stock options from an early stage, with a product that is already scoped and building",
      "A problem worth solving: the HR manager we are building for has been ignored too long",
    ],
  },
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    type: "Full-Time",
    location: "NCR, India",
    badge: "🔥 Priority",
    badgeColor: "#EF4444",
    comp: "Stock Options + Competitive Cash",
    description: "This is the first engineering hire at Zorvis AI. You will work directly with the CEO to build the product from the ground up — owning the codebase, making the technical calls, and shipping features that real customers use.",
    responsibilities: [
      "End-to-end backend architecture: API design, database schema, multi-tenant data isolation, job queue infrastructure",
      "Core product modules: candidate pipeline engine, automated test delivery, async job workers for scoring and document generation",
      "Third-party integrations: WhatsApp, email, SMS, calendar OAuth, payment gateways, background verification",
      "India and UAE compliance data pipelines: statutory deadline tracking, document generation, regulatory alerts",
      "AI/LLM integration: inference APIs for scoring narratives, offer pre-fill — all async, all gracefully degradable",
      "Infrastructure setup and CI/CD: deployment pipelines, environment management, monitoring from Day 1",
    ],
    requirements: [
      "4+ years of production experience with Node.js and TypeScript",
      "Strong PostgreSQL instincts: schema design, query performance, multi-tenancy patterns",
      "Experience building async job queue systems in production (BullMQ, Celery, or equivalent)",
      "Comfort integrating third-party APIs and webhooks — retries, idempotency, partial failures",
      "Familiarity with React / Next.js — enough to review frontend code and unblock the frontend engineer",
      "Ownership mindset: you treat production like it is your product, because it is",
    ],
    niceToHave: [
      "Experience with LLM APIs (OpenAI, Groq, Anthropic) — prompt design, structured output",
      "Prior work at a SaaS startup at the 0 to 1 stage",
      "Exposure to Indian payroll, compliance APIs, or UAE labor systems",
    ],
    whyJoin: [
      "Full technical ownership of a product with a clear market and focused roadmap",
      "Direct partnership with the CEO — no middle layers, no politics",
      "Stock options that reflect the fact that you are building this, not joining it",
      "A problem worth solving: the HR manager we are building for has been ignored too long",
    ],
  },
];

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  linkedin_url: string;
  github_url: string;
  portfolio_url: string;
  cover_note: string;
  resume: File | null;
};

const EMPTY_FORM: FormState = {
  full_name: "", email: "", phone: "",
  linkedin_url: "", github_url: "", portfolio_url: "",
  cover_note: "", resume: null,
};

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[0] | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);

  function setField(k: keyof FormState, v: string | File | null) {
    setForm(f => ({ ...f, [k]: v }));
  }

  function handleFile(file: File | null) {
    if (!file) return;
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) { setError("Please upload a PDF or Word document."); return; }
    if (file.size > 10 * 1024 * 1024) { setError("File must be under 10MB."); return; }
    setField("resume", file);
    setError("");
  }

  async function handleSubmit() {
    if (!form.full_name || !form.email || !form.resume || !selectedJob) {
      setError("Please fill in your name, email, and attach a resume."); return;
    }
    if (!form.email.includes("@")) { setError("Please enter a valid email address."); return; }
    setError("");
    setSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("job_id", selectedJob.id);
      payload.append("job_title", selectedJob.title);
      payload.append("full_name", form.full_name);
      payload.append("email", form.email);
      payload.append("phone", form.phone);
      payload.append("linkedin_url", form.linkedin_url);
      payload.append("github_url", form.github_url);
      payload.append("portfolio_url", form.portfolio_url);
      payload.append("cover_note", form.cover_note);
      payload.append("resume", form.resume);

      const res = await fetch("/api/careers/submit", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null) as { error?: string } | null;
        throw new Error(data?.error || "Application submission failed. Please try again.");
      }
      setSubmitted(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inp: React.CSSProperties = { width: "100%", background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 8, padding: "10px 13px", fontSize: 14, color: "#0D1117", fontFamily: "'DM Sans',sans-serif", outline: "none", boxSizing: "border-box" };
  const lbl: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 5 };

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <section style={{ padding: "110px 32px 64px", textAlign: "center", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>CAREERS</Tag>
        <h1 style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Build the future of<br /><span style={{ color: "#4F46E5" }}>people operations in India.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.7 }}>
          Zorvis AI is an AI-powered HR platform for Indian and UAE SMEs. Early stage, well-scoped, hiring the founding engineering team.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", fontSize: 13, color: "#6B7280" }}>
          <span>📍 NCR, India</span><span>⚡ Early-stage startup</span><span>🇮🇳 India + UAE</span><span>💡 AI · HR · Compliance</span>
        </div>
      </section>

      {!selectedJob && (
        <section style={{ padding: "0 32px 80px", maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>Open roles ({JOBS.length})</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {JOBS.map(job => (
              <div key={job.id} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 16, padding: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 14, marginBottom: 14 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: job.badgeColor, background: `${job.badgeColor}14`, border: `1px solid ${job.badgeColor}30`, padding: "3px 10px", borderRadius: 20 }}>{job.badge}</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", margin: "0 0 6px" }}>{job.title}</h3>
                    <div style={{ display: "flex", gap: 14, fontSize: 13, color: "#6B7280", flexWrap: "wrap" }}>
                      <span>📍 {job.location}</span><span>⏱ {job.type}</span><span>💰 {job.comp}</span>
                    </div>
                  </div>
                  <button onClick={() => { setSelectedJob(job); setForm(EMPTY_FORM); setSubmitted(false); setError(""); }}
                    style={{ background: "#4F46E5", color: "#FFFFFF", border: "none", borderRadius: 9, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                    Apply now →
                  </button>
                </div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, margin: 0 }}>{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {selectedJob && !submitted && (
        <section style={{ padding: "0 32px 80px", maxWidth: 720, margin: "0 auto" }}>
          <button onClick={() => setSelectedJob(null)} style={{ background: "none", border: "none", color: "#4F46E5", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 24, padding: 0 }}>← Back to jobs</button>
          <div style={{ background: "#F7F8FF", border: "1px solid #C7D2FE", borderRadius: 12, padding: "20px 22px", marginBottom: 28 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 6px" }}>{selectedJob.title}</h2>
            <div style={{ display: "flex", gap: 14, fontSize: 13, color: "#6B7280" }}>
              <span>📍 {selectedJob.location}</span><span>⏱ {selectedJob.type}</span><span>💰 {selectedJob.comp}</span>
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>What you will own</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>{selectedJob.responsibilities.map((r, i) => <li key={i} style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 5 }}>{r}</li>)}</ul>
          </div>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>What we are looking for</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>{selectedJob.requirements.map((r, i) => <li key={i} style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 5 }}>{r}</li>)}</ul>
          </div>
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Why join</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>{selectedJob.whyJoin.map((r, i) => <li key={i} style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 5 }}>{r}</li>)}</ul>
          </div>
          <div style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 14, padding: "28px 24px" }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 22px" }}>Apply for {selectedJob.title}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div><label style={lbl}>Full name <span style={{ color: "#EF4444" }}>*</span></label><input style={inp} placeholder="Priya Sharma" value={form.full_name} onChange={e => setField("full_name", e.target.value)} /></div>
              <div><label style={lbl}>Email <span style={{ color: "#EF4444" }}>*</span></label><input style={inp} placeholder="priya@company.com" value={form.email} onChange={e => setField("email", e.target.value)} /></div>
            </div>
            <div style={{ marginBottom: 16 }}><label style={lbl}>Phone <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label><input style={inp} placeholder="+91 98765 43210" value={form.phone} onChange={e => setField("phone", e.target.value)} /></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div><label style={lbl}>GitHub <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label><input style={inp} placeholder="github.com/username" value={form.github_url} onChange={e => setField("github_url", e.target.value)} /></div>
              <div><label style={lbl}>LinkedIn <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label><input style={inp} placeholder="linkedin.com/in/name" value={form.linkedin_url} onChange={e => setField("linkedin_url", e.target.value)} /></div>
            </div>
            <div style={{ marginBottom: 16 }}><label style={lbl}>Portfolio / Relevant work <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label><input style={inp} placeholder="Link to projects or demos" value={form.portfolio_url} onChange={e => setField("portfolio_url", e.target.value)} /></div>
            <div style={{ marginBottom: 16 }}><label style={lbl}>Why this role? <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label>
              <textarea value={form.cover_note} onChange={e => setField("cover_note", e.target.value)} placeholder="2–3 sentences on why Zorvis AI." rows={4} style={{ ...inp, resize: "vertical" }} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={lbl}>Resume / CV <span style={{ color: "#EF4444" }}>*</span></label>
              <div style={{ border: `2px dashed ${dragOver ? "#4F46E5" : "#C7D2FE"}`, borderRadius: 10, padding: "24px", textAlign: "center", background: dragOver ? "#F5F3FF" : "#FAFBFF", cursor: "pointer" }}
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0] || null); }}
                onClick={() => document.getElementById("resume-input")?.click()}>
                {form.resume ? (
                  <div><div style={{ fontSize: 24, marginBottom: 6 }}>📄</div><div style={{ fontSize: 13, fontWeight: 600, color: "#4F46E5" }}>{(form.resume as File).name}</div><div style={{ fontSize: 11, color: "#9CA3AF" }}>Click to change</div></div>
                ) : (
                  <div><div style={{ fontSize: 28, marginBottom: 8 }}>📎</div><div style={{ fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 4 }}>Drop your resume here or click to browse</div><div style={{ fontSize: 12, color: "#9CA3AF" }}>PDF or Word · Max 10MB</div></div>
                )}
                <input id="resume-input" type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} onChange={e => handleFile(e.target.files?.[0] || null)} />
              </div>
            </div>
            {error && <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#B91C1C", marginBottom: 16 }}>{error}</div>}
            <button onClick={handleSubmit} disabled={submitting} style={{ background: submitting ? "#818CF8" : "#4F46E5", color: "#FFFFFF", border: "none", borderRadius: 9, padding: "13px", fontSize: 15, fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer", fontFamily: "'DM Sans',sans-serif", width: "100%" }}>
              {submitting ? "Submitting…" : "Submit application →"}
            </button>
            <p style={{ fontSize: 11, color: "#9CA3AF", textAlign: "center", marginTop: 10 }}>We review every application personally. You will hear back within 5 working days.</p>
          </div>
        </section>
      )}

      {selectedJob && submitted && (
        <section style={{ padding: "40px 32px 100px", maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 12px" }}>Application received!</h2>
          <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.65, marginBottom: 28 }}>Thanks for applying for <strong>{selectedJob.title}</strong>. We will respond within 5 working days at <strong>{form.email}</strong>.</p>
          <button onClick={() => { setSelectedJob(null); setSubmitted(false); }} style={{ background: "none", border: "1px solid #E2E6F0", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", marginRight: 10 }}>View other roles</button>
          <Link href="/" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 13, fontWeight: 600, padding: "11px 22px", borderRadius: 8, textDecoration: "none" }}>Back to homepage</Link>
        </section>
      )}

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

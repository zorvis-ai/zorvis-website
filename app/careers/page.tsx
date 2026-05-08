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
    department: "Engineering",
    badge: "⚡ Open",
    badgeColor: "#4F46E5",
    comp: "Stock Options + Competitive Cash",
    description: "You will be one of the first engineers at Zorvis AI, owning the entire frontend experience — from the HR dashboard used daily by customers to the candidate-facing mobile interface used by thousands of applicants. What you build is what customers see, and in a product like ours, that is directly tied to whether they convert, stay, and refer others.",
    responsibilities: [
      "HR dashboard: a real-time, Kanban-style hiring pipeline — drag-and-drop state transitions, live score updates, candidate detail drawers, and bulk actions",
      "Candidate test PWA: a mobile-first progressive web app that must load in under 3 seconds on a mid-range Android on 4G — performance is a product requirement, not a nice-to-have",
      "Offer and document flows: offer letter generation UI, digital acceptance experience, and document collection tracking",
      "Compliance UI: deadline calendars, alert surfaces, and employee self-service views with accurate, real-time data",
      "Free-tier experience: conversion-optimised interfaces that turn free users into paying customers",
      "Design-to-code execution: working from design specs or directly shaping UI decisions where specs do not yet exist",
    ],
    requirements: [
      "3+ years of production frontend experience with React and TypeScript — you write clean, maintainable component code",
      "Strong CSS and responsive design skills: you know what works on a mid-range Android on a slow network, not just on your MacBook",
      "Experience with Next.js (App Router preferred) and an understanding of when to use server vs client components",
      "Comfort with real-time UI: WebSocket-based live updates, optimistic state management, and handling eventual consistency gracefully",
      "Performance-first instinct: bundle size, lazy loading, and render optimisation are things you think about proactively",
      "Ability to work from a backend API contract and ship independently without waiting on the other engineer",
    ],
    niceToHave: [
      "Experience with Tailwind CSS and component libraries (shadcn/ui or similar)",
      "Prior work on mobile-first or PWA products — especially for non-urban or bandwidth-constrained users",
      "Familiarity with Supabase Realtime or equivalent WebSocket-based state sync",
      "Eye for product design: you have shipped things you are proud to show",
    ],
    whyJoin: [
      "Your work is what every customer sees and interacts with — UI quality is a direct business driver here",
      "Small team means real influence: your opinions on product and design will be heard and acted on",
      "Stock options from an early stage, with a product that is already scoped and building",
      "A problem worth solving: the HR manager we are building for has been ignored by the industry for too long",
    ],
  },
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    type: "Full-Time",
    location: "NCR, India",
    department: "Engineering",
    badge: "🔥 Priority",
    badgeColor: "#EF4444",
    comp: "Stock Options + Competitive Cash",
    description: "This is the first engineering hire at Zorvis AI. You will work directly with the CEO to build the product from the ground up — owning the codebase, making the technical calls, and shipping features that real customers use. This is a founding-team role in everything but the title: your fingerprints will be on every architectural decision, and you will be compensated accordingly with meaningful stock options.",
    responsibilities: [
      "End-to-end backend architecture: API design, database schema, multi-tenant data isolation, and job queue infrastructure",
      "Core product modules: candidate pipeline engine, automated test delivery across channels, async job workers for reminders, scoring, and document generation",
      "Third-party integrations: communication APIs (WhatsApp, email, SMS), calendar OAuth, payment gateways, background verification providers",
      "India and UAE compliance data pipelines: statutory deadline tracking, document generation, and regulatory alert infrastructure",
      "AI/LLM integration: connecting to inference APIs for scoring narratives, offer pre-fill, and intelligent summaries — all async, all gracefully degradable",
      "Infrastructure setup and CI/CD: deployment pipelines, environment management, monitoring, and error tracking from Day 1",
      "Frontend collaboration: working closely with the frontend engineer to ensure API contracts, real-time events, and type safety across the full stack",
    ],
    requirements: [
      "4+ years of production experience with Node.js and TypeScript — you write code others can maintain",
      "Strong PostgreSQL instincts: schema design, query performance, multi-tenancy patterns, and indexing",
      "Experience building and operating async job queue systems in production (BullMQ, Celery, Sidekiq, or equivalent)",
      "Comfort integrating third-party APIs and webhooks — you know how to handle retries, idempotency, and partial failures",
      "Familiarity with React / Next.js — enough to review frontend code and unblock the frontend engineer when needed",
      "Ownership mindset: you treat production like it is your product, because it is",
    ],
    niceToHave: [
      "Experience with LLM APIs (OpenAI, Groq, Anthropic) — prompt design, structured output, async orchestration",
      "Prior work at a SaaS startup at the 0 to 1 stage",
      "Exposure to Indian payroll, compliance APIs, or UAE labor systems",
    ],
    whyJoin: [
      "Full technical ownership of a product with a clear market, real customers, and a focused roadmap",
      "Direct partnership with the CEO — no middle layers, no politics",
      "Stock options that reflect the fact that you are building this, not joining it",
      "A problem worth solving: the HR manager we are building for has been ignored by the industry for too long",
    ],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({ full_name:"", email:"", phone:"", linkedin_url:"", github_url:"", portfolio_url:"", cover_note:"", resume:null });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const set = (k: string, v: string | File | null) => setForm(f => ({ ...f, [k]: v }));

  const handleFile = (file: File | null) => {
    if (!file) return;
    const allowed = ["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) { setError("Please upload a PDF or Word document."); return; }
    if (file.size > 10 * 1024 * 1024) { setError("File must be under 10MB."); return; }
    set("resume", file); setError("");
  };

  const handleSubmit = async () => {
    if (!form.full_name || !form.email || !form.resume || !selectedJob) {
      setError("Please fill in your name, email, and attach a resume."); return;
    }
    if (!form.email.includes("@")) { setError("Please enter a valid email address."); return; }
    setError(""); setSubmitting(true);
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const ext = form.resume.name.split(".").pop();
      const filename = `${Date.now()}-${form.full_name.replace(/\s+/g,"-").toLowerCase()}.${ext}`;
      const storageRes = await fetch(`${supabaseUrl}/storage/v1/object/resumes/${filename}`, {
        method:"POST",
        headers:{ apikey:supabaseAnon, Authorization:`Bearer ${supabaseAnon}`, "Content-Type":form.resume.type },
        body:form.resume,
      });
      if (!storageRes.ok) throw new Error("Resume upload failed. Please try again.");
      const resumeUrl = `${supabaseUrl}/storage/v1/object/resumes/${filename}`;
      const dbRes = await fetch(`${supabaseUrl}/rest/v1/job_applications`, {
        method:"POST",
        headers:{ "Content-Type":"application/json", apikey:supabaseAnon, Authorization:`Bearer ${supabaseAnon}`, Prefer:"return=minimal" },
        body:JSON.stringify({ job_id:selectedJob.id, job_title:selectedJob.title, full_name:form.full_name, email:form.email, phone:form.phone||null, linkedin_url:form.linkedin_url||null, github_url:form.github_url||null, portfolio_url:form.portfolio_url||null, cover_note:form.cover_note||null, resume_url:resumeUrl, resume_filename:form.resume.name, source:"careers_page" }),
      });
      if (!dbRes.ok) throw new Error("Application submission failed. Please try again.");
      setSubmitted(true);
    } catch(e) {
      setError(e.message || "Something went wrong. Please try again.");
    } finally { setSubmitting(false); }
  };

  const inputStyle = { width:"100%", background:"#FFFFFF", border:"1px solid #E2E6F0", borderRadius:8, padding:"10px 13px", fontSize:14, color:"#0D1117", fontFamily:"'DM Sans',sans-serif", outline:"none", boxSizing:"border-box" };
  const labelStyle = { fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:5 };

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#FFFFFF", color:"#0D1117", minHeight:"100vh" }}>
      <Nav />

      <section style={{ padding:"110px 32px 64px", textAlign:"center", background:"linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>CAREERS</Tag>
        <h1 style={{ fontSize:"clamp(28px,5vw,52px)", fontWeight:800, letterSpacing:"-0.03em", margin:"0 0 16px" }}>
          Build the future of<br/><span style={{ color:"#4F46E5" }}>people operations in India.</span>
        </h1>
        <p style={{ fontSize:16, color:"#6B7280", maxWidth:520, margin:"0 auto 28px", lineHeight:1.7 }}>
          Zorvis AI is an AI-powered HR platform for Indian and UAE SMEs. We are early stage, well-scoped, and hiring the founding engineering team. If you want to own something real, this is it.
        </p>
        <div style={{ display:"flex", justifyContent:"center", gap:20, flexWrap:"wrap", fontSize:13, color:"#6B7280" }}>
          <span>📍 NCR, India</span>
          <span>⚡ Early-stage startup</span>
          <span>🇮🇳 India + UAE markets</span>
          <span>💡 AI · HR · Compliance</span>
        </div>
      </section>

      {!selectedJob && (
        <section style={{ padding:"0 32px 80px", maxWidth:860, margin:"0 auto" }}>
          <h2 style={{ fontSize:18, fontWeight:700, color:"#0D1117", marginBottom:24 }}>Open roles ({JOBS.length})</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
            {JOBS.map(job => (
              <div key={job.id}
                style={{ background:"#FFFFFF", border:"1px solid #E2E6F0", borderRadius:16, padding:"28px", transition:"box-shadow 0.15s, border-color 0.15s" }}
                onMouseEnter={e=>{ e.currentTarget.style.boxShadow="0 6px 24px rgba(0,0,0,0.07)"; e.currentTarget.style.borderColor="#C7D2FE"; }}
                onMouseLeave={e=>{ e.currentTarget.style.boxShadow="none"; e.currentTarget.style.borderColor="#E2E6F0"; }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:14, marginBottom:14 }}>
                  <div>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                      <span style={{ fontSize:10, fontWeight:700, color:job.badgeColor, background:`${job.badgeColor}14`, border:`1px solid ${job.badgeColor}30`, padding:"3px 10px", borderRadius:20 }}>{job.badge}</span>
                      <span style={{ fontSize:11, color:"#6B7280" }}>{job.department}</span>
                    </div>
                    <h3 style={{ fontSize:22, fontWeight:800, color:"#0D1117", margin:"0 0 6px", letterSpacing:"-0.02em" }}>{job.title}</h3>
                    <div style={{ display:"flex", gap:14, fontSize:13, color:"#6B7280", flexWrap:"wrap" }}>
                      <span>📍 {job.location}</span>
                      <span>⏱ {job.type}</span>
                      <span>💰 {job.comp}</span>
                    </div>
                  </div>
                  <button onClick={() => { setSelectedJob(job); setForm({ full_name:"", email:"", phone:"", linkedin_url:"", github_url:"", portfolio_url:"", cover_note:"", resume:null }); setSubmitted(false); setError(""); }}
                    style={{ background:"#4F46E5", color:"#FFFFFF", border:"none", borderRadius:9, padding:"12px 24px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 12px rgba(79,70,229,0.25)", whiteSpace:"nowrap" }}>
                    Apply now →
                  </button>
                </div>
                <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:"0 0 16px" }}>{job.description}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                  {job.requirements.slice(0,3).map((r,i) => (
                    <div key={i} style={{ fontSize:11, color:"#4F46E5", background:"#EEF2FF", padding:"3px 10px", borderRadius:20 }}>
                      {r.length > 55 ? r.substring(0,55)+"…" : r}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:56, background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:14, padding:"32px 28px" }}>
            <h3 style={{ fontSize:16, fontWeight:700, color:"#0D1117", marginBottom:20 }}>Why Zorvis AI?</h3>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:20 }}>
              {[
                { icon:"🎯", title:"Real market, real problem", desc:"India has 63M+ SMEs. Almost none have modern HR tooling. This is a large, genuinely underserved market." },
                { icon:"🏗️", title:"Build from scratch", desc:"We are early stage. The founding team shapes every architecture and product decision." },
                { icon:"🌍", title:"India + UAE", desc:"Two of the fastest-growing SME markets in the world, with a natural labour corridor between them." },
                { icon:"🤝", title:"Direct CEO access", desc:"Work directly with Sagar Raj (ex-Amazon Senior PM) on product, sales, and strategy from Day 1." },
              ].map(v => (
                <div key={v.title}>
                  <div style={{ fontSize:24, marginBottom:8 }}>{v.icon}</div>
                  <div style={{ fontSize:13, fontWeight:700, color:"#0D1117", marginBottom:4 }}>{v.title}</div>
                  <div style={{ fontSize:12, color:"#6B7280", lineHeight:1.55 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedJob && !submitted && (
        <section style={{ padding:"0 32px 80px", maxWidth:720, margin:"0 auto" }}>
          <button onClick={() => setSelectedJob(null)}
            style={{ background:"none", border:"none", color:"#4F46E5", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", marginBottom:24, display:"flex", alignItems:"center", gap:5, padding:0 }}>
            ← Back to jobs
          </button>
          <div style={{ background:"#F7F8FF", border:"1px solid #C7D2FE", borderRadius:12, padding:"20px 22px", marginBottom:28 }}>
            <div style={{ fontSize:10, fontWeight:700, color:selectedJob.badgeColor, background:`${selectedJob.badgeColor}14`, border:`1px solid ${selectedJob.badgeColor}30`, padding:"2px 9px", borderRadius:20, display:"inline-block", marginBottom:8 }}>{selectedJob.badge}</div>
            <h2 style={{ fontSize:22, fontWeight:800, color:"#0D1117", margin:"0 0 6px", letterSpacing:"-0.02em" }}>{selectedJob.title}</h2>
            <div style={{ display:"flex", gap:14, fontSize:13, color:"#6B7280", flexWrap:"wrap" }}>
              <span>📍 {selectedJob.location}</span>
              <span>⏱ {selectedJob.type}</span>
              <span>💰 {selectedJob.comp}</span>
            </div>
          </div>

          <div style={{ marginBottom:24 }}>
            <h3 style={{ fontSize:15, fontWeight:700, color:"#0D1117", marginBottom:10 }}>What you will own</h3>
            <ul style={{ margin:0, paddingLeft:18 }}>
              {selectedJob.responsibilities.map((r,i) => <li key={i} style={{ fontSize:14, color:"#374151", lineHeight:1.7, marginBottom:5 }}>{r}</li>)}
            </ul>
          </div>
          <div style={{ marginBottom:24 }}>
            <h3 style={{ fontSize:15, fontWeight:700, color:"#0D1117", marginBottom:10 }}>What we are looking for</h3>
            <ul style={{ margin:0, paddingLeft:18 }}>
              {selectedJob.requirements.map((r,i) => <li key={i} style={{ fontSize:14, color:"#374151", lineHeight:1.7, marginBottom:5 }}>{r}</li>)}
            </ul>
          </div>
          <div style={{ marginBottom:24 }}>
            <h3 style={{ fontSize:15, fontWeight:700, color:"#0D1117", marginBottom:10 }}>Bonus</h3>
            <ul style={{ margin:0, paddingLeft:18 }}>
              {selectedJob.niceToHave.map((r,i) => <li key={i} style={{ fontSize:14, color:"#374151", lineHeight:1.7, marginBottom:5 }}>{r}</li>)}
            </ul>
          </div>
          <div style={{ marginBottom:32 }}>
            <h3 style={{ fontSize:15, fontWeight:700, color:"#0D1117", marginBottom:10 }}>Why join</h3>
            <ul style={{ margin:0, paddingLeft:18 }}>
              {selectedJob.whyJoin.map((r,i) => <li key={i} style={{ fontSize:14, color:"#374151", lineHeight:1.7, marginBottom:5 }}>{r}</li>)}
            </ul>
          </div>

          <div style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:14, padding:"28px 24px" }}>
            <h3 style={{ fontSize:16, fontWeight:700, color:"#0D1117", margin:"0 0 22px" }}>Apply for {selectedJob.title}</h3>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div>
                <label style={labelStyle}>Full name <span style={{ color:"#EF4444" }}>*</span></label>
                <input style={inputStyle} placeholder="Priya Sharma" value={form.full_name} onChange={e=>set("full_name",e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Email <span style={{ color:"#EF4444" }}>*</span></label>
                <input style={inputStyle} placeholder="priya@company.com" value={form.email} onChange={e=>set("email",e.target.value)} />
              </div>
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={labelStyle}>Phone <span style={{ color:"#9CA3AF", fontWeight:400 }}>(optional)</span></label>
              <input style={inputStyle} placeholder="+91 98765 43210" value={form.phone} onChange={e=>set("phone",e.target.value)} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
              <div>
                <label style={labelStyle}>GitHub <span style={{ color:"#9CA3AF", fontWeight:400 }}>(optional)</span></label>
                <input style={inputStyle} placeholder="github.com/yourusername" value={form.github_url} onChange={e=>set("github_url",e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>LinkedIn <span style={{ color:"#9CA3AF", fontWeight:400 }}>(optional)</span></label>
                <input style={inputStyle} placeholder="linkedin.com/in/yourname" value={form.linkedin_url} onChange={e=>set("linkedin_url",e.target.value)} />
              </div>
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={labelStyle}>Portfolio / Relevant work <span style={{ color:"#9CA3AF", fontWeight:400 }}>(optional)</span></label>
              <input style={inputStyle} placeholder="Link to side projects, demos, or relevant work" value={form.portfolio_url} onChange={e=>set("portfolio_url",e.target.value)} />
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={labelStyle}>Why this role? <span style={{ color:"#9CA3AF", fontWeight:400 }}>(optional but appreciated)</span></label>
              <textarea value={form.cover_note} onChange={e=>set("cover_note",e.target.value)}
                placeholder="2–3 sentences. What draws you to Zorvis AI specifically? What have you built that is most relevant?"
                rows={4} style={{ ...inputStyle, resize:"vertical" }} />
            </div>
            <div style={{ marginBottom:20 }}>
              <label style={labelStyle}>Resume / CV <span style={{ color:"#EF4444" }}>*</span></label>
              <div
                style={{ border:`2px dashed ${dragOver?"#4F46E5":"#C7D2FE"}`, borderRadius:10, padding:"24px", textAlign:"center", background:dragOver?"#F5F3FF":"#FAFBFF", cursor:"pointer", transition:"all 0.15s" }}
                onDragOver={e=>{e.preventDefault();setDragOver(true);}}
                onDragLeave={()=>setDragOver(false)}
                onDrop={e=>{e.preventDefault();setDragOver(false);handleFile(e.dataTransfer.files[0]||null);}}
                onClick={()=>document.getElementById("resume-input").click()}>
                {form.resume ? (
                  <div>
                    <div style={{ fontSize:24, marginBottom:6 }}>📄</div>
                    <div style={{ fontSize:13, fontWeight:600, color:"#4F46E5" }}>{form.resume.name}</div>
                    <div style={{ fontSize:11, color:"#9CA3AF", marginTop:3 }}>({(form.resume.size/1024).toFixed(0)} KB) · Click to change</div>
                  </div>
                ) : (
                  <div>
                    <div style={{ fontSize:28, marginBottom:8 }}>📎</div>
                    <div style={{ fontSize:14, fontWeight:600, color:"#374151", marginBottom:4 }}>Drop your resume here or click to browse</div>
                    <div style={{ fontSize:12, color:"#9CA3AF" }}>PDF or Word · Max 10MB</div>
                  </div>
                )}
                <input id="resume-input" type="file" accept=".pdf,.doc,.docx" style={{ display:"none" }} onChange={e=>handleFile(e.target.files?.[0]||null)} />
              </div>
            </div>
            {error && <div style={{ background:"#FEE2E2", border:"1px solid #FECACA", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#B91C1C", marginBottom:16 }}>{error}</div>}
            <button onClick={handleSubmit} disabled={submitting}
              style={{ background:submitting?"#818CF8":"#4F46E5", color:"#FFFFFF", border:"none", borderRadius:9, padding:"13px", fontSize:15, fontWeight:700, cursor:submitting?"not-allowed":"pointer", fontFamily:"'DM Sans',sans-serif", width:"100%", boxShadow:"0 4px 14px rgba(79,70,229,0.3)" }}>
              {submitting ? "Submitting…" : "Submit application →"}
            </button>
            <p style={{ fontSize:11, color:"#9CA3AF", textAlign:"center", marginTop:10 }}>We review every application personally. You will hear back within 5 working days.</p>
          </div>
        </section>
      )}

      {selectedJob && submitted && (
        <section style={{ padding:"40px 32px 100px", maxWidth:600, margin:"0 auto", textAlign:"center" }}>
          <div style={{ fontSize:60, marginBottom:16 }}>🎉</div>
          <h2 style={{ fontSize:26, fontWeight:800, color:"#0D1117", margin:"0 0 12px", letterSpacing:"-0.02em" }}>Application received!</h2>
          <p style={{ fontSize:16, color:"#6B7280", lineHeight:1.65, marginBottom:28 }}>
            Thanks for applying for <strong>{selectedJob.title}</strong>. We review every application personally and will respond within 5 working days at <strong>{form.email}</strong>.
          </p>
          <div style={{ background:"#EEF2FF", border:"1px solid #C7D2FE", borderRadius:12, padding:"20px 24px", marginBottom:28, textAlign:"left" }}>
            <div style={{ fontSize:13, fontWeight:700, color:"#0D1117", marginBottom:12 }}>What happens next</div>
            {["We review your application and resume (within 5 working days)","If shortlisted, we schedule a 30-min intro call with Sagar (CEO)","Technical assessment or work trial relevant to the role","Final conversation and offer decision — we move fast"].map((step,i) => (
              <div key={i} style={{ display:"flex", gap:10, marginBottom:8 }}>
                <div style={{ width:20, height:20, borderRadius:"50%", background:"#4F46E5", color:"white", fontSize:11, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{i+1}</div>
                <div style={{ fontSize:13, color:"#374151", lineHeight:1.5 }}>{step}</div>
              </div>
            ))}
          </div>
          <button onClick={() => { setSelectedJob(null); setSubmitted(false); }}
            style={{ background:"none", border:"1px solid #E2E6F0", borderRadius:8, padding:"10px 20px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", color:"#374151", marginRight:10 }}>
            View other roles
          </button>
          <Link href="/" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:13, fontWeight:600, padding:"11px 22px", borderRadius:8, textDecoration:"none" }}>Back to homepage</Link>
        </section>
      )}

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

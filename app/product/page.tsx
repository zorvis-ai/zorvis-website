"use client";
import { useState } from "react";
import { Nav, Footer, Tag } from "@/components/Nav";
import { MODULES, CHANNELS } from "@/components/brand";
import Link from "next/link";

const HIRE_STEPS = [
  { n: "01", title: "Post a job", body: "AI writes the job description from a brief. Published to Naukri, LinkedIn, and your careers page simultaneously." },
  { n: "02", title: "CVs ranked in 3 min", body: "ZIE score engine processes every application. Score band, AI summary, fit signals — on every candidate instantly." },
  { n: "03", title: "Assessment on their channel", body: "Candidate chooses email, WhatsApp, SMS or web portal. No app. No account. Magic link, timed, anti-cheat." },
  { n: "04", title: "Kanban pipeline", body: "Every stage automated. Drag a card — next action triggers. Interview scheduled. Offer generated. Nothing falls through." },
  { n: "05", title: "Digital offer + e-sign", body: "Offer letter generated, delivered on preferred channel, signed digitally. Timestamp + IP record. Legally valid." },
];

const MANAGE_FEATURES = [
  { icon: "💬", title: "Multi-channel helpdesk",       body: "Employees ask on WhatsApp, Slack, email, or portal. Routine answers automated 24/7." },
  { icon: "📊", title: "Leave & payslip self-service",  body: "Balance checked on WhatsApp. Payslip downloaded via link. No portal login needed." },
  { icon: "🎯", title: "Goal tracking + OKRs",          body: "Check-ins via preferred channel. Manager dashboard shows team progress." },
  { icon: "🇦🇪", title: "UAE compliance layer",         body: "WPS SIF auto-generated. Emirates ID OCR. Visa expiry calendar. MOHRE-ready." },
  { icon: "🌐", title: "Bilingual Arabic/English",      body: "Full Arabic interface for UAE teams. All communications bilingual." },
  { icon: "📅", title: "Compliance calendar",           body: "Visa renewals, Emirates ID expiry — tracked automatically. Alerts before fines." },
];

const GROW_FEATURES = [
  { icon: "🔮", title: "Hire quality predictor",    body: "Before you make an offer, Zorvis shows predicted 90-day performance based on similar hires. Confidence band always included." },
  { icon: "📈", title: "Compounding data flywheel", body: "Every hire outcome makes the next prediction more accurate. The longer you use Zorvis, the smarter your hiring becomes." },
  { icon: "🏥", title: "Team health scores",        body: "Department-level aggregate signals. Attendance anomalies, helpdesk volume, goal completion rates. Never individual surveillance." },
  { icon: "🔍", title: "Source ROI tracking",       body: "Which job board produces your best 90-day hires? Which score range predicts retention? This data exists. Now you can use it." },
  { icon: "📋", title: "Monthly intelligence report", body: "AI-generated narrative: hiring velocity, team health heatmap, attrition conditions, and 3 recommended actions." },
  { icon: "🛡️", title: "No individual risk scores",  body: "Team health aggregated to department level only. No individual attrition risk score stored anywhere. Permanent." },
];

const INTELLIGENCE_BENEFITS = [
  { icon: "🎯", title: "Gets smarter with every hire",      body: "Each hire outcome feeds back into scoring accuracy. The more you hire, the better the predictions get." },
  { icon: "🔗", title: "Connects hire to performance",      body: "The candidate's aptitude score at hire becomes a 90-day performance predictor. No other SME platform has this." },
  { icon: "📊", title: "Surfaces team signals, not gossip", body: "Aggregate signals per department surface conditions creating disengagement — before attrition spikes. Never individual." },
  { icon: "✅", title: "AI ranks. You decide. Always.",      body: "Every AI output has a plain-language explanation. Human makes the final call on every hire. Non-negotiable." },
];

export default function ProductPage() {
  const [tab, setTab] = useState<"hire" | "manage" | "grow">("hire");

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: "120px 32px 56px", textAlign: "center", maxWidth: 800, margin: "0 auto", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>THE PLATFORM</Tag>
        <h1 style={{ fontSize: "clamp(32px,6vw,62px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 18px", color: "#0D1117" }}>
          Starts at the first CV.<br /><span style={{ color: "#4F46E5" }}>Never stops.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 22px" }}>
          Three interconnected modules sharing one data spine. A candidate's aptitude score at hire becomes a performance prediction 90 days later.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 6 }}>
          {CHANNELS.map(c => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 5, background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 100, padding: "4px 11px", fontSize: 11, color: "#374151", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <span>{c.icon}</span>{c.label}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 11, color: "#9CA3AF" }}>Every touchpoint on the candidate or employee's preferred channel.</p>
      </section>

      {/* TABS */}
      <section style={{ padding: "0 32px 88px", maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 44, flexWrap: "wrap" }}>
          {MODULES.map(m => (
            <button key={m.slug} onClick={() => setTab(m.slug as any)} style={{
              background: tab === m.slug ? m.accentColor : "#F7F8FC",
              border: `1px solid ${tab === m.slug ? m.accentColor : "#E2E6F0"}`,
              color: tab === m.slug ? "#FFFFFF" : "#374151",
              borderRadius: 8, padding: "9px 22px", fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s",
              boxShadow: tab === m.slug ? `0 4px 12px ${m.accentColor}30` : "none",
            }}>
              {m.num} — {m.name}
            </button>
          ))}
        </div>

        {/* HIRE */}
        {tab === "hire" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ display: "inline-block", background: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: 100, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#059669", marginBottom: 14 }}>MODULE 01 · LIVE IN INDIA</div>
              <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0D1117", margin: "0 0 10px" }}>From first CV to signed offer.</h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 500, margin: "0 auto" }}>One connected system. Every stage automated. Every candidate on their preferred channel.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
              {HIRE_STEPS.map((s, i) => (
                <div key={s.n} style={{ display: "flex", gap: 18, alignItems: "flex-start", background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 12, padding: "18px 22px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#FFFFFF", flexShrink: 0 }}>{s.n}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#0D1117", marginBottom: 4 }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{s.body}</div>
                  </div>
                  {i < HIRE_STEPS.length - 1 && <div style={{ color: "#4F46E5", fontSize: 16, opacity: 0.35, alignSelf: "center", flexShrink: 0 }}>↓</div>}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
              {[{ n: "3 min", l: "400 CVs ranked" }, { n: "83%", l: "Assessment completion rate" }, { n: "Free", l: "Score bands visible always" }, { n: "15 min", l: "Setup time, no IT needed" }].map(s => (
                <div key={s.n} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 10, padding: "16px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#4F46E5", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MANAGE */}
        {tab === "manage" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ display: "inline-block", background: "#F5F3FF", border: "1px solid #DDD6FE", borderRadius: 100, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#7C3AED", marginBottom: 14 }}>MODULE 02 · PHASE 2</div>
              <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0D1117", margin: "0 0 10px" }}>HR answers exceptions.<br />Not repetitive questions.</h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto" }}>Employees self-serve on their preferred channel. HR focuses on what needs human judgment.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 14 }}>
              {MANAGE_FEATURES.map(f => (
                <div key={f.title} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 12, padding: "20px 20px", display: "flex", gap: 13 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 5 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GROW */}
        {tab === "grow" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ display: "inline-block", background: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: 100, padding: "3px 12px", fontSize: 11, fontWeight: 700, color: "#059669", marginBottom: 14 }}>MODULE 03 · PHASE 3</div>
              <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0D1117", margin: "0 0 10px" }}>Every hire makes<br />the next one smarter.</h2>
              <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto" }}>Hire-to-retire data compounds into a flywheel. Every outcome makes scoring more accurate.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 14 }}>
              {GROW_FEATURES.map(f => (
                <div key={f.title} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 12, padding: "20px 20px", display: "flex", gap: 13 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 5 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* INTELLIGENCE ENGINE */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <Tag color="#059669">THE INTELLIGENCE ENGINE</Tag>
          <h2 style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 14px", color: "#0D1117" }}>
            Activates when modules connect.<br /><span style={{ color: "#059669" }}>Compounds with every hire.</span>
          </h2>
          <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.65 }}>
            The more modules you use, the more data flows through the intelligence engine. Gets measurably smarter over time.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            {INTELLIGENCE_BENEFITS.map(b => (
              <div key={b.title} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "20px 18px", textAlign: "left", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                <span style={{ fontSize: 22, display: "block", marginBottom: 9 }}>{b.icon}</span>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 5 }}>{b.title}</div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 32px", textAlign: "center", background: "#FFFFFF" }}>
        <h2 style={{ fontSize: "clamp(20px,3vw,32px)", fontWeight: 800, margin: "0 0 10px", color: "#0D1117" }}>Start with Hire. Add everything else when you're ready.</h2>
        <p style={{ color: "#6B7280", marginBottom: 24, fontSize: 14, maxWidth: 400, margin: "0 auto 24px" }}>Free forever on the Starter plan. No credit card.</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "11px 24px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>Get early access</Link>
          <Link href="/pricing" style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", color: "#374151", fontSize: 14, fontWeight: 500, padding: "11px 24px", borderRadius: 8, textDecoration: "none" }}>See pricing</Link>
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

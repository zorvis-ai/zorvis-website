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
  { icon: "💬", title: "Multi-channel helpdesk",      body: "Employees ask questions on WhatsApp, Slack, email, or web portal. Routine answers automated 24/7." },
  { icon: "📊", title: "Leave & payslip self-service", body: "Balance checked on WhatsApp. Payslip downloaded via link. No portal login. No HR intervention needed." },
  { icon: "🎯", title: "Goal tracking + OKRs",         body: "Check-ins via preferred channel. Manager dashboard shows team progress. No annual review surprises." },
  { icon: "🇦🇪", title: "UAE compliance layer",        body: "WPS SIF auto-generated on payroll run. Emirates ID OCR. Visa expiry calendar with 30-day alerts. MOHRE-ready." },
  { icon: "🌐", title: "Bilingual Arabic/English",     body: "Full Arabic interface for UAE teams. Offer letters, helpdesk responses, and notifications — all bilingual." },
  { icon: "📅", title: "Compliance calendar",          body: "Visa renewals, contract deadlines, Emirates ID expiry — tracked automatically. Alerts before they become fines." },
];

const GROW_FEATURES = [
  { icon: "🔮", title: "Hire quality predictor",   body: "Before you make an offer, Zorvis shows predicted 90-day performance based on similar hires on the platform. Confidence band always included." },
  { icon: "📈", title: "Compounding data flywheel", body: "Every hire outcome makes the next prediction more accurate. The longer you use Zorvis, the smarter your hiring decisions become." },
  { icon: "🏥", title: "Team health scores",        body: "Department-level aggregate signals. Attendance anomalies, helpdesk volume, goal completion rates. HR manages conditions, not people." },
  { icon: "🔍", title: "Source ROI tracking",       body: "Which job board produced your best 90-day hires? Which score range predicts retention? This data exists. Now you can use it." },
  { icon: "📋", title: "Monthly intelligence report", body: "AI-generated narrative: hiring velocity, team health heatmap, attrition conditions, and 3 specific recommended actions." },
  { icon: "🛡️", title: "No individual risk scores",  body: "Team health aggregated to department level only. No individual attrition risk score stored anywhere. The ethical boundary is permanent." },
];

// Customer-facing intelligence section — no internal roadmap thresholds
const INTELLIGENCE_BENEFITS = [
  { icon: "🎯", title: "Gets smarter with every hire",       body: "Each hire outcome on the platform feeds back into scoring accuracy. The more you hire, the better the predictions get." },
  { icon: "🔗", title: "Connects hire to performance",       body: "The candidate's aptitude score at hire becomes a 90-day performance predictor. No other SME platform has this data spine." },
  { icon: "📊", title: "Surfaces team signals, not gossip",  body: "Aggregate signals per department surface conditions creating disengagement — before attrition spikes. Never individual surveillance." },
  { icon: "✅", title: "AI ranks. You decide. Always.",       body: "Every AI output has a plain-language explanation and a confidence band. Human makes the final call on every hire. Non-negotiable." },
];

export default function ProductPage() {
  const [tab, setTab] = useState<"hire" | "manage" | "grow">("hire");

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#0C0E1A", color: "#F9FAFB", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ padding: "120px 32px 60px", textAlign: "center", maxWidth: 800, margin: "0 auto", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 320, background: "radial-gradient(ellipse,rgba(79,70,229,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Tag>THE PLATFORM</Tag>
          <h1 style={{ fontSize: "clamp(34px,6vw,64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px", color: "#FFFFFF" }}>
            Starts at the first CV.<br /><span style={{ color: "#818CF8" }}>Never stops.</span>
          </h1>
          <p style={{ fontSize: 17, color: "#9CA3AF", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 28px" }}>
            Three interconnected modules sharing one data spine. A candidate's aptitude score at hire becomes a performance prediction 90 days later. The intelligence compounds with every hire made.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 8 }}>
            {CHANNELS.map(c => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, padding: "5px 12px", fontSize: 11, color: "#9CA3AF" }}>
                <span>{c.icon}</span>{c.label}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#4B5563" }}>Every touchpoint on the candidate or employee's preferred channel.</p>
        </div>
      </section>

      {/* ── MODULE TABS ── */}
      <section style={{ padding: "0 32px 100px", maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
          {MODULES.map(m => (
            <button key={m.slug} onClick={() => setTab(m.slug as any)} style={{
              background: tab === m.slug ? m.accentColor : "#13152A",
              border: `1px solid ${tab === m.slug ? m.accentColor : "rgba(255,255,255,0.08)"}`,
              color: tab === m.slug ? "#FFFFFF" : "#9CA3AF",
              borderRadius: 8, padding: "10px 24px", fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
            }}>
              {m.num} — {m.name}
            </button>
          ))}
        </div>

        {/* HIRE */}
        {tab === "hire" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-block", background: "rgba(79,70,229,0.12)", border: "1px solid rgba(79,70,229,0.25)", borderRadius: 100, padding: "3px 14px", fontSize: 11, fontWeight: 600, color: "#818CF8", marginBottom: 16 }}>MODULE 01 · LIVE IN INDIA</div>
              <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 12px" }}>From first CV to signed offer.</h2>
              <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 540, margin: "0 auto" }}>One connected system. Every stage automated. Every candidate on their preferred channel.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
              {HIRE_STEPS.map((s, i) => (
                <div key={s.n} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "#13152A", border: "1px solid rgba(79,70,229,0.18)", borderRadius: 12, padding: "20px 24px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#FFFFFF", flexShrink: 0 }}>{s.n}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", marginBottom: 5 }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>{s.body}</div>
                  </div>
                  {i < HIRE_STEPS.length - 1 && <div style={{ color: "#4F46E5", fontSize: 18, opacity: 0.4, alignSelf: "center", flexShrink: 0 }}>↓</div>}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
              {[{ n: "3 min", l: "400 CVs ranked" }, { n: "83%", l: "Assessment completion rate" }, { n: "Free", l: "Score bands visible always" }, { n: "15 min", l: "Setup time, no IT needed" }].map(s => (
                <div key={s.n} style={{ background: "#13152A", border: "1px solid rgba(79,70,229,0.18)", borderRadius: 10, padding: "18px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 5 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MANAGE */}
        {tab === "manage" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-block", background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.25)", borderRadius: 100, padding: "3px 14px", fontSize: 11, fontWeight: 600, color: "#818CF8", marginBottom: 16 }}>MODULE 02 · PHASE 2</div>
              <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 12px" }}>HR answers exceptions.<br />Not repetitive questions.</h2>
              <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 560, margin: "0 auto" }}>Employees self-serve on their preferred channel. Leave, payslips, goals — answered automatically. HR focuses on what needs human judgment.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
              {MANAGE_FEATURES.map(f => (
                <div key={f.title} style={{ background: "#13152A", border: "1px solid rgba(129,140,248,0.15)", borderRadius: 12, padding: "22px 22px", display: "flex", gap: 14 }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF", marginBottom: 6 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GROW */}
        {tab === "grow" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-block", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 100, padding: "3px 14px", fontSize: 11, fontWeight: 600, color: "#F59E0B", marginBottom: 16 }}>MODULE 03 · PHASE 3</div>
              <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 12px" }}>Every hire makes<br />the next one smarter.</h2>
              <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 560, margin: "0 auto" }}>Hire-to-retire data compounds into a flywheel. Every outcome makes scoring more accurate. No competitor at SME pricing has this data layer.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
              {GROW_FEATURES.map(f => (
                <div key={f.title} style={{ background: "#13152A", border: "1px solid rgba(245,158,11,0.12)", borderRadius: 12, padding: "22px 22px", display: "flex", gap: 14 }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF", marginBottom: 6 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── INTELLIGENCE ENGINE — customer-facing only ── */}
      <section style={{ background: "#060A12", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <Tag color="#F59E0B">THE INTELLIGENCE ENGINE</Tag>
          <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px", color: "#FFFFFF" }}>
            Activates when modules connect.<br />
            <span style={{ color: "#F59E0B" }}>Compounds with every hire.</span>
          </h2>
          <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 540, margin: "0 auto 44px", lineHeight: 1.65 }}>
            The more modules you use, the more data flows through the intelligence engine. Aptitude scores at hire predict 90-day performance. Attendance patterns feed team health signals. The platform gets measurably smarter over time.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
            {INTELLIGENCE_BENEFITS.map(b => (
              <div key={b.title} style={{ background: "#13152A", border: "1px solid rgba(245,158,11,0.14)", borderRadius: 12, padding: "22px 20px", textAlign: "left" }}>
                <span style={{ fontSize: 24, display: "block", marginBottom: 10 }}>{b.icon}</span>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF", marginBottom: 7 }}>{b.title}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "72px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 700, margin: "0 0 12px", color: "#FFFFFF" }}>Start with Hire. Add everything else when you're ready.</h2>
        <p style={{ color: "#9CA3AF", marginBottom: 28, fontSize: 14, maxWidth: 420, margin: "0 auto 28px" }}>Free forever on the Starter plan. Upgrade when you want to unlock contacts.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "12px 28px", borderRadius: 8, textDecoration: "none" }}>Get early access</Link>
          <Link href="/pricing" style={{ border: "1px solid rgba(129,140,248,0.3)", color: "#818CF8", fontSize: 14, fontWeight: 500, padding: "12px 28px", borderRadius: 8, textDecoration: "none" }}>See pricing</Link>
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}

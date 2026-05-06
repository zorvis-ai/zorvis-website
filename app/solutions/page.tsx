"use client";
import { useState } from "react";
import { Nav, Footer, Tag } from "@/components/Nav";
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "india",
    flag: "🇮🇳",
    title: "India SME",
    sub: "50–500 employees",
    color: "#4F46E5",
    headline: "Enterprise-grade hiring intelligence. SME pricing.",
    desc: "India has millions of SMEs hiring every month. Every single one is doing it on spreadsheets, email, and gut instinct. Zorvis gives the 200-person BPO in Hyderabad the same AI hiring infrastructure as a Fortune 500 — at ₹9,999 a month.",
    verticals: ["BPO & Call Centres", "IT Services", "Manufacturing", "Retail & Logistics", "Staffing Agencies"],
    pain: [
      "400+ CVs every Monday with no scoring or structure",
      "₹2,000/candidate testing tools on separate platforms",
      "Offer letters on email, acceptances on WhatsApp, no record",
      "38% 90-day attrition with no data trail to learn from",
    ],
    solution: [
      "AI ranks every CV in minutes with score bands and summaries",
      "Built-in assessments — no TestGorilla or Mettl needed",
      "Digital offers + e-signature on candidate's preferred channel",
      "Hire quality scores that improve with every hiring decision",
    ],
    pricing: "₹9,999/mo · Free tier always available",
    cta: "Start free",
    href: "/waitlist",
    status: "Live · India",
    statusColor: "#10B981",
  },
  {
    id: "uae",
    flag: "🇦🇪",
    title: "UAE & GCC",
    sub: "South Asian workforce",
    color: "#F59E0B",
    headline: "The only platform built for pre-arrival screening.",
    desc: "Every UAE HR platform starts after someone joins. Zorvis starts before the visa. Screen workers in India before they arrive, collect Emirates ID on arrival, auto-generate WPS SIF every month. No other platform combines these in one system.",
    verticals: ["Hospitality & F&B", "Construction", "Facilities Management", "Healthcare Support", "Retail Chains"],
    pain: [
      "Workers in India screened via WhatsApp photos with no structure",
      "WPS SIF formatted manually in Excel every month",
      "Emirates ID collected photo by photo, stored nowhere organised",
      "Visa expiry tracked on paper — fines are the result",
    ],
    solution: [
      "Pre-arrival screening on each candidate's preferred channel",
      "Emirates ID OCR extracts and structures data automatically",
      "WPS SIF auto-generated on every payroll run",
      "Compliance calendar with 30-day alerts before every expiry",
    ],
    pricing: "AED 549/mo · Free tier always available",
    cta: "Get early access",
    href: "/waitlist",
    status: "Phase 1 · Month 7",
    statusColor: "#818CF8",
  },
  {
    id: "agency",
    flag: "🏢",
    title: "Staffing Agencies",
    sub: "White-label platform",
    color: "#818CF8",
    headline: "Your placements become scored. Your brand stays front.",
    desc: "One agency relationship covers many employer clients. Zorvis gives staffing agencies a white-label intelligence platform: pre-test every candidate before placement, show clients quality scores, charge premium for verified placements.",
    verticals: ["Recruitment Agencies", "Labour Contractors", "Executive Search", "Temp Staffing", "RPO Providers"],
    pain: [
      "Thousands of CVs screened manually every month",
      "Placement quality inconsistent — clients complaining",
      "No data to prove your agency's value over competitors",
      "Losing clients to agencies that have a structured system",
    ],
    solution: [
      "Your brand, Zorvis AI intelligence underneath",
      "Score every candidate before placement",
      "Multi-client dashboard — all employers in one view",
      "90-day placement ratings build your quality proof",
    ],
    pricing: "Scale plan — talk to us",
    cta: "Talk to us",
    href: "mailto:founder@zorvis.ai",
    status: "Month 3 launch",
    statusColor: "#818CF8",
  },
];

const WHY_NOW = [
  {
    icon: "🤖",
    title: "AI that actually works at SME scale",
    body: "LLM APIs are now affordable enough to score every candidate at a cost that makes sense for a ₹9,999/month product. This wasn't possible two years ago.",
  },
  {
    icon: "📱",
    title: "Candidates already on every channel",
    body: "Email, WhatsApp, SMS — your candidates are already there. Zorvis meets them where they are. Completion rates go up. Drop-off disappears.",
  },
  {
    icon: "🏗️",
    title: "UAE hiring boom is structural",
    body: "Major infrastructure, hospitality, and retail expansion across the GCC is driving sustained demand for South Asian workforce — and the compliance tools to manage them.",
  },
  {
    icon: "📋",
    title: "Compliance complexity is growing",
    body: "India's DPDP Act 2023, UAE's Labour Law reforms, WPS requirements — the compliance burden on SME HR managers is increasing. Zorvis automates it.",
  },
];

export default function SolutionsPage() {
  const [active, setActive] = useState("india");
  const cur = SOLUTIONS.find(s => s.id === active)!;

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#0C0E1A", color: "#F9FAFB", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ padding: "120px 32px 60px", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <Tag>SOLUTIONS</Tag>
        <h1 style={{ fontSize: "clamp(34px,6vw,60px)", fontWeight: 700, letterSpacing: "-0.03em", margin: "0 0 16px", color: "#FFFFFF" }}>
          Built for your market.<br />
          <span style={{ color: "#818CF8" }}>Your context. Your compliance.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#9CA3AF", lineHeight: 1.65 }}>
          India SME, UAE blue collar, GCC compliance, staffing agencies. One platform — configured for your exact reality.
        </p>
      </section>

      {/* ── SOLUTION TABS ── */}
      <section style={{ padding: "0 32px 100px", maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
          {SOLUTIONS.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              display: "flex", alignItems: "center", gap: 8,
              background: active === s.id ? `${s.color}18` : "#13152A",
              border: `1px solid ${active === s.id ? s.color : "rgba(255,255,255,0.08)"}`,
              color: active === s.id ? "#FFFFFF" : "#9CA3AF",
              borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
            }}>
              <span>{s.flag}</span>{s.title}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 36 }}>{cur.flag}</span>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", margin: 0 }}>{cur.title}</h2>
                <div style={{ display: "inline-block", background: `${cur.color}15`, border: `1px solid ${cur.color}28`, borderRadius: 100, padding: "2px 12px", fontSize: 11, fontWeight: 500, color: cur.color, marginTop: 4 }}>{cur.sub}</div>
              </div>
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.4, marginBottom: 14 }}>{cur.headline}</h3>
            <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7, marginBottom: 24 }}>{cur.desc}</p>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.1em", marginBottom: 10 }}>INDUSTRIES</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {cur.verticals.map(v => (
                  <div key={v} style={{ background: "#13152A", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 100, padding: "4px 12px", fontSize: 11, color: "#D1D5DB" }}>{v}</div>
                ))}
              </div>
            </div>

            <div style={{ background: "#13152A", border: `1px solid ${cur.color}22`, borderRadius: 12, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF" }}>{cur.pricing}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: `${cur.statusColor}14`, border: `1px solid ${cur.statusColor}25`, borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 600, color: cur.statusColor, marginTop: 6 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: cur.statusColor }} />{cur.status}
                </div>
              </div>
              <a href={cur.href} style={{ background: cur.color, color: "#FFFFFF", fontSize: 13, fontWeight: 600, padding: "10px 20px", borderRadius: 8, textDecoration: "none" }}>{cur.cta}</a>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 12, padding: "20px 22px" }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#EF4444", letterSpacing: "0.12em", marginBottom: 14 }}>THE PROBLEM TODAY</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cur.pain.map(p => (
                  <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#D1D5DB" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(239,68,68,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: 10, color: "#EF4444" }}>✕</span>
                    </div>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: `${cur.color}07`, border: `1px solid ${cur.color}18`, borderRadius: 12, padding: "20px 22px" }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: cur.color, letterSpacing: "0.12em", marginBottom: 14 }}>WITH ZORVIS AI</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cur.solution.map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#D1D5DB" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${cur.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="8" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke={cur.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NOW — customer-facing, no internal strategy ── */}
      <section style={{ background: "#060A12", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "80px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Tag>WHY ZORVIS NOW</Tag>
          <h2 style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 48px", color: "#FFFFFF" }}>
            The right moment to get this right.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))", gap: 16 }}>
            {WHY_NOW.map(w => (
              <div key={w.title} style={{ background: "#13152A", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "22px 22px", display: "flex", gap: 16 }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{w.icon}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", marginBottom: 7 }}>{w.title}</div>
                  <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.65 }}>{w.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "72px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(20px,3vw,34px)", fontWeight: 700, margin: "0 0 12px", color: "#FFFFFF" }}>Not sure which solution fits?</h2>
        <p style={{ color: "#9CA3AF", marginBottom: 28, fontSize: 14 }}>Tell us your situation. We'll tell you exactly how Zorvis fits — or doesn't.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "12px 28px", borderRadius: 8, textDecoration: "none" }}>Join the waitlist</Link>
          <a href="mailto:founder@zorvis.ai" style={{ border: "1px solid rgba(129,140,248,0.3)", color: "#818CF8", fontSize: 14, fontWeight: 500, padding: "12px 28px", borderRadius: 8, textDecoration: "none" }}>Talk to the founder</a>
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}

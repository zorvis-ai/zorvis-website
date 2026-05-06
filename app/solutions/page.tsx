"use client";
import { useState } from "react";
import { Nav, Footer, Tag } from "@/components/Nav";
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "india", flag: "🇮🇳", title: "India SME", sub: "50–500 employees", color: "#4F46E5",
    headline: "Enterprise-grade hiring intelligence. SME pricing.",
    desc: "Millions of India SMEs hire every month on spreadsheets, email, and gut instinct. Zorvis gives the 200-person BPO in Hyderabad the same AI hiring infrastructure as a Fortune 500 — at ₹9,999 a month.",
    verticals: ["BPO & Call Centres", "IT Services", "Manufacturing", "Retail & Logistics", "Staffing Agencies"],
    pain: ["400+ CVs every Monday with no scoring", "₹2,000/candidate testing on separate platforms", "Offer letters on email, acceptances on WhatsApp", "38% 90-day attrition with no data trail"],
    solution: ["AI ranks every CV in minutes with score bands", "Built-in assessments — no TestGorilla needed", "Digital offers + e-signature on preferred channel", "Hire quality scores that improve with every decision"],
    pricing: "₹9,999/mo · Free tier always available",
    cta: "Start free", href: "/waitlist", status: "Live · India", sc: "#059669",
  },
  {
    id: "uae", flag: "🇦🇪", title: "UAE & GCC", sub: "South Asian workforce", color: "#D97706",
    headline: "The only platform built for pre-arrival screening.",
    desc: "Every UAE HR platform starts after someone joins. Zorvis starts before the visa. Screen workers in India before they arrive, collect Emirates ID on arrival, auto-generate WPS SIF every month.",
    verticals: ["Hospitality & F&B", "Construction", "Facilities Management", "Healthcare Support", "Retail Chains"],
    pain: ["Workers in India screened via phone photos with no structure", "WPS SIF formatted manually in Excel every month", "Emirates ID photos stored nowhere organised", "Visa expiry tracked on paper — fines follow"],
    solution: ["Pre-arrival screening on each candidate's preferred channel", "Emirates ID OCR extracts and structures data automatically", "WPS SIF auto-generated on every payroll run", "Compliance calendar with 30-day alerts before every expiry"],
    pricing: "AED 549/mo · Free tier always available",
    cta: "Get early access", href: "/waitlist", status: "Phase 1 · Month 7", sc: "#7C3AED",
  },
  {
    id: "agency", flag: "🏢", title: "Staffing Agencies", sub: "White-label platform", color: "#7C3AED",
    headline: "Your placements become scored. Your brand stays front.",
    desc: "One agency relationship covers many employer clients. Zorvis gives staffing agencies a white-label intelligence platform — pre-test every candidate before placement, show clients quality scores.",
    verticals: ["Recruitment Agencies", "Labour Contractors", "Executive Search", "Temp Staffing", "RPO Providers"],
    pain: ["Thousands of CVs screened manually every month", "Placement quality inconsistent — clients complaining", "No data to prove your agency's value", "Losing clients to agencies with structured systems"],
    solution: ["Your brand, Zorvis AI intelligence underneath", "Score every candidate before placement", "Multi-client dashboard — all employers in one view", "90-day placement ratings build your quality proof"],
    pricing: "Scale plan — talk to us",
    cta: "Talk to us", href: "mailto:founder@zorvis.ai", status: "Month 3 launch", sc: "#7C3AED",
  },
];

const WHY_NOW = [
  { icon: "🤖", title: "AI that works at SME scale",     body: "LLM APIs are now affordable enough to score every candidate at a cost that makes sense for a ₹9,999/month product." },
  { icon: "📱", title: "Candidates already on every channel", body: "Email, WhatsApp, SMS — your candidates are already there. Zorvis meets them where they are. Completion rates go up." },
  { icon: "🏗️", title: "UAE hiring boom is structural",   body: "Major infrastructure, hospitality, and retail expansion across the GCC is driving sustained demand for South Asian workforce." },
  { icon: "📋", title: "Compliance complexity is growing", body: "India DPDP Act, UAE Labour Law reforms, WPS requirements — the compliance burden on SME HR is increasing. Zorvis automates it." },
];

export default function SolutionsPage() {
  const [active, setActive] = useState("india");
  const cur = SOLUTIONS.find(s => s.id === active)!;

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <section style={{ padding: "120px 32px 56px", textAlign: "center", maxWidth: 760, margin: "0 auto", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>SOLUTIONS</Tag>
        <h1 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 14px", color: "#0D1117" }}>
          Built for your market.<br /><span style={{ color: "#4F46E5" }}>Your context. Your compliance.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.6 }}>India SME, UAE blue collar, GCC compliance, staffing agencies. One platform — configured for your exact reality.</p>
      </section>

      <section style={{ padding: "0 32px 88px", maxWidth: 1060, margin: "0 auto" }}>
        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 44, flexWrap: "wrap" }}>
          {SOLUTIONS.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              display: "flex", alignItems: "center", gap: 7,
              background: active === s.id ? `${s.color}10` : "#F7F8FC",
              border: `1px solid ${active === s.id ? s.color : "#E2E6F0"}`,
              color: active === s.id ? s.color : "#374151",
              borderRadius: 10, padding: "9px 18px", fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s",
            }}>
              <span>{s.flag}</span>{s.title}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{ fontSize: 34 }}>{cur.flag}</span>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D1117", margin: 0 }}>{cur.title}</h2>
                <div style={{ display: "inline-block", background: `${cur.color}12`, border: `1px solid ${cur.color}28`, borderRadius: 100, padding: "2px 10px", fontSize: 11, fontWeight: 500, color: cur.color, marginTop: 4 }}>{cur.sub}</div>
              </div>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0D1117", lineHeight: 1.45, marginBottom: 12 }}>{cur.headline}</h3>
            <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7, marginBottom: 22 }}>{cur.desc}</p>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", marginBottom: 9 }}>INDUSTRIES</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cur.verticals.map(v => (
                  <div key={v} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 100, padding: "4px 11px", fontSize: 11, color: "#374151" }}>{v}</div>
                ))}
              </div>
            </div>
            <div style={{ background: "#F7F8FC", border: `1px solid ${cur.color}20`, borderRadius: 12, padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117" }}>{cur.pricing}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: `${cur.sc}12`, borderRadius: 100, padding: "2px 9px", fontSize: 10, fontWeight: 700, color: cur.sc, marginTop: 5 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: cur.sc }} />{cur.status}
                </div>
              </div>
              <a href={cur.href} style={{ background: cur.color, color: "#FFFFFF", fontSize: 13, fontWeight: 600, padding: "9px 18px", borderRadius: 8, textDecoration: "none", boxShadow: `0 3px 10px ${cur.color}30` }}>{cur.cta}</a>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#DC2626", letterSpacing: "0.12em", marginBottom: 12 }}>THE PROBLEM TODAY</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {cur.pain.map(p => (
                  <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: "#374151" }}>
                    <div style={{ width: 17, height: 17, borderRadius: "50%", background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: 9, color: "#DC2626" }}>✕</span>
                    </div>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: `${cur.color}07`, border: `1px solid ${cur.color}20`, borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: cur.color, letterSpacing: "0.12em", marginBottom: 12 }}>WITH ZORVIS AI</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {cur.solution.map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: "#374151" }}>
                    <div style={{ width: 17, height: 17, borderRadius: "50%", background: `${cur.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="7" height="6" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke={cur.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Tag>WHY ZORVIS NOW</Tag>
          <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 44px", color: "#0D1117" }}>The right moment to get this right.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 14 }}>
            {WHY_NOW.map(w => (
              <div key={w.title} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "20px 20px", display: "flex", gap: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{w.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 5 }}>{w.title}</div>
                  <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.65 }}>{w.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 32px", textAlign: "center", background: "#FFFFFF" }}>
        <h2 style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 800, margin: "0 0 10px", color: "#0D1117" }}>Not sure which solution fits?</h2>
        <p style={{ color: "#6B7280", marginBottom: 24, fontSize: 14 }}>Tell us your situation. We'll be direct about whether Zorvis fits — or doesn't.</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "11px 24px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>Join the waitlist</Link>
          <a href="mailto:founder@zorvis.ai" style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", color: "#374151", fontSize: 14, fontWeight: 500, padding: "11px 24px", borderRadius: 8, textDecoration: "none" }}>Talk to the founder</a>
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

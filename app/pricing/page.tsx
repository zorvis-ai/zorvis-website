"use client";
import { useState } from "react";
import { Nav, Footer, Tag } from "@/components/Nav";
import { PRICING } from "@/components/brand";
import Link from "next/link";
import RoiCalculator from "../components/RoiCalculator";

const COMPARE = [
  { f: "Active jobs",                   s: "3",            g: "Unlimited",    sc: "Unlimited" },
  { f: "CV ranking",                    s: "50/job",       g: "Unlimited",    sc: "Unlimited" },
  { f: "Contact details",               s: "Blurred",      g: "✓ Unlocked",   sc: "✓ Unlocked" },
  { f: "Assessments (any channel)",     s: "10/mo",        g: "200/mo",       sc: "Unlimited" },
  { f: "Digital offers + e-signature",  s: "—",            g: "✓",            sc: "✓" },
  { f: "Kanban pipeline",               s: "Basic",        g: "Full + auto",  sc: "Full + auto" },
  { f: "Employee HR OS",                s: "—",            g: "25 employees", sc: "100 employees" },
  { f: "UAE compliance module",         s: "—",            g: "—",            sc: "✓" },
  { f: "Agency white-label",            s: "—",            g: "—",            sc: "✓" },
  { f: "API access",                    s: "—",            g: "—",            sc: "✓" },
  { f: "Support",                       s: "Email",        g: "Priority",     sc: "SLA + dedicated" },
];

// Expanded FAQ — your existing 5 + 5 from PRFAQ doc, all pricing/value-relevant
const FAQS = [
  {
    q: "Is the free tier really free forever?",
    a: "Yes. No time limit. Keep using Starter as long as you want. Upgrade only when you need to unlock contact details or send more assessments.",
  },
  {
    q: "What does the free tier actually include — and what's the catch?",
    a: "Unlimited CVs uploaded. AI ranking with score bands and 2-line summaries. Industry percentile benchmark. Candidate names visible. What's locked: contact details (phone and email blurred) and pipeline actions (sending tests, generating offers, downloading data). The 'catch' is that you can't reach candidates without paying. The intelligence layer stays useful permanently.",
  },
  {
    q: "Why ₹9,999/month when Zoho Recruit is ₹3,000-5,000?",
    a: "Zoho Recruit is an applicant tracking database. It doesn't score, doesn't test, doesn't deliver assessments on WhatsApp, and doesn't generate digital offer letters. A Zoho user who wants aptitude testing pays ₹500-2,000 per candidate to a separate platform. On 50 hires a month, that's ₹25,000-100,000 in test costs alone — on top of their Zoho subscription. Zorvis bundles it all at zero marginal cost. Compared to Keka at ₹17,600/month for 50 employees with no AI testing, Zorvis Growth is 10% cheaper with structurally more capability.",
  },
  {
    q: "Which channels can candidates use?",
    a: "Email (default), WhatsApp, SMS, and a web portal. The candidate's preference is captured at first contact and respected through their entire journey.",
  },
  {
    q: "Which channels do employees use for the HR OS?",
    a: "WhatsApp, Slack, email, or the web portal — employee's choice. No forced app downloads.",
  },
  {
    q: "What integrations come with paid plans on Day 1?",
    a: "Job boards: Naukri, LinkedIn, Indeed, Bayt, GulfTalent (one-click multi-post). WhatsApp via WATI. Email via SendGrid. Calendars: Google + Outlook. BGV: SpringVerify. Storage: AWS S3. HRMS bi-directional sync (Darwinbox, Zoho People, Keka, GreytHR) and Meta Cloud API arrive in Months 3-6.",
  },
  {
    q: "Can I use my own offer letter template?",
    a: "Yes, on Scale and Enterprise. Upload your DOCX with logo and clauses; AI fills candidate data while preserving your formatting. Salary is never auto-filled — always entered manually. 5 India templates and 1 UAE bilingual template are included on every plan.",
  },
  {
    q: "Can I use Zorvis for both India and UAE hiring?",
    a: "Yes. The Scale plan includes the full UAE compliance module — WPS SIF, Emirates ID OCR, bilingual Arabic/English offers, and visa expiry calendar.",
  },
  {
    q: "How is the free tier not a permanent free CV ranking tool?",
    a: "Three things prevent it. Contacts are stripped server-side from the API response, so screenshots have no actionable data. New accounts get the same blurred view of the same CVs — there's nothing to gain by gaming. And the more you use the free tier, the more company-specific calibration data you build, which only becomes valuable on the paid pipeline. The architecture, not trust, closes the loop.",
  },
  {
    q: "Is annual billing available?",
    a: "Yes — annual billing is 2 months free (20% off) on Growth and Scale. Email founder@zorvis.ai to switch.",
  },
];

export default function PricingPage() {
  const [market, setMarket] = useState<"india" | "uae">("india");
  const plans = PRICING[market];

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: "120px 32px 60px", textAlign: "center", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>PRICING</Tag>
        <h1 style={{ fontSize: "clamp(30px,5vw,54px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 12px", color: "#0D1117" }}>
          Start free.<br /><span style={{ color: "#4F46E5" }}>Pay when it works.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", marginBottom: 32, maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Free tier is permanent. No trial clock. No credit card. Upgrade when you're ready.
        </p>
        {/* Market toggle */}
        <div style={{ display: "inline-flex", background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 100, padding: 4 }}>
          {(["india", "uae"] as const).map(m => (
            <button key={m} onClick={() => setMarket(m)} style={{
              background: market === m ? "#4F46E5" : "transparent",
              color: market === m ? "#FFFFFF" : "#6B7280",
              border: "none", borderRadius: 100, padding: "8px 22px",
              fontSize: 13, fontWeight: 600, cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s",
            }}>
              {m === "india" ? "🇮🇳 India (₹)" : "🇦🇪 UAE (AED)"}
            </button>
          ))}
        </div>
      </section>

      {/* PLAN CARDS */}
      <section style={{ padding: "0 32px 80px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
          {plans.map(p => (
            <div key={p.name} style={{
              background: "#FFFFFF",
              border: p.highlight ? `2px solid ${p.color}` : "1px solid #E2E6F0",
              borderRadius: 14, padding: "28px 24px", position: "relative",
              boxShadow: p.highlight ? `0 8px 28px ${p.color}25` : "0 1px 4px rgba(0,0,0,0.04)",
              transform: p.highlight ? "scale(1.02)" : "scale(1)",
              transition: "box-shadow 0.2s",
            }}>
              {p.highlight && (p as any).badge && (
                <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: p.color, color: "#FFFFFF", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap" }}>{(p as any).badge}</div>
              )}
              <div style={{ fontSize: 12, fontWeight: 700, color: p.color, letterSpacing: "0.06em", marginBottom: 8 }}>{p.name.toUpperCase()}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", color: "#0D1117" }}>{p.price}</span>
                <span style={{ fontSize: 13, color: "#9CA3AF" }}>{p.sub}</span>
              </div>
              <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 20 }}>{p.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: "#374151" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${p.color}14`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="8" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={p.href} style={{
                display: "block", textAlign: "center",
                background: p.highlight ? p.color : "#F7F8FC",
                border: `1px solid ${p.highlight ? p.color : "#E2E6F0"}`,
                color: p.highlight ? "#FFFFFF" : "#374151",
                fontSize: 14, fontWeight: 600, padding: "11px", borderRadius: 8,
                textDecoration: "none",
                boxShadow: p.highlight ? `0 4px 12px ${p.color}30` : "none",
              }}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "#9CA3AF", marginTop: 20 }}>
          All plans include assessment delivery on email, WhatsApp, SMS, and web portal — candidate's choice.
        </p>
      </section>

      {/* COMPARE TABLE */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 40px", color: "#0D1117" }}>Full comparison</h2>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#F7F8FC" }}>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#6B7280", fontWeight: 500, borderBottom: "1px solid #E2E6F0" }}>Feature</th>
                    {["Starter", "Growth", "Scale"].map(h => (
                      <th key={h} style={{ textAlign: "center", padding: "12px 16px", color: h === "Growth" ? "#4F46E5" : "#374151", fontWeight: 700, borderBottom: "1px solid #E2E6F0" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr key={row.f} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
                      <td style={{ padding: "11px 16px", color: "#374151", borderBottom: "1px solid #F3F4F6" }}>{row.f}</td>
                      <td style={{ padding: "11px 16px", textAlign: "center", color: "#9CA3AF", borderBottom: "1px solid #F3F4F6" }}>{row.s}</td>
                      <td style={{ padding: "11px 16px", textAlign: "center", color: row.g.startsWith("✓") ? "#059669" : "#374151", fontWeight: row.g.startsWith("✓") ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.g}</td>
                      <td style={{ padding: "11px 16px", textAlign: "center", color: row.sc.startsWith("✓") ? "#059669" : "#374151", fontWeight: row.sc.startsWith("✓") ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.sc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR — NEW */}
      <section style={{ padding: "72px 32px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Tag>SEE THE NUMBERS</Tag>
            <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 12px", color: "#0D1117" }}>
              What would you actually save?
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
              Slide your numbers. Get an honest savings estimate in 30 seconds. We use conservative assumptions —
              we'd rather you trust the number than be surprised after signing up.
            </p>
          </div>
          <RoiCalculator />
        </div>
      </section>

      {/* FAQ — EXPANDED */}
      <section style={{ padding: "72px 32px", background: "#F7F8FC", borderTop: "1px solid #E2E6F0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <Tag>COMMON QUESTIONS</Tag>
            <h2 style={{ fontSize: "clamp(22px,4vw,32px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 8px", color: "#0D1117" }}>
              Pricing and plan questions
            </h2>
            <p style={{ fontSize: 14, color: "#6B7280" }}>
              Everything else? See the <Link href="/faq" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 600 }}>full FAQ</Link>.
            </p>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "8px 28px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                style={{
                  borderBottom: i < FAQS.length - 1 ? "1px solid #E2E6F0" : "none",
                  padding: "20px 0",
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 600, color: "#0D1117", marginBottom: 8 }}>{faq.q}</div>
                <div style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2E6F0", padding: "56px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 800, margin: "0 0 10px", color: "#0D1117" }}>Start free. Upgrade when you're ready.</h2>
        <p style={{ color: "#6B7280", marginBottom: 24, fontSize: 14 }}>No credit card. First hire in days.</p>
        <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "12px 28px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>Get early access →</Link>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

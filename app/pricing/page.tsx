"use client";
import { useState } from "react";
import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";
import { PRICING } from "@/components/brand";
import Link from "next/link";
import RoiCalculator from "../components/RoiCalculator";

// Updated 4-column compare table
const COMPARE = [
  { f: "Active jobs",                   free: "1",          s: "5",            g: "Unlimited",    sc: "Unlimited" },
  { f: "CV ranking",                    free: "Unlimited",  s: "Unlimited",    g: "Unlimited",    sc: "Unlimited" },
  { f: "Contact details",               free: "Blurred",    s: "✓ Unlocked",   g: "✓ Unlocked",   sc: "✓ Unlocked" },
  { f: "Assessments (any channel)",     free: "5/mo",       s: "50/mo",        g: "200/mo",       sc: "Unlimited" },
  { f: "AI phone interviews (Beta)",    free: "—",          s: "50/mo",        g: "200/mo",       sc: "1,000/mo" },
  { f: "Digital offers + e-signature",  free: "—",          s: "✓",            g: "✓",            sc: "✓" },
  { f: "Kanban pipeline",               free: "Basic",      s: "Basic",        g: "Full + auto",  sc: "Full + auto" },
  { f: "Employee HR OS",                free: "—",          s: "—",            g: "25 employees", sc: "100 employees" },
  { f: "UAE compliance module",         free: "—",          s: "—",            g: "✓",            sc: "✓" },
  { f: "Agency white-label",            free: "—",          s: "—",            g: "—",            sc: "✓" },
  { f: "API access",                    free: "—",          s: "—",            g: "—",            sc: "✓" },
  { f: "Support",                       free: "Email",      s: "Email",        g: "Priority",     sc: "SLA + dedicated" },
];

const FAQS = [
  {
    q: "Is the free tier really free forever?",
    a: "Yes. No time limit. Keep using Free as long as you want. Upgrade only when you need to unlock contact details, send more assessments, or activate AI phone interviews.",
  },
  {
    q: "What does the free tier actually include — and what's the catch?",
    a: "1 active job. Unlimited CVs uploaded. AI ranking with score bands and 2-line summaries. Industry percentile benchmark. Candidate names visible. What is locked: contact details (phone and email blurred), pipeline actions (sending assessments beyond 5/month, generating offers, downloading data), and AI phone interviews (0 included). The catch: you cannot reach candidates without paying. The intelligence layer stays useful permanently.",
  },
  {
    q: "Why ₹4,999 for Starter when other ATS tools start at ₹3,000?",
    a: "Other ATS tools at ₹3,000 are tracking databases. They do not score, do not test, do not deliver assessments on the candidate's preferred channel, and do not include AI phone interviews. A Zoho Recruit user who wants aptitude testing pays ₹500-2,000 per candidate to a separate platform. On 50 hires a month, that is ₹25,000-100,000 in test costs alone — on top of their ATS subscription. Starter at ₹4,999 bundles 50 assessments and 50 AI phone interviews at zero marginal cost.",
  },
  {
    q: "Why ₹9,999 for Growth?",
    a: "Growth is the primary plan for HR managers hiring at volume. 200 assessments and 200 AI phone interviews per month, full Kanban pipeline with automated actions, digital offers with e-signature, UAE compliance module, and a 25-employee HR OS. Compared to Keka at ₹17,600/month for 50 employees with no AI testing, Growth is structurally more capable and cheaper.",
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
    a: "Yes. The UAE compliance module is included on Growth and Scale — WPS SIF, Emirates ID OCR, bilingual Arabic/English offers, and visa expiry calendar. Free and Starter cover the hiring layer; UAE compliance unlocks at Growth.",
  },
  {
    q: "How is the free tier not a permanent free CV ranking tool?",
    a: "Three things prevent it. Contacts are stripped server-side from the API response, so screenshots have no actionable data. New accounts get the same blurred view of the same CVs — there is nothing to gain by gaming. And the more you use the free tier, the more company-specific calibration data you build, which only becomes valuable on the paid pipeline. The architecture, not trust, closes the loop.",
  },
  {
    q: "Is annual billing available?",
    a: "Yes — annual billing is 2 months free (20% off) on Starter, Growth, and Scale. Email founder@zorvis.ai to switch.",
  },
];

export default function PricingPage() {
  const [market, setMarket] = useState<"india" | "uae">("india");
  const plans = PRICING[market];

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <PageHero
        eyebrow="PRICING"
        headline={
          <>
            Start free.{" "}
            <span style={{ color: "#4F46E5" }}>Pay when it works.</span>
          </>
        }
        summary="Free tier is permanent. No trial clock. No credit card. Every paid plan includes AI hiring, onboarding, and a quota of AI phone interviews."
        suiteContext="Part of Zorvis — the people platform for India and UAE companies."
      />

      {/* Market toggle */}
      <section style={{ padding: "32px 24px 8px", background: "#FFFFFF", textAlign: "center" }}>
        <div style={{ display: "inline-flex", background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 100, padding: 4 }}>
          {(["india", "uae"] as const).map(m => (
            <button key={m} onClick={() => setMarket(m)} style={{
              background: market === m ? "#4F46E5" : "transparent",
              color: market === m ? "#FFFFFF" : "#6B7280",
              border: "none", borderRadius: 100, padding: "8px 22px",
              fontSize: 13, fontWeight: 600, cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s",
            }}>
              {m === "india" ? "\u{1F1EE}\u{1F1F3} India (\u20B9)" : "\u{1F1E6}\u{1F1EA} UAE (AED)"}
            </button>
          ))}
        </div>
      </section>

      {/* PLAN CARDS — 4 cards, narrower min-width to fit cleanly on tablet+ */}
      <section style={{ padding: "0 32px 80px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {plans.map(p => (
            <div key={p.name} style={{
              background: "#FFFFFF",
              border: p.highlight ? `2px solid ${p.color}` : "1px solid #E2E6F0",
              borderRadius: 14, padding: "28px 22px", position: "relative",
              boxShadow: p.highlight ? `0 8px 28px ${p.color}25` : "0 1px 4px rgba(0,0,0,0.04)",
              transform: p.highlight ? "scale(1.02)" : "scale(1)",
              transition: "box-shadow 0.2s",
            }}>
              {p.highlight && (p as any).badge && (
                <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: p.color, color: "#FFFFFF", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap" }}>{(p as any).badge}</div>
              )}
              <div style={{ fontSize: 12, fontWeight: 700, color: p.color, letterSpacing: "0.06em", marginBottom: 8 }}>{p.name.toUpperCase()}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", color: "#0D1117" }}>{p.price}</span>
                <span style={{ fontSize: 12, color: "#9CA3AF" }}>{p.sub}</span>
              </div>
              <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 20, minHeight: 38 }}>{p.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 12.5, color: "#374151", lineHeight: 1.55 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${p.color}14`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <svg width="7" height="6" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                fontSize: 13, fontWeight: 600, padding: "11px", borderRadius: 8,
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

      {/* COMPARE TABLE — 4 columns now */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 40px", color: "#0D1117" }}>Full comparison</h2>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 720 }}>
                <thead>
                  <tr style={{ background: "#F7F8FC" }}>
                    <th style={{ textAlign: "left", padding: "12px 16px", color: "#6B7280", fontWeight: 500, borderBottom: "1px solid #E2E6F0", minWidth: 200 }}>Feature</th>
                    {[
                      { label: "Free",    color: "#6B7280" },
                      { label: "Starter", color: "#374151" },
                      { label: "Growth",  color: "#4F46E5" },
                      { label: "Scale",   color: "#374151" },
                    ].map(h => (
                      <th key={h.label} style={{ textAlign: "center", padding: "12px 16px", color: h.color, fontWeight: 700, borderBottom: "1px solid #E2E6F0" }}>{h.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr key={row.f} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
                      <td style={{ padding: "11px 16px", color: "#374151", borderBottom: "1px solid #F3F4F6" }}>{row.f}</td>
                      <td style={{ padding: "11px 16px", textAlign: "center", color: row.free === "—" ? "#9CA3AF" : (row.free.startsWith("✓") ? "#059669" : "#9CA3AF"), fontWeight: row.free.startsWith("✓") ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.free}</td>
                      <td style={{ padding: "11px 16px", textAlign: "center", color: row.s === "—" ? "#9CA3AF" : (row.s.startsWith("✓") ? "#059669" : "#374151"), fontWeight: row.s.startsWith("✓") ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.s}</td>
                      <td style={{ padding: "11px 16px", textAlign: "center", color: row.g === "—" ? "#9CA3AF" : (row.g.startsWith("✓") ? "#059669" : "#4F46E5"), fontWeight: row.g.startsWith("✓") || row.g.includes("/mo") ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.g}</td>
                      <td style={{ padding: "11px 16px", textAlign: "center", color: row.sc === "—" ? "#9CA3AF" : (row.sc.startsWith("✓") ? "#059669" : "#374151"), fontWeight: row.sc.startsWith("✓") ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.sc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE VISIBILITY GRID — 4 columns */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <Tag>WHAT'S IN EACH PLAN</Tag>
            <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 12px", color: "#0D1117" }}>
              Modules and AI interview quotas, by plan
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
              Six modules, one platform. Free starts you on Hire. Paid plans unlock the full hire-to-retain flow with AI phone interviews included — no per-call fees.
            </p>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 720 }}>
                <thead>
                  <tr style={{ background: "#F7F8FC" }}>
                    <th style={{ textAlign: "left", padding: "14px 18px", color: "#6B7280", fontWeight: 500, borderBottom: "1px solid #E2E6F0", minWidth: 180 }}>Module</th>
                    <th style={{ textAlign: "center", padding: "14px 12px", color: "#6B7280", fontWeight: 700, borderBottom: "1px solid #E2E6F0" }}>Free</th>
                    <th style={{ textAlign: "center", padding: "14px 12px", color: "#374151", fontWeight: 700, borderBottom: "1px solid #E2E6F0" }}>Starter</th>
                    <th style={{ textAlign: "center", padding: "14px 12px", color: "#4F46E5", fontWeight: 700, borderBottom: "1px solid #E2E6F0" }}>Growth</th>
                    <th style={{ textAlign: "center", padding: "14px 12px", color: "#374151", fontWeight: 700, borderBottom: "1px solid #E2E6F0" }}>Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mod: "Hire", note: "AI ranking · Channel-native tests", launch: "JULY 2026", free: "Limited", s: "✓", g: "✓", sc: "✓" },
                    { mod: "Interview", note: "AI phone interviews in 8 languages", launch: "OCT 2026", free: "—", s: "50/mo", g: "200/mo", sc: "1,000/mo" },
                    { mod: "Onboard", note: "Day 1 documents + asset chain", launch: "JULY 2026", free: "—", s: "✓", g: "✓", sc: "✓" },
                    { mod: "Pay", note: "Payroll + WPS for UAE", launch: "OCT 2026", free: "—", s: "—", g: "Limited", sc: "✓" },
                    { mod: "Perform", note: "Reviews anchored to hire baseline", launch: "OCT 2026", free: "—", s: "—", g: "✓", sc: "✓" },
                    { mod: "Retain", note: "Team health · Never individual scoring", launch: "OCT 2026", free: "—", s: "—", g: "✓", sc: "✓" },
                  ].map((row, i) => (
                    <tr key={row.mod} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
                      <td style={{ padding: "14px 18px", borderBottom: "1px solid #F3F4F6" }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1117", marginBottom: 2 }}>{row.mod}</div>
                        <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 3 }}>{row.note}</div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: row.launch === "JULY 2026" ? "#4F46E5" : "#9CA3AF" }}>○ {row.launch}</div>
                      </td>
                      <td style={{ padding: "14px 12px", textAlign: "center", color: row.free === "—" ? "#9CA3AF" : (row.free === "✓" ? "#059669" : "#374151"), fontWeight: row.free === "✓" ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.free}</td>
                      <td style={{ padding: "14px 12px", textAlign: "center", color: row.s === "—" ? "#9CA3AF" : (row.s === "✓" ? "#059669" : "#374151"), fontWeight: row.s === "✓" ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.s}</td>
                      <td style={{ padding: "14px 12px", textAlign: "center", color: row.g === "—" ? "#9CA3AF" : (row.g === "✓" ? "#059669" : "#4F46E5"), fontWeight: row.g === "✓" || row.g.includes("/mo") ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.g}</td>
                      <td style={{ padding: "14px 12px", textAlign: "center", color: row.sc === "—" ? "#9CA3AF" : (row.sc === "✓" ? "#059669" : "#374151"), fontWeight: row.sc === "✓" ? 600 : 400, borderBottom: "1px solid #F3F4F6" }}>{row.sc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "#9CA3AF", marginTop: 18, lineHeight: 1.6 }}>
            AI interview overage: ₹49 (Starter) · ₹39 (Growth) · ₹29 (Scale) per call beyond your monthly quota.<br />
            Each interview is a 5-minute AI phone call in the candidate's preferred language. Cost-per-interview drops as your plan scales.
          </p>
        </div>
      </section>

      {/* ROI CALCULATOR */}
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

      {/* FAQ */}
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

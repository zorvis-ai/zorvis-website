"use client";
import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ZorvisModulesStrip from "@/components/ZorvisModulesStrip";
import Link from "next/link";
import {
  Search,
  Phone,
  UserCheck,
  Wallet,
  TrendingUp,
  Heart,
  ArrowRight,
  CheckCircle2,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

// ─── Module sections ──────────────────────────────────────────────────────────
const MODULE_SECTIONS = [
  {
    id: "hire",
    icon: Search,
    num: "01",
    name: "Hire",
    status: "JULY 2026",
    statusColor: "#4F46E5",
    headline: "Rank 1,000 CVs in 3 minutes.",
    desc: "Multi-board posting, blind-first AI ranking, score bands with explainable narratives, and aptitude tests delivered on the candidate's preferred channel — email, WhatsApp, SMS, or web portal.",
    bullets: [
      "AI Job Description generator — paste a brief, get a full JD in 30 seconds",
      "One-click multi-post: Naukri, LinkedIn, Indeed, Bayt, GulfTalent",
      "Blind-first ranking: name/photo/age stripped before AI scoring",
      "ZIE composite score band — aptitude, JD-fit, BGV, behaviour",
      "500-question test bank per category, configurable per role",
      "Channel-native test delivery — no app downloads, 3-second load on 4G",
    ],
  },
  {
    id: "interview",
    icon: Phone,
    num: "02",
    name: "Interview",
    status: "OCT 2026 · BETA",
    statusColor: "#7C3AED",
    headline: "AI phone interviews. Eight languages.",
    desc: "Top scorers from your aptitude test get a 5-minute phone call from our AI in their preferred language. Standardized 4–5 question flow, live scoring, transcript delivered before HR opens their calendar.",
    bullets: [
      "Eight languages: English, Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, Arabic",
      "Hinglish code-switching supported natively",
      "Standardized question banks tuned for BPO and blue-collar roles",
      "DPDP-compliant: 3-second consent disclosure, 30-day retention, auto-delete",
      "Live scoring on communication, availability, role fit",
      "AI ranks. Humans always make the final hire decision.",
    ],
    emphasis: true, // Highlights this module — it's the differentiator
  },
  {
    id: "onboard",
    icon: UserCheck,
    num: "03",
    name: "Onboard",
    status: "JULY 2026",
    statusColor: "#4F46E5",
    headline: "Day 1 in hours, not days.",
    desc: "BGV clears, candidate becomes employee. Documents collected on the preferred channel. Day 1 chain auto-runs: NDA, IT asset request, buddy intro, 30/60/90-day milestones — all without manual data entry.",
    bullets: [
      "Zero re-entry — all data carries over from hiring",
      "Document collection on preferred channel (Aadhaar/PAN India · Emirates ID UAE)",
      "AI pre-checks every document for legibility",
      "Day 1 onboarding chain runs automatically",
      "30/60/90-day milestone reviews scheduled at offer-accept",
      "AWS Textract OCR for ID extraction",
    ],
  },
  {
    id: "pay",
    icon: Wallet,
    num: "04",
    name: "Pay",
    status: "OCT 2026",
    statusColor: "#9CA3AF",
    headline: "Zero compliance errors. India + UAE.",
    desc: "Payroll runs, statutory filings, WPS for UAE — generated automatically from the same employee record that flowed through hiring and onboarding. No data re-entry. No spreadsheet handoffs.",
    bullets: [
      "Monthly payroll runs with PF, ESI, PT, TDS automated",
      "WPS SIF auto-generated for UAE on every payroll cycle",
      "Bilingual Arabic/English payslips for UAE teams",
      "Visa expiry calendar with 30-day alerts",
      "Compliance dashboard: filings due, deadlines, fines avoided",
      "Direct integration with banks for salary disbursement",
    ],
  },
  {
    id: "perform",
    icon: TrendingUp,
    num: "05",
    name: "Perform",
    status: "OCT 2026",
    statusColor: "#9CA3AF",
    headline: "Reviews that take 1 hour, not 1 week.",
    desc: "OKRs, 1:1s, peer feedback, calibrated reviews — anchored to the hire-day baseline. The aptitude score from hiring becomes a 90-day performance predictor that gets sharper with every review cycle.",
    bullets: [
      "OKR setting and check-ins on preferred channel",
      "Peer feedback surveys auto-scheduled",
      "Manager 1:1 prep generated from prior context",
      "Hire-to-perform connection: aptitude scores predict performance",
      "Calibrated reviews — manager bias surfaced and adjusted",
      "Promotion/raise recommendations grounded in data",
    ],
  },
  {
    id: "retain",
    icon: Heart,
    num: "06",
    name: "Retain",
    status: "OCT 2026",
    statusColor: "#9CA3AF",
    headline: "Team health. Never individual surveillance.",
    desc: "Department-level health signals surface conditions creating disengagement before attrition spikes. We do not — and will never — store individual flight-risk scores. Ethical by architecture.",
    bullets: [
      "Department-level health scoring only",
      "Aggregate signals: helpdesk volume, goal completion, attendance patterns",
      "30-day early-warning surfaces before attrition",
      "Source ROI tracking — which job board produces best 90-day hires",
      "Monthly intelligence reports with 3 recommended actions",
      "No individual attrition risk scores stored. Permanent.",
    ],
  },
];

// ─── Intelligence Engine ──────────────────────────────────────────────────────
const INTELLIGENCE = [
  { icon: "🎯", title: "Smarter with every hire",      body: "Each outcome feeds back into scoring accuracy. The more you hire, the better the predictions get." },
  { icon: "🔗", title: "Hire connects to perform",      body: "The aptitude score at hire becomes a 90-day performance predictor. No other SME platform has this connection." },
  { icon: "📊", title: "Team signals, not gossip",      body: "Aggregate signals per department surface conditions creating disengagement — before attrition spikes." },
  { icon: "✅", title: "AI ranks. You decide. Always.", body: "Every AI output has a plain-language explanation. Humans make every final call. Non-negotiable." },
];

const CHANNEL_CHIPS = [
  { icon: "✉️", label: "Email",      note: "Default" },
  { icon: "💬", label: "WhatsApp",   note: "Where preferred" },
  { icon: "📱", label: "SMS",        note: "Fallback" },
  { icon: "🔗", label: "Slack",      note: "Employees" },
  { icon: "🌐", label: "Web portal", note: "Always available" },
];

export default function ProductPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <PageHero
        eyebrow="THE PLATFORM"
        headline={
          <>
            Six modules. One platform.<br />
            <span style={{ color: "#4F46E5" }}>Every step feeds the next.</span>
          </>
        }
        summary="From the first CV ranked to the team-health signal three years later — Zorvis runs the entire people lifecycle on one connected data spine."
        suiteContext="Hire-to-retain, on the candidate's preferred channel."
        hideModulesStrip
      />

      {/* Modules strip — full version, since this IS the product page */}
      <ZorvisModulesStrip variant="default" />

      {/* Channel chips strip */}
      <section style={{ padding: "32px 32px 16px", textAlign: "center", background: "#FFFFFF" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#9CA3AF", marginBottom: 12, textTransform: "uppercase" }}>
          Every touchpoint, candidate's choice of channel
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {CHANNEL_CHIPS.map(c => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 6, background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 100, padding: "5px 13px", fontSize: 12, color: "#374151" }}>
              <span>{c.icon}</span><span style={{ fontWeight: 600 }}>{c.label}</span><span style={{ color: "#9CA3AF" }}>· {c.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Module sections — stacked, anchored */}
      <section style={{ padding: "48px 32px 64px", maxWidth: 1040, margin: "0 auto" }}>
        {MODULE_SECTIONS.map((m, idx) => (
          <div
            key={m.id}
            id={m.id}
            style={{
              scrollMarginTop: 80, // accounts for fixed nav
              padding: "44px 0",
              borderTop: idx === 0 ? "none" : "1px solid #E2E6F0",
              display: "grid",
              gridTemplateColumns: "minmax(280px, 1fr) minmax(280px, 1.2fr)",
              gap: 48,
              alignItems: "start",
            }}
            className="zv-module-section"
          >
            {/* Left — module header */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: m.emphasis ? "#F5F3FF" : "#EEF2FF",
                  border: `1px solid ${m.emphasis ? "#DDD6FE" : "#C7D2FE"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: m.emphasis ? "#7C3AED" : "#4F46E5",
                }}>
                  <m.icon style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em" }}>MODULE {m.num}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", letterSpacing: "-0.01em" }}>{m.name}</div>
                </div>
              </div>
              <div style={{
                display: "inline-block",
                background: `${m.statusColor}14`,
                border: `1px solid ${m.statusColor}30`,
                color: m.statusColor,
                fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                padding: "3px 10px", borderRadius: 100,
                marginBottom: 16,
              }}>
                ○ {m.status}
              </div>
              <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0D1117", margin: "0 0 14px", lineHeight: 1.2 }}>
                {m.headline}
              </h2>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7, marginBottom: 0 }}>
                {m.desc}
              </p>

              {/* Special CTA for AI Interview */}
              {m.emphasis && (
                <Link
                  href="/waitlist?interest=ai-interview"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "#7C3AED", color: "#FFFFFF",
                    fontSize: 13, fontWeight: 600,
                    padding: "10px 18px", borderRadius: 8,
                    textDecoration: "none", marginTop: 20,
                    boxShadow: "0 4px 12px rgba(124,58,237,0.25)",
                  }}
                >
                  Apply for the Beta <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              )}
            </div>

            {/* Right — bullets */}
            <div style={{
              background: m.emphasis ? "#FAF5FF" : "#F7F8FC",
              border: `1px solid ${m.emphasis ? "#DDD6FE" : "#E2E6F0"}`,
              borderRadius: 14,
              padding: "22px 24px",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {m.bullets.map(b => (
                  <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{
                      flexShrink: 0, marginTop: 2,
                      color: m.emphasis ? "#7C3AED" : "#4F46E5",
                    }}>
                      <CheckCircle2 style={{ width: 16, height: 16 }} />
                    </div>
                    <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Intelligence Engine */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <Tag color="#059669">THE INTELLIGENCE ENGINE</Tag>
          <h2 style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 14px", color: "#0D1117" }}>
            Activates when modules connect.<br />
            <span style={{ color: "#059669" }}>Compounds with every hire.</span>
          </h2>
          <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.65 }}>
            The more modules you use, the more data flows through the intelligence engine. Gets measurably smarter over time.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            {INTELLIGENCE.map(b => (
              <div key={b.title} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "20px 18px", textAlign: "left", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                <span style={{ fontSize: 22, display: "block", marginBottom: 9 }}>{b.icon}</span>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 5 }}>{b.title}</div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "64px 32px", textAlign: "center", background: "#FFFFFF" }}>
        <h2 style={{ fontSize: "clamp(20px,3vw,32px)", fontWeight: 800, margin: "0 0 10px", color: "#0D1117" }}>Start with Hire. Add the rest when you are ready.</h2>
        <p style={{ color: "#6B7280", marginBottom: 24, fontSize: 14, maxWidth: 440, margin: "0 auto 24px" }}>Free tier permanent. No credit card.</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "11px 24px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>Get early access</Link>
          <Link href="/pricing" style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", color: "#374151", fontSize: 14, fontWeight: 500, padding: "11px 24px", borderRadius: 8, textDecoration: "none" }}>See pricing</Link>
        </div>
      </section>

      <Footer />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @media (max-width: 768px) {
          .zv-module-section {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
        }
      `}</style>
    </div>
  );
}

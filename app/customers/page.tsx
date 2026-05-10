"use client";
import Link from "next/link";
import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";

// NOTE: We are pre-launch. We deliberately do not put fabricated quotes,
// names, photos, or metrics on this page. When real customer outcomes exist,
// they replace the founding-cohort framing here — not the other way around.

const COHORT_PROFILES = [
  {
    industry: "BPO · Voice & Chat",
    location: "Bangalore, India",
    size: "180 employees",
    hiring: "~50 hires/month",
    challenge: "400 CVs land every Monday. Tests on a separate platform. Pipeline tracked in three different spreadsheets.",
    using: ["Hire", "Onboard"],
    color: "#4F46E5",
  },
  {
    industry: "Manufacturing · Industrial",
    location: "Pune, India",
    size: "350 employees",
    hiring: "~30 blue-collar hires/month",
    challenge: "Reliability and shift-fit matter more than cognitive scores. Document collection runs over phone photos with no structure.",
    using: ["Hire", "Onboard"],
    color: "#D97706",
  },
  {
    industry: "Hospitality · F&B",
    location: "Dubai, UAE",
    size: "240 employees",
    hiring: "~25 hires/month, mostly from India",
    challenge: "Workers screened in India before visa costs. Emirates ID OCR on arrival. WPS SIF must run cleanly every payroll cycle.",
    using: ["Hire", "Onboard", "UAE Compliance"],
    color: "#059669",
  },
];

const COHORT_BENEFITS = [
  {
    title: "Founding-customer pricing",
    body: "12 months locked at early-access rates. Even when public pricing increases.",
  },
  {
    title: "Direct line to the founding team",
    body: "Slack channel access. Your priorities shape the roadmap.",
  },
  {
    title: "Co-design new modules",
    body: "Interview, Pay, Perform, Retain — your inputs shape what ships first.",
  },
  {
    title: "Onboarding done with you",
    body: "We set up your first job, first ranking run, and first offer letter alongside you.",
  },
];

export default function CustomersPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <PageHero
        eyebrow="FOUNDING COHORT"
        headline={
          <>
            Pre-launch. Building with a<br />
            <span style={{ color: "#4F46E5" }}>small founding cohort.</span>
          </>
        }
        summary="We're not putting fabricated testimonials here. Zorvis goes live July 2026 with a small group of design partners across India BPO, manufacturing, and UAE hospitality. When their outcomes are real, they replace this page."
        suiteContext="India · UAE · Selected design partners only"
      />

      {/* Honest pre-launch callout */}
      <section style={{ padding: "48px 32px 16px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 14, padding: "24px 28px", display: "flex", gap: 18, alignItems: "flex-start" }}>
          <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", background: "#EEF2FF", border: "1px solid #C7D2FE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
            ✋
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#0D1117", marginBottom: 6 }}>
              You'll find no fake testimonials on this page.
            </div>
            <div style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.7 }}>
              SaaS sites quote names, faces, and percentages before their first customer logs in. We refuse to. The companies in our founding cohort are real — and named — only after launch, with their permission, and only with outcomes they can defend on record.
            </div>
          </div>
        </div>
      </section>

      {/* Founding cohort — anonymized profiles */}
      <section style={{ padding: "48px 32px 64px", maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Tag>FOUNDING COHORT PROFILES</Tag>
          <h2 style={{ fontSize: "clamp(22px,4vw,32px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 12px", color: "#0D1117" }}>
            Three companies. Three contexts. One platform.
          </h2>
          <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 540, margin: "0 auto", lineHeight: 1.65 }}>
            These are the kinds of companies actively co-designing Zorvis with us. Names withheld until launch. Their feedback shapes every release.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
          {COHORT_PROFILES.map((p, i) => (
            <div key={i} style={{
              background: "#FFFFFF",
              border: "1px solid #E2E6F0",
              borderRadius: 14,
              padding: "24px 22px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.color, borderRadius: "14px 14px 0 0" }} />
              <div style={{ fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: "0.06em", marginBottom: 12, marginTop: 4 }}>
                {p.industry.toUpperCase()}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16, fontSize: 13, color: "#374151" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>Location</span>
                  <span style={{ fontWeight: 600 }}>{p.location}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>Size</span>
                  <span style={{ fontWeight: 600 }}>{p.size}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#9CA3AF" }}>Hiring volume</span>
                  <span style={{ fontWeight: 600 }}>{p.hiring}</span>
                </div>
              </div>

              <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 14, marginBottom: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.08em", marginBottom: 6 }}>WHAT THEY BROUGHT US</div>
                <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>{p.challenge}</p>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.08em", marginBottom: 6 }}>USING</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.using.map(u => (
                    <span key={u} style={{ background: `${p.color}14`, border: `1px solid ${p.color}30`, color: p.color, fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 100 }}>
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What founding cohort gets */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <Tag color="#7C3AED">WHAT FOUNDING COHORT GETS</Tag>
            <h2 style={{ fontSize: "clamp(22px,4vw,32px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 12px", color: "#0D1117" }}>
              Joining now means more than early access.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
            {COHORT_BENEFITS.map(b => (
              <div key={b.title} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "20px 20px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1117", marginBottom: 6 }}>{b.title}</div>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FFFFFF", padding: "72px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, margin: "0 0 14px", color: "#0D1117", letterSpacing: "-0.02em" }}>
          Be one of the first hundred companies on Zorvis.
        </h2>
        <p style={{ color: "#6B7280", marginBottom: 28, fontSize: 15, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.6 }}>
          Founding cohort is capped. Email founder@zorvis.ai or join the early-access list.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "12px 28px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>
            Join early access
          </Link>
          <a href="mailto:founder@zorvis.ai" style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", color: "#374151", fontSize: 14, fontWeight: 500, padding: "12px 28px", borderRadius: 8, textDecoration: "none" }}>
            Email the founder
          </a>
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

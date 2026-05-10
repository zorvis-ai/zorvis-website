"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";
import {
  Shield,
  Lock,
  Eye,
  Scale,
  Database,
  Globe,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Brain,
  Users,
  FileSearch,
  Trash2,
} from "lucide-react";

// 16 non-negotiable principles from Doc 1
const PRINCIPLES = [
  { num: "P1",  title: "Blind-first resume ranking",            body: "Strip name, photo, address, and graduation year before AI embedding. HR sees a ranked skills profile first; identity is revealed only when HR chooses to view." },
  { num: "P2",  title: "Role-appropriate test configs only",    body: "Test composition is determined by role category. Blue-collar tests are not white-collar tests. Regional language options. Connection speed factored into timing tolerances." },
  { num: "P3",  title: "Score bands, not false precision",      body: "Show 68–74, never 73. All four score components are always visible on the candidate card — never hidden in a hover tooltip. BGV minor flags do not permanently depress composite scores across roles." },
  { num: "P4",  title: "Anti-cheat with genuine consent",       body: "Camera proctoring is genuine opt-in with plain-language explanation. Decline shows an 'unproctored' flag for HR context only — never auto-rejects, never feeds the composite score. Speed scoring removed from composite entirely. Camera snapshots auto-delete after 30 days." },
  { num: "P5",  title: "Training data quality gates",           body: "Minimum 2-rater agreement before data enters ML training. Objective signals checked alongside subjective manager ratings. Manager anomaly detection. Quarterly demographic correlation audit on every model output." },
  { num: "P6",  title: "AI draft after human draft",            body: "Manager writes their own performance review draft first. AI suggestion is shown only after, clearly labelled 'AI suggested'. This prevents anchoring and preserves manager judgment." },
  { num: "P7",  title: "BGV dispute pathway",                   body: "Any non-CLEAR background verification result triggers a candidate notification and response window before HR makes a final decision. The candidate sees the flag and can contest it." },
  { num: "P8",  title: "Right to erasure made easy",            body: "Every rejection message includes 'Reply DELETE to erase your data immediately.' Camera snapshots auto-delete after 30 days, always. All data is auto-deleted at the 12-month DPDP retention boundary." },
  { num: "P9",  title: "Referral diversity monitoring",         body: "Referral candidates enter the identical pipeline with identical scoring — no preferential treatment. HR is flagged when referrals exceed 40% of hires in any department in any rolling 3-month period." },
  { num: "P10", title: "PIP includes employer obligations",     body: "Performance Improvement Plan templates require documenting the SUPPORT the company will provide alongside employee milestones. Both manager AND HR Admin must approve before issuance. Employee receives a copy immediately." },
  { num: "P11", title: "Salary benchmarks show variance",       body: "Always show ranges, never single averages. Demographic breakdowns where data exists. The benchmark itself is flagged when it shows internal variance suggesting historical pay bias." },
  { num: "P12", title: "Employee transparency by default",      body: "Employees have full read access to their own digital twin at all times. Plain-language explanation for every score. 18-month signal decay. Employee annotation rights. Exit means individual scores are deleted." },
  { num: "P13", title: "Team-level retention only",             body: "NO individual attrition risk score. Ever. NO named person in any HR alert. Ever. NO risk score in any employee record. Team health score replaces individual risk score — a permanent product invariant." },
  { num: "P14", title: "Calibration with statistical rigour",   body: "Interviewer calibration data is shown only when n>20. Always with confidence interval. Coaching framing only — never used as performance evaluation of the interviewer." },
  { num: "P15", title: "Exit data anonymised",                  body: "Exit interview responses are visible to HR Admin only — never to direct manager. Trend data is shown without naming individuals. 90-day post-exit survey for honest data after the relationship is over." },
  { num: "P16", title: "Succession planning transparency",      body: "Employees are informed if they are in a succession plan. Readiness labels are shared with the employee. Labels are reviewed every 6 months. 'Ready in 3 years' triggers development support, not deprioritisation." },
];

// Security architecture from Doc 2
const SECURITY = [
  { icon: Lock,       title: "Encryption at rest",       body: "AES-256 SSE on all S3 buckets — candidate documents, test data, recordings. PostgreSQL Transparent Data Encryption enabled by default at the database layer." },
  { icon: Lock,       title: "Encryption in transit",    body: "TLS 1.3 enforced for every API call and web request. Cloudflare SSL termination. HSTS headers site-wide. No plain HTTP anywhere in the stack." },
  { icon: Database,   title: "Database-level isolation", body: "Multi-tenancy enforced via PostgreSQL Row-Level Security. Every single table has an RLS policy. Company A cannot query Company B data even if the application layer has a bug." },
  { icon: FileSearch, title: "Magic link security",      body: "Test invitation links use JWT RS256 signed tokens with a 48-hour expiry. Tokens are invalidated server-side on first use — they cannot be reused or replayed." },
];

// Data residency
const RESIDENCY = [
  { region: "India",   flag: "🇮🇳", location: "AWS ap-south-1 (Mumbai)",  detail: "All India company data stored exclusively in Mumbai. Indian candidate data never processed outside India. DPDP Act 2023 compliant."  },
  { region: "UAE",     flag: "🇦🇪", location: "AWS me-south-1 (Bahrain)", detail: "All UAE company data stored exclusively in Bahrain. No cross-border data transfer without explicit consent. UAE PDPL compliant." },
];

// Compliance frameworks
const COMPLIANCE = [
  { framework: "DPDP Act 2023 (India)",      status: "Live",          colour: "#10B981" },
  { framework: "UAE PDPL",                   status: "Live",          colour: "#10B981" },
  { framework: "UAE Labour Law (Decree 33)", status: "Live",          colour: "#10B981" },
  { framework: "GDPR Compliant",             status: "Live",          colour: "#10B981" },
  { framework: "SOC 2 Type II",              status: "In progress",   colour: "#F59E0B" },
  { framework: "ISO 27001",                  status: "In progress",   colour: "#F59E0B" },
];

const SECTIONS = [
  { id: "philosophy",   label: "Our philosophy" },
  { id: "principles",   label: "16 principles" },
  { id: "security",     label: "Security" },
  { id: "residency",    label: "Data residency" },
  { id: "compliance",   label: "Compliance" },
  { id: "boundaries",   label: "What we won't build" },
];

export default function TrustPage() {
  const [activeSection, setActiveSection] = useState("philosophy");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveSection(id);
    const navHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <PageHero
        variant="dark"
        eyebrow="TRUST & SECURITY"
        headline={
          <>
            AI ranks.{" "}
            <span style={{
              background: "linear-gradient(90deg,#A78BFA 0%,#7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Humans decide.</span>{" "}
            Always.
          </>
        }
        summary="Trust is the product. Every AI output at Zorvis has a plain-language explanation, a confidence band, and a contestability path for the person it describes. These are non-negotiable product requirements, not aspirations."
        suiteContext="Part of Zorvis - the people platform for India and UAE companies."
      />

      <section style={{ padding: "24px 24px 16px", background: "#0D1117" }}>
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10,
          maxWidth: 720, margin: "0 auto",
        }}>
          {[
            { label: "DPDP Act 2023" },
            { label: "UAE PDPL" },
            { label: "UAE Labour Law" },
            { label: "GDPR" },
            { label: "AES-256" },
            { label: "TLS 1.3" },
            { label: "Mumbai + Bahrain" },
          ].map((b) => (
            <div key={b.label} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "7px 13px",
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.25)",
              borderRadius: 100,
              fontSize: 12, color: "#C4B5FD", fontWeight: 500,
            }}>
              <Shield style={{ width: 12, height: 12 }} />
              {b.label}
            </div>
          ))}
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      <div style={{
        position: "sticky", top: 60, zIndex: 50,
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #E2E6F0",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "0 32px",
          display: "flex", gap: 4, overflowX: "auto",
        }}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              style={{
                padding: "16px 14px", fontSize: 13, fontWeight: 500,
                fontFamily: "'DM Sans',sans-serif",
                color: activeSection === s.id ? "#4F46E5" : "#6B7280",
                background: "transparent", border: "none", cursor: "pointer",
                borderBottom: `2px solid ${activeSection === s.id ? "#4F46E5" : "transparent"}`,
                whiteSpace: "nowrap", transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { if (activeSection !== s.id) e.currentTarget.style.color = "#374151"; }}
              onMouseLeave={(e) => { if (activeSection !== s.id) e.currentTarget.style.color = "#6B7280"; }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" style={{ padding: "80px 32px 60px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Tag color="#4F46E5">OUR PHILOSOPHY</Tag>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 1.15,
            margin: "8px 0 22px", color: "#0D1117", textAlign: "center",
          }}>
            We built Zorvis with one rule: trust comes before features.
          </h2>
          <div style={{
            fontSize: 16, color: "#374151", lineHeight: 1.75,
            maxWidth: 720, margin: "0 auto",
          }}>
            <p style={{ margin: "0 0 16px" }}>
              Most AI hiring products treat ethics as a marketing slide. We've built ours into the product schema, the API contracts, and the database constraints. If we wanted to violate one of these principles, we'd have to rewrite the system.
            </p>
            <p style={{ margin: "0 0 16px" }}>
              That isn't because we're better people than anyone else. It's because we serve SMEs in India and UAE — markets where data abuse, surveillance, and algorithmic discrimination have real and lasting consequences for candidates and employees. The trust gap with technology is already wide. We refuse to widen it further.
            </p>
            <p style={{
              margin: "24px 0 0", padding: "20px 24px",
              background: "#F1F5FF", borderLeft: "3px solid #4F46E5",
              borderRadius: 4, fontSize: 15, fontStyle: "italic",
              color: "#4338CA",
            }}>
              "AI ranks — human decides. Always. No candidate is rejected by an algorithm.
              Every decision is made by a person who can see the full context, override any
              score, and add their own judgment. The score is an input, not a verdict."
            </p>
          </div>
        </div>
      </section>

      {/* 16 PRINCIPLES SECTION */}
      <section id="principles" style={{ padding: "60px 32px", background: "#F7F8FC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Tag color="#4F46E5">16 NON-NEGOTIABLE PRINCIPLES</Tag>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
              letterSpacing: "-0.025em", margin: "8px 0 14px", color: "#0D1117",
            }}>
              Every AI commitment, made publicly.
            </h2>
            <p style={{
              fontSize: 15, color: "#6B7280", maxWidth: 580, margin: "0 auto",
              lineHeight: 1.6,
            }}>
              These are not aspirational guidelines. They are product requirements baked into Zorvis at the schema layer.
              If a future feature would violate any of these, we won't ship it.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}>
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E6F0", borderRadius: 12,
                  padding: 22,
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
              >
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "4px 10px",
                  background: "linear-gradient(90deg,#4F46E5 0%,#7C3AED 100%)",
                  color: "#FFFFFF",
                  fontSize: 12, fontWeight: 700, borderRadius: 6,
                  marginBottom: 12, letterSpacing: "0.04em",
                }}>
                  {p.num}
                </div>
                <h3 style={{
                  fontSize: 16, fontWeight: 700, color: "#0D1117",
                  margin: "0 0 10px", lineHeight: 1.35,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: 13.5, color: "#6B7280",
                  lineHeight: 1.65, margin: 0,
                }}>
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section id="security" style={{ padding: "80px 32px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Tag color="#4F46E5">SECURITY ARCHITECTURE</Tag>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
              letterSpacing: "-0.025em", margin: "8px 0 14px", color: "#0D1117",
            }}>
              Built like a bank. Priced like a startup.
            </h2>
            <p style={{
              fontSize: 15, color: "#6B7280", maxWidth: 580, margin: "0 auto",
              lineHeight: 1.6,
            }}>
              Every layer of the stack assumes your data is the most valuable thing on the platform — because it is.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}>
            {SECURITY.map((s) => (
              <div key={s.title} style={{
                background: "#0D1117", color: "#FFFFFF",
                borderRadius: 12, padding: 24,
                border: "1px solid #1F2937",
              }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(167,139,250,0.15)",
                  marginBottom: 14,
                }}>
                  <s.icon style={{ width: 20, height: 20, color: "#A78BFA" }} />
                </div>
                <h3 style={{
                  fontSize: 15, fontWeight: 700, color: "#FFFFFF",
                  margin: "0 0 8px",
                }}>{s.title}</h3>
                <p style={{
                  fontSize: 13, color: "#9CA3AF",
                  lineHeight: 1.6, margin: 0,
                }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA RESIDENCY SECTION */}
      <section id="residency" style={{ padding: "60px 32px", background: "#F7F8FC" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Tag color="#4F46E5">DATA RESIDENCY</Tag>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
              letterSpacing: "-0.025em", margin: "8px 0 14px", color: "#0D1117",
            }}>
              Your data stays in your country. Period.
            </h2>
            <p style={{
              fontSize: 15, color: "#6B7280", maxWidth: 600, margin: "0 auto",
              lineHeight: 1.6,
            }}>
              The region flag is set when you sign up and is immutable. India data never touches UAE infrastructure. UAE data never touches Indian infrastructure.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
            {RESIDENCY.map((r) => (
              <div key={r.region} style={{
                background: "#FFFFFF", borderRadius: 14,
                padding: 28, border: "1px solid #E2E6F0",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 32 }}>{r.flag}</span>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#0D1117" }}>{r.region}</div>
                    <div style={{ fontSize: 12, color: "#6B7280", fontFamily: "ui-monospace, monospace" }}>{r.location}</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65, margin: 0 }}>
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section id="compliance" style={{ padding: "80px 32px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Tag color="#4F46E5">REGULATORY COMPLIANCE</Tag>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
              letterSpacing: "-0.025em", margin: "8px 0 14px", color: "#0D1117",
            }}>
              Compliant by architecture, not by checklist.
            </h2>
            <p style={{
              fontSize: 15, color: "#6B7280", maxWidth: 580, margin: "0 auto",
              lineHeight: 1.6,
            }}>
              Compliance isn't a feature we ticked off. It's how the database is structured, how consent is captured, and how data flows through the system.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 12,
          }}>
            {COMPLIANCE.map((c) => (
              <div key={c.framework} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "16px 18px",
                background: "#F7F8FC",
                border: `1px solid ${c.status === "Live" ? "rgba(16,185,129,0.25)" : "rgba(245,158,11,0.25)"}`,
                borderRadius: 10,
              }}>
                <Shield style={{ width: 18, height: 18, color: c.colour, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#0D1117", lineHeight: 1.3 }}>
                    {c.framework}
                  </div>
                  <div style={{ fontSize: 11, color: c.colour, marginTop: 2, fontWeight: 500 }}>
                    {c.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE BOUNDARIES — WHAT WE WON'T BUILD */}
      <section id="boundaries" style={{ padding: "60px 32px", background: "#0D1117", color: "#FFFFFF" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Tag color="#A78BFA">PERMANENT BOUNDARIES</Tag>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
              letterSpacing: "-0.025em", margin: "8px 0 14px", color: "#FFFFFF",
            }}>
              What Zorvis will never build.
            </h2>
            <p style={{
              fontSize: 15, color: "#9CA3AF", maxWidth: 580, margin: "0 auto",
              lineHeight: 1.6,
            }}>
              Some product decisions are permanent. These are ours.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                title: "AI making final hiring decisions",
                body: "Zorvis will never make autonomous hiring decisions. AI ranks with explainable scores. A human always makes the final call. EU AI Act, India DPDP, and UAE PDPL all require human oversight — and so do we.",
              },
              {
                title: "Individual attrition risk scores",
                body: "Zorvis will never produce a 'flight risk' score for any individual employee. Not as an internal feature, not under enterprise pressure, not at any price. Surveillance creates fear, damages culture, and alienates the people you depend on. Team health scores at department level are the ceiling.",
              },
              {
                title: "Selling candidate data to third parties",
                body: "Candidate data collected for hiring assessment is used only for hiring assessment by the company that collected it. It is not shared with other companies, not sold to recruiters, not used for advertising. This is a structural commitment, not a marketing line.",
              },
              {
                title: "Surveillance proctoring as default",
                body: "Camera proctoring will always be opt-in. Declining will never auto-reject a candidate. Speed scoring will never be a composite component. We will not build proctoring features that punish candidates for honest declines.",
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: 22,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
              }}>
                <AlertCircle style={{
                  width: 20, height: 20, color: "#FCA5A5",
                  flexShrink: 0, marginTop: 2,
                }} />
                <div>
                  <h3 style={{
                    fontSize: 16, fontWeight: 700, color: "#FFFFFF",
                    margin: "0 0 8px",
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: 14, color: "#9CA3AF",
                    lineHeight: 1.65, margin: 0,
                  }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section style={{ padding: "60px 32px 80px", background: "#FFFFFF" }}>
        <div style={{
          maxWidth: 720, margin: "0 auto", textAlign: "center",
          padding: "44px 32px",
          background: "linear-gradient(135deg,#F7F8FC 0%,#F1F5FF 100%)",
          borderRadius: 16, border: "1px solid #E2E6F0",
        }}>
          <h2 style={{
            fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700,
            margin: "0 0 12px", letterSpacing: "-0.025em",
            color: "#0D1117",
          }}>
            Questions about how we handle your data?
          </h2>
          <p style={{
            fontSize: 15, color: "#6B7280", lineHeight: 1.6,
            margin: "0 0 28px", maxWidth: 480, marginInline: "auto",
          }}>
            We answer every privacy or security question publicly and in detail. No legal-team-runaround.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <a
              href="mailto:privacy@zorvis.ai?subject=Privacy%20%2F%20Security%20Question"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px", background: "#0D1117", color: "#FFFFFF",
                fontSize: 14, fontWeight: 600, borderRadius: 8,
                textDecoration: "none", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1F2937")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0D1117")}
            >
              Email privacy@zorvis.ai
              <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
            <Link
              href="/faq"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px", background: "transparent",
                color: "#0D1117", fontSize: 14, fontWeight: 600,
                borderRadius: 8, textDecoration: "none",
                border: "1px solid #CBD5E1",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0D1117")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#CBD5E1")}
            >
              Browse FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

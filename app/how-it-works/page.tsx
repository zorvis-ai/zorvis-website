"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";
import {
  FileText,
  Brain,
  MessageSquare,
  Calendar,
  FileSignature,
  UserCheck,
  ArrowRight,
  Clock,
  CheckCircle2,
  Zap,
  Target,
} from "lucide-react";

// ─────────────────────────────────────────
// THE 6 STAGES
// ─────────────────────────────────────────

type Stage = {
  id: string;
  num: string;
  icon: typeof FileText;
  title: string;
  duration: string;
  hook: string;
  bullets: { label: string; detail: string }[];
  techNote: string;
};

const STAGES: Stage[] = [
  {
    id: "post",
    num: "01",
    icon: FileText,
    title: "Post the job once",
    duration: "30 seconds",
    hook: "Paste a job description, or let AI generate one. Post simultaneously to Naukri, LinkedIn, Indeed, and your careers page from one screen.",
    bullets: [
      {
        label: "AI Job Description Generator",
        detail: "Role + level + industry → full JD with competencies and salary band in 30 seconds.",
      },
      {
        label: "Multi-board posting",
        detail: "Naukri, LinkedIn, Indeed, Bayt, GulfTalent — one click, simultaneous publish. Source attribution tracked.",
      },
      {
        label: "Centralised inbox",
        detail: "Applications from every channel land in one Zorvis pipeline. No more email chaos.",
      },
    ],
    techNote: "JDs stored as reusable templates. CVs ingested via REST API and SMTP. Naukri integration uses official partner API.",
  },
  {
    id: "rank",
    num: "02",
    icon: Brain,
    title: "AI ranks every CV in minutes",
    duration: "Under 3 minutes for 1,000 CVs",
    hook: "Every applicant scored against your role. Top candidates surface in a Kanban view. You never read a bad CV again.",
    bullets: [
      {
        label: "Blind-first ranking (P1)",
        detail: "Names, photos, addresses, and graduation years stripped before AI embedding. The AI sees skills, not identity.",
      },
      {
        label: "Composite score band",
        detail: "Aptitude (40%) + Resume-JD match (20%) + BGV (20%) + Behaviour (20%). Shown as 68–74, never as false-precision 73.",
      },
      {
        label: "AI 2-line narrative",
        detail: "Plain-English summary of strengths and any context flags — visible on every candidate card.",
      },
    ],
    techNote: "Powered by OpenAI text-embedding-3-large + pgvector cosine similarity. Re-ranks on every JD update. Zero PII used in ranking.",
  },
  {
    id: "test",
    num: "03",
    icon: MessageSquare,
    title: "Aptitude tests on WhatsApp",
    duration: "Under 60 seconds to send",
    hook: "Bulk-send tests to your top candidates. Delivered on the channel they actually use. No app downloads, no logins, no friction.",
    bullets: [
      {
        label: "500-question bank per category",
        detail: "Numerical, Verbal, Logical, Domain-specific. Configurable by role — blue-collar tests differ from white-collar.",
      },
      {
        label: "WhatsApp-first delivery",
        detail: "Email default, WhatsApp available, SMS fallback. 3-second test load on 4G anywhere in the world.",
      },
      {
        label: "Anti-cheat with consent (P4)",
        detail: "Camera monitoring opt-in. Decline never auto-rejects. Speed scoring removed from composite entirely.",
      },
    ],
    techNote: "Tests served from Cloudflare edge network. Auto-scored within 60s of submission. WATI integration for WhatsApp delivery; Meta Cloud API at scale.",
  },
  {
    id: "interview",
    num: "04",
    icon: Calendar,
    title: "Interview the right people",
    duration: "Auto-scheduled in seconds",
    hook: "Top scorers surface in your dashboard with AI interview briefs. Candidates pick slots on their preferred channel — no Calendly, no email tag.",
    bullets: [
      {
        label: "AI interview brief",
        detail: "Generated before each interview. Composite score, category weaknesses, 5 suggested questions tailored to test pattern.",
      },
      {
        label: "Channel-native scheduling",
        detail: "Google Calendar + Outlook OAuth. Candidate picks slot via WhatsApp link. 24h + 1h auto-reminders. No-show tracking.",
      },
      {
        label: "Embedded video interviews",
        detail: "Daily.co WebRTC in-browser. No Zoom link, no SDK download. Recording + AI transcription via Whisper.",
      },
    ],
    techNote: "Calendar conflicts resolved server-side. Recordings stored in S3 with 90-day retention. Transcript searchable across pipeline.",
  },
  {
    id: "offer",
    num: "05",
    icon: FileSignature,
    title: "Send offers, get them signed",
    duration: "Same-day acceptance",
    hook: "AI fills offer letters with candidate details — except salary, which is always entered manually. Sent on WhatsApp + email. Digitally signed on mobile.",
    bullets: [
      {
        label: "India + UAE templates",
        detail: "5 India templates + 1 UAE bilingual Arabic/English (compliant with Federal Decree-Law No. 33 of 2021). Custom templates on Scale plan.",
      },
      {
        label: "Digital acceptance",
        detail: "Candidate signs on mobile. PDF includes acceptance timestamp and IP. 7-day default expiry. Decline notifies HR immediately.",
      },
      {
        label: "Salary stays manual",
        detail: "AI fills every field except salary. Always entered by HR. A guardrail, not a limitation.",
      },
    ],
    techNote: "PDF generation via Puppeteer. Arabic RTL rendering tested with Noto Sans Arabic. Signed PDFs stored encrypted in S3.",
  },
  {
    id: "onboard",
    num: "06",
    icon: UserCheck,
    title: "Onboard from candidate to employee",
    duration: "Day 1 to active in hours",
    hook: "BGV clears, candidate becomes employee. Documents collected via WhatsApp. Day 1 chain auto-runs. No manual data entry.",
    bullets: [
      {
        label: "Zero re-entry",
        detail: "Joining date, role, salary, department, manager, documents — all pre-filled from hiring data. Candidate becomes employee in one state machine.",
      },
      {
        label: "Document collection on WhatsApp",
        detail: "Aadhaar, PAN, payslips (India). Emirates ID, residence visa, labour card (UAE). AI pre-checks each photo for legibility.",
      },
      {
        label: "Day 1 onboarding chain",
        detail: "Welcome message, NDA/POSH signing, IT asset request, buddy intro — all automated via preferred channel. 30/60/90-day milestones auto-created.",
      },
    ],
    techNote: "OCR via AWS Textract for ID extraction. WPS SIF auto-generated for UAE payroll. State machine prevents re-entry across the candidate→employee transition.",
  },
];

// ─────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────

export default function HowItWorksPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <PageHero
        variant="dark"
        eyebrow="HOW ZORVIS WORKS"
        headline={
          <>
            From first CV to{" "}
            <span style={{
              background: "linear-gradient(90deg,#A78BFA 0%,#7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>strongest hire.</span>
          </>
        }
        summary="Zorvis runs the full hiring flow on one platform - posting, ranking, AI phone interviews, assessments on the preferred channel, scheduled interviews, offers, and onboarding. Every step feeds the next."
        suiteContext="Part of Zorvis - the people platform for India and UAE companies."
      />

      <section style={{ padding: "32px 24px 24px", background: "#0D1117", color: "#FFFFFF" }}>
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 28,
          maxWidth: 800, margin: "0 auto",
        }}>
          {[
            { stat: "3 min", label: "to rank 1,000 CVs" },
            { stat: "5 min", label: "AI phone interview" },
            { stat: "1 day", label: "to first interview" },
            { stat: "6 days", label: "candidate to employee" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: 28, fontWeight: 800,
                background: "linear-gradient(90deg,#A78BFA 0%,#7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
              }}>{s.stat}</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY OVERVIEW — Pill nav */}
      <section style={{ padding: "56px 32px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{
              fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800,
              letterSpacing: "-0.025em", margin: "0 0 14px", color: "#0D1117",
            }}>
              The 6-stage journey, end to end.
            </h2>
            <p style={{
              fontSize: 15, color: "#6B7280", maxWidth: 540, margin: "0 auto",
              lineHeight: 1.6,
            }}>
              Click any stage to jump there. Each stage is independent, but they connect into one continuous data flow.
            </p>
          </div>

          {/* Pill nav */}
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6,
            padding: "8px 0",
          }}>
            {STAGES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStage(i);
                  document.getElementById(`stage-${s.id}`)?.scrollIntoView({
                    behavior: "smooth", block: "start",
                  });
                }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 16px", borderRadius: 8,
                  border: `1px solid ${activeStage === i ? "#4F46E5" : "#E2E6F0"}`,
                  background: activeStage === i ? "#4F46E5" : "#FFFFFF",
                  color: activeStage === i ? "#FFFFFF" : "#374151",
                  fontSize: 13, fontWeight: 600,
                  fontFamily: "'DM Sans',sans-serif",
                  cursor: "pointer", transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (activeStage !== i) {
                    e.currentTarget.style.background = "#F7F8FC";
                    e.currentTarget.style.borderColor = "#CBD5E1";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeStage !== i) {
                    e.currentTarget.style.background = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#E2E6F0";
                  }
                }}
              >
                <span style={{
                  fontSize: 11, fontWeight: 700, opacity: 0.7,
                }}>{s.num}</span>
                <span>{s.title.split(" ").slice(0, 3).join(" ")}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      {STAGES.map((stage, i) => (
        <StageSection
          key={stage.id}
          stage={stage}
          index={i}
          isLast={i === STAGES.length - 1}
          onActive={() => setActiveStage(i)}
        />
      ))}

      {/* INTELLIGENCE LOOP CALLOUT */}
      <section style={{
        padding: "60px 32px",
        background: "linear-gradient(180deg,#0D1117 0%,#1A1F2E 100%)",
        color: "#FFFFFF",
      }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <Tag color="#A78BFA">THE COMPOUNDING LOOP</Tag>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
            letterSpacing: "-0.025em", margin: "8px 0 18px", color: "#FFFFFF",
          }}>
            Every hire makes the next hire better.
          </h2>
          <p style={{
            fontSize: 16, color: "#9CA3AF", lineHeight: 1.7,
            maxWidth: 640, margin: "0 auto 36px",
          }}>
            At hire, Zorvis records the candidate's composite score. 90 days later,
            the manager rates the employee's performance. The system correlates the two.
            Within 6 months, your hire-quality predictor is calibrated to who actually
            succeeds at <em>your</em> company. The intelligence is yours — your data,
            your patterns, your moat.
          </p>

          {/* Loop visual */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12, maxWidth: 760, margin: "0 auto 30px",
          }}>
            {[
              { icon: Target,        label: "Score at hire" },
              { icon: UserCheck,     label: "Hire candidate" },
              { icon: CheckCircle2,  label: "Rate at 90 days" },
              { icon: Brain,         label: "Predictor improves" },
            ].map((item, i) => (
              <div key={item.label} style={{
                position: "relative",
                padding: "18px 14px",
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.2)",
                borderRadius: 10,
                textAlign: "center",
              }}>
                <item.icon style={{ width: 22, height: 22, color: "#A78BFA", margin: "0 auto 8px" }} />
                <div style={{
                  fontSize: 11, color: "#6B7280", fontWeight: 600,
                  marginBottom: 4, letterSpacing: "0.04em",
                }}>STEP {i + 1}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: 13, color: "#6B7280",
            fontStyle: "italic",
          }}>
            By month 12: "Based on 2,847 similar hires on Zorvis: predicted 90-day rating 3.9/5."
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "80px 32px", background: "#FFFFFF" }}>
        <div style={{
          maxWidth: 720, margin: "0 auto", textAlign: "center",
          padding: "44px 32px",
          background: "linear-gradient(135deg,#F7F8FC 0%,#F1F5FF 100%)",
          borderRadius: 16, border: "1px solid #E2E6F0",
        }}>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 800,
            letterSpacing: "-0.025em", margin: "0 0 12px", color: "#0D1117",
          }}>
            Live in 15 minutes. Free forever.
          </h2>
          <p style={{
            fontSize: 15, color: "#6B7280", lineHeight: 1.6,
            margin: "0 0 28px", maxWidth: 480, marginInline: "auto",
          }}>
            No credit card. No demo call. Sign up, post a job, watch your CVs get ranked.
            See exactly how it works on your real data.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <Link
              href="/waitlist"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px", background: "#0D1117", color: "#FFFFFF",
                fontSize: 14, fontWeight: 600, borderRadius: 8,
                textDecoration: "none", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1F2937")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0D1117")}
            >
              Get early access
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link
              href="/roi-calculator"
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
              Calculate my ROI first
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────
// STAGE SECTION SUB-COMPONENT
// ─────────────────────────────────────────

function StageSection({
  stage,
  index,
  isLast,
  onActive,
}: {
  stage: Stage;
  index: number;
  isLast: boolean;
  onActive: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  // Alternate left/right for visual interest
  const isOdd = index % 2 === 1;
  const bgColor = index % 2 === 0 ? "#FFFFFF" : "#F7F8FC";

  return (
    <section
      ref={ref}
      id={`stage-${stage.id}`}
      style={{
        padding: "70px 32px",
        background: bgColor,
        scrollMarginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56, alignItems: "center",
        }} className="zv-stage-grid">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            style={{ order: isOdd ? 2 : 1 }}
            className={`zv-stage-visual ${isOdd ? "zv-stage-visual-flip" : ""}`}
          >
            <StageVisual stage={stage} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ order: isOdd ? 1 : 2 }}
            className="zv-stage-content"
          >
            {/* Stage number */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              marginBottom: 16,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)",
                color: "#FFFFFF",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700,
              }}>
                {stage.num}
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "5px 12px",
                background: "#EEF2FF", color: "#4F46E5",
                fontSize: 11, fontWeight: 600, borderRadius: 100,
                letterSpacing: "0.04em",
              }}>
                <Clock style={{ width: 11, height: 11 }} />
                {stage.duration}
              </div>
            </div>

            <h2 style={{
              fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800,
              letterSpacing: "-0.025em", lineHeight: 1.15,
              margin: "0 0 14px", color: "#0D1117",
            }}>
              {stage.title}
            </h2>
            <p style={{
              fontSize: 16, color: "#374151",
              lineHeight: 1.6, margin: "0 0 24px",
            }}>
              {stage.hook}
            </p>

            {/* Bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              {stage.bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <CheckCircle2 style={{
                    width: 18, height: 18, color: "#4F46E5",
                    flexShrink: 0, marginTop: 2,
                  }} />
                  <div>
                    <div style={{
                      fontSize: 14, fontWeight: 700,
                      color: "#0D1117", marginBottom: 4,
                    }}>
                      {b.label}
                    </div>
                    <div style={{
                      fontSize: 13.5, color: "#6B7280",
                      lineHeight: 1.55,
                    }}>
                      {b.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech note */}
            <div style={{
              padding: "12px 14px",
              background: "#F1F5FF",
              borderLeft: "3px solid #4F46E5",
              borderRadius: 4,
              fontSize: 12, color: "#4338CA",
              lineHeight: 1.6, fontFamily: "ui-monospace, SFMono-Regular, monospace",
            }}>
              <span style={{ fontWeight: 700, opacity: 0.7 }}>UNDER THE HOOD: </span>
              {stage.techNote}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 800px) {
          .zv-stage-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .zv-stage-visual { order: 1 !important; }
          .zv-stage-content { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────
// PER-STAGE VISUAL — distinct illustration per step
// ─────────────────────────────────────────

function StageVisual({ stage }: { stage: Stage }) {
  // Each stage has its own SVG illustration
  switch (stage.id) {
    case "post":
      return <VisualPost />;
    case "rank":
      return <VisualRank />;
    case "test":
      return <VisualTest />;
    case "interview":
      return <VisualInterview />;
    case "offer":
      return <VisualOffer />;
    case "onboard":
      return <VisualOnboard />;
    default:
      return null;
  }
}

// ─── Stage 01 — Post (one icon → many platforms)
function VisualPost() {
  const platforms = [
    { name: "Naukri",   color: "#4F46E5", x: 80,  y: 220 },
    { name: "LinkedIn", color: "#0077B5", x: 165, y: 250 },
    { name: "Indeed",   color: "#003A9B", x: 250, y: 240 },
    { name: "Bayt",     color: "#E84F1A", x: 320, y: 220 },
  ];
  return (
    <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
      {/* Source — Zorvis */}
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <rect x="160" y="40" width="80" height="80" rx="14" fill="#0D1117" stroke="#4F46E5" strokeWidth="2" />
        <text x="200" y="78" textAnchor="middle" fill="#A78BFA" fontSize="11" fontFamily="'DM Sans'" fontWeight="700" letterSpacing="2">Z</text>
        <text x="200" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="'DM Sans'" fontWeight="600">JOB POST</text>
      </motion.g>

      {/* Lines fanning out */}
      {platforms.map((p, i) => (
        <motion.line
          key={p.name}
          x1="200" y1="120" x2={p.x} y2={p.y}
          stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
        />
      ))}

      {/* Platform pills */}
      {platforms.map((p, i) => (
        <motion.g
          key={p.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
        >
          <rect x={p.x - 36} y={p.y - 14} width="72" height="28" rx="14" fill="#FFFFFF" stroke={p.color} strokeWidth="1.5" />
          <text x={p.x} y={p.y + 4} textAnchor="middle" fill={p.color} fontSize="11" fontFamily="'DM Sans'" fontWeight="600">
            {p.name}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

// ─── Stage 02 — Rank (CVs → ranked list)
function VisualRank() {
  const candidates = [
    { initial: "P", name: "P. Sharma", score: "82–88", top: true },
    { initial: "A", name: "A. Khan",   score: "78–84", top: true },
    { initial: "R", name: "R. Kumar",  score: "74–80", top: true },
    { initial: "S", name: "S. Iyer",   score: "62–68", top: false },
  ];
  return (
    <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
      <text x="200" y="22" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="'DM Sans'" fontWeight="600" letterSpacing="2">RANKED PIPELINE</text>
      {candidates.map((c, i) => (
        <motion.g
          key={i}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect
            x="40" y={50 + i * 56} width="320" height="44" rx="8"
            fill={c.top ? "url(#rankGrad)" : "#F1F5F9"}
            stroke={c.top ? "#4F46E5" : "#E2E8F0"}
            strokeWidth="1"
          />
          <circle cx="64" cy={50 + i * 56 + 22} r="13" fill={c.top ? "rgba(255,255,255,0.3)" : "#4F46E5"} />
          <text x="64" y={50 + i * 56 + 26} textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="'DM Sans'">
            {c.initial}
          </text>
          <text x="86" y={50 + i * 56 + 20} fill={c.top ? "#FFFFFF" : "#94A3B8"} fontSize="13" fontWeight="600" fontFamily="'DM Sans'">
            {c.name}
          </text>
          <text x="86" y={50 + i * 56 + 35} fill={c.top ? "rgba(255,255,255,0.7)" : "#CBD5E1"} fontSize="10" fontFamily="'DM Sans'">
            CV ranked · {c.top ? "Test ready" : "Below threshold"}
          </text>
          <rect x="290" y={50 + i * 56 + 12} width="60" height="20" rx="10" fill={c.top ? "rgba(255,255,255,0.2)" : "#FFFFFF"} stroke={c.top ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="0.5" />
          <text x="320" y={50 + i * 56 + 25} textAnchor="middle" fill={c.top ? "#FFFFFF" : "#475569"} fontSize="11" fontWeight="700" fontFamily="ui-monospace">
            {c.score}
          </text>
        </motion.g>
      ))}
      <defs>
        <linearGradient id="rankGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Stage 03 — Test (WhatsApp message bubble)
function VisualTest() {
  return (
    <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
      {/* Phone frame */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <rect x="120" y="30" width="160" height="270" rx="22" fill="#0D1117" />
        <rect x="128" y="42" width="144" height="246" rx="14" fill="#E5DDD5" />
        {/* WhatsApp header */}
        <rect x="128" y="42" width="144" height="32" rx="14" fill="#075E54" />
        <rect x="128" y="64" width="144" height="10" fill="#075E54" />
        <text x="200" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="'DM Sans'" fontWeight="600">Zorvis Hiring</text>
      </motion.g>

      {/* Message bubble — incoming */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <rect x="138" y="86" width="106" height="56" rx="10" fill="#FFFFFF" />
        <text x="146" y="102" fill="#0D1117" fontSize="8" fontFamily="'DM Sans'" fontWeight="600">Hi Priya, ready</text>
        <text x="146" y="114" fill="#0D1117" fontSize="8" fontFamily="'DM Sans'" fontWeight="600">for your test?</text>
        <rect x="146" y="120" width="78" height="16" rx="4" fill="#25D366" />
        <text x="185" y="131" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="'DM Sans'" fontWeight="700">START TEST</text>
      </motion.g>

      {/* Pulse on test button */}
      <motion.circle
        cx="244" cy="113" r="5"
        fill="#25D366"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />

      {/* Status messages — sent */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <text x="200" y="160" textAnchor="middle" fill="#9CA3AF" fontSize="7" fontFamily="'DM Sans'">— sent at 09:42 —</text>
      </motion.g>

      {/* Outgoing — completed */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <rect x="160" y="178" width="100" height="44" rx="10" fill="#DCF8C6" />
        <text x="170" y="194" fill="#0D1117" fontSize="8" fontFamily="'DM Sans'" fontWeight="600">Done! Score:</text>
        <text x="170" y="206" fill="#075E54" fontSize="11" fontFamily="ui-monospace" fontWeight="700">82 / 100</text>
        <text x="252" y="218" textAnchor="end" fill="#9CA3AF" fontSize="6" fontFamily="'DM Sans'">10:18 ✓✓</text>
      </motion.g>
    </svg>
  );
}

// ─── Stage 04 — Interview (calendar + video)
function VisualInterview() {
  return (
    <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
      {/* Calendar */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <rect x="40" y="40" width="180" height="220" rx="12" fill="#FFFFFF" stroke="#E2E6F0" strokeWidth="1" />
        <rect x="40" y="40" width="180" height="36" rx="12" fill="#4F46E5" />
        <text x="130" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="'DM Sans'" fontWeight="700">DECEMBER 2026</text>

        {/* Days header */}
        {["M", "T", "W", "T", "F"].map((d, i) => (
          <text key={i} x={68 + i * 30} y="94" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="'DM Sans'" fontWeight="600">{d}</text>
        ))}

        {/* Date grid */}
        {[...Array(15)].map((_, i) => {
          const col = i % 5;
          const row = Math.floor(i / 5);
          const date = i + 1;
          const isPicked = date === 8;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.1 + i * 0.02 }}
            >
              {isPicked && (
                <motion.circle
                  cx={68 + col * 30} cy={120 + row * 30} r="13"
                  fill="#4F46E5"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                />
              )}
              <text
                x={68 + col * 30} y={123 + row * 30}
                textAnchor="middle"
                fill={isPicked ? "#FFFFFF" : "#0D1117"}
                fontSize="11" fontFamily="'DM Sans'"
                fontWeight={isPicked ? "700" : "500"}
              >{date}</text>
            </motion.g>
          );
        })}

        {/* Slot picker */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <rect x="56" y="220" width="148" height="28" rx="6" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="1" />
          <text x="130" y="238" textAnchor="middle" fill="#4F46E5" fontSize="11" fontFamily="'DM Sans'" fontWeight="700">Dec 8 · 11:00 AM ✓</text>
        </motion.g>
      </motion.g>

      {/* AI Brief callout */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <rect x="240" y="80" width="140" height="120" rx="10" fill="#0D1117" />
        <text x="252" y="100" fill="#A78BFA" fontSize="9" fontFamily="'DM Sans'" fontWeight="700" letterSpacing="1">AI BRIEF</text>
        <text x="252" y="118" fill="#FFFFFF" fontSize="10" fontFamily="'DM Sans'" fontWeight="700">P. Sharma</text>
        <text x="252" y="132" fill="#9CA3AF" fontSize="9" fontFamily="'DM Sans'">Score: 82–88</text>
        <line x1="252" y1="142" x2="368" y2="142" stroke="#1F2937" strokeWidth="1" />
        <text x="252" y="156" fill="#A78BFA" fontSize="8" fontFamily="'DM Sans'" fontWeight="600">Strong: Numerical</text>
        <text x="252" y="168" fill="#9CA3AF" fontSize="8" fontFamily="'DM Sans'">Probe: Verbal pace</text>
        <text x="252" y="186" fill="#10B981" fontSize="8" fontFamily="'DM Sans'" fontWeight="600">5 Q's suggested →</text>
      </motion.g>
    </svg>
  );
}

// ─── Stage 05 — Offer (PDF + signature)
function VisualOffer() {
  return (
    <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
      {/* PDF document */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <rect x="100" y="30" width="200" height="240" rx="6" fill="#FFFFFF" stroke="#E2E6F0" strokeWidth="1.5" />
        <rect x="100" y="30" width="200" height="34" fill="#0D1117" />
        <text x="116" y="52" fill="#FFFFFF" fontSize="11" fontFamily="'DM Sans'" fontWeight="700">OFFER LETTER</text>
        <text x="284" y="52" textAnchor="end" fill="#A78BFA" fontSize="9" fontFamily="'DM Sans'">PDF</text>

        {/* Body lines */}
        {[80, 92, 104, 116, 128, 144, 156, 168, 180].map((y, i) => (
          <motion.line
            key={i}
            x1="116" y1={y} x2={i % 3 === 0 ? "240" : i % 3 === 1 ? "270" : "200"} y2={y}
            stroke="#E2E6F0" strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
          />
        ))}

        {/* Salary line — emphasized */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <text x="116" y="200" fill="#6B7280" fontSize="9" fontFamily="'DM Sans'">Annual CTC:</text>
          <text x="116" y="214" fill="#0D1117" fontSize="13" fontFamily="ui-monospace" fontWeight="700">₹8,40,000</text>
          <rect x="116" y="200" width="80" height="18" rx="3" fill="rgba(79,70,229,0.08)" />
        </motion.g>

        {/* Signature line */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.1 }}
        >
          <line x1="116" y1="244" x2="220" y2="244" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="3 3" />
          <text x="116" y="258" fill="#9CA3AF" fontSize="8" fontFamily="'DM Sans'">Signed digitally on mobile</text>
          <motion.path
            d="M 130 240 Q 145 232 160 238 Q 175 244 195 236"
            stroke="#4F46E5" strokeWidth="2" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
        </motion.g>
      </motion.g>

      {/* Acceptance badge */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.6, type: "spring" }}
      >
        <circle cx="320" cy="140" r="36" fill="#10B981" />
        <path d="M 305 140 L 315 150 L 335 130" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="320" y="194" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="'DM Sans'" fontWeight="700">ACCEPTED</text>
      </motion.g>
    </svg>
  );
}

// ─── Stage 06 — Onboard (employee record)
function VisualOnboard() {
  const items = [
    { label: "Welcome message", check: true,  delay: 0.2 },
    { label: "NDA signed",      check: true,  delay: 0.5 },
    { label: "Asset request",   check: true,  delay: 0.8 },
    { label: "Buddy assigned",  check: true,  delay: 1.1 },
    { label: "30-day milestone",check: false, delay: 1.4 },
    { label: "60-day milestone",check: false, delay: 1.6 },
  ];
  return (
    <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
      {/* Header card */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <rect x="40" y="20" width="320" height="60" rx="10" fill="url(#onboardGrad)" />
        <circle cx="76" cy="50" r="18" fill="rgba(255,255,255,0.3)" />
        <text x="76" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="'DM Sans'">P</text>
        <text x="106" y="46" fill="#FFFFFF" fontSize="13" fontFamily="'DM Sans'" fontWeight="700">P. Sharma</text>
        <text x="106" y="62" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="'DM Sans'">Voice Agent · Bangalore · Joined Dec 9</text>
        <rect x="290" y="40" width="56" height="20" rx="10" fill="rgba(255,255,255,0.2)" />
        <text x="318" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="'DM Sans'" fontWeight="700">ACTIVE</text>
      </motion.g>

      {/* Onboarding checklist */}
      {items.map((item, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: item.delay }}
        >
          <rect x="40" y={100 + i * 32} width="320" height="26" rx="6" fill={item.check ? "#F0FDF4" : "#F7F8FC"} />
          {item.check ? (
            <>
              <circle cx="58" cy={113 + i * 32} r="8" fill="#10B981" />
              <path d={`M 53 ${113 + i * 32} L 56 ${116 + i * 32} L 63 ${109 + i * 32}`} stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </>
          ) : (
            <circle cx="58" cy={113 + i * 32} r="8" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 2" />
          )}
          <text x="76" y={117 + i * 32} fill={item.check ? "#0D1117" : "#9CA3AF"} fontSize="12" fontFamily="'DM Sans'" fontWeight={item.check ? "600" : "500"}>
            {item.label}
          </text>
          <text x="346" y={117 + i * 32} textAnchor="end" fill="#9CA3AF" fontSize="10" fontFamily="'DM Sans'">
            {item.check ? "Done" : "Auto-pending"}
          </text>
        </motion.g>
      ))}

      <defs>
        <linearGradient id="onboardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

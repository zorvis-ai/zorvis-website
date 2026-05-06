"use client";

import { useState, useEffect, useRef } from "react";
import { ZorvisLogo } from "@/components/ZorvisLogo";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Candidate {
  name: string;
  role: string;
  score: string;
  stage: "applied" | "ranked" | "tested" | "offered" | "hired";
  highlight?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CANDIDATES: Candidate[] = [
  { name: "Kavya Reddy",  role: "BPO Analyst",  score: "84–90", stage: "ranked",  highlight: true },
  { name: "Arjun Mehta",  role: "BPO Analyst",  score: "78–84", stage: "tested" },
  { name: "Priya Singh",  role: "Team Lead",    score: "72–78", stage: "offered" },
  { name: "Ravi Kumar",   role: "BPO Analyst",  score: "66–72", stage: "applied" },
  { name: "Divya Nair",   role: "Senior Agent", score: "82–88", stage: "hired",   highlight: true },
];

const PAIN_POINTS = [
  { icon: "📋", label: "400 CVs every Monday",      detail: "6 hours reading. Zero score.", color: "#EF4444" },
  { icon: "💸", label: "Separate testing tool",      detail: "₹2,000 per candidate. Another login.", color: "#F59E0B" },
  { icon: "📧", label: "Offers on email",             detail: "No signature. No timestamp. No record.", color: "#818CF8" },
  { icon: "📊", label: "5 job boards, 5 inboxes",    detail: "Zero unified pipeline.", color: "#EF4444" },
  { icon: "🔄", label: "Hire fails at 90 days",      detail: "No data trail. No way to learn.", color: "#F59E0B" },
  { icon: "🏢", label: "Enterprise tools: ₹40L/yr",  detail: "5-month setup. Not for SMEs.", color: "#818CF8" },
];

const MODULES = [
  {
    num: "01",
    name: "Hire",
    tagline: "AI-powered pipeline",
    desc: "Job post → AI ranking → WhatsApp test → digital offer → e-signature. End to end.",
    status: "Live — India",
    statusColor: "#10B981",
    accentColor: "#4F46E5",
    features: ["400 CVs ranked in 3 min", "WhatsApp-native testing", "ZIE score engine", "Digital offers + e-sign"],
  },
  {
    num: "02",
    name: "Manage",
    tagline: "Daily HR OS",
    desc: "Leave. Payslips. Goals. Documents. All answered on WhatsApp. Employees self-serve.",
    status: "Phase 2",
    statusColor: "#818CF8",
    accentColor: "#818CF8",
    features: ["WhatsApp HR helpdesk", "Leave & payslip self-service", "UAE WPS + Emirates ID", "Bilingual Arabic offers"],
  },
  {
    num: "03",
    name: "Grow",
    tagline: "People intelligence",
    desc: "Hire-to-retire data. Every outcome feeds a flywheel that makes every future hire smarter.",
    status: "Phase 3",
    statusColor: "#F59E0B",
    accentColor: "#F59E0B",
    features: ["Monthly workforce reports", "Hire quality data flywheel", "Team health scores", "Source ROI tracking"],
  },
];

const STAGE_LABEL: Record<string, string> = {
  applied: "Applied",
  ranked: "AI Ranked",
  tested: "Test Sent",
  offered: "Offer Sent",
  hired: "Hired",
};

const STAGE_COLOR: Record<string, string> = {
  applied: "#6B7280",
  ranked: "#818CF8",
  tested: "#F59E0B",
  offered: "#3B82F6",
  hired: "#10B981",
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function CandidateCard({ c, delay = 0 }: { c: Candidate; delay?: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        background: c.highlight ? "rgba(79,70,229,0.12)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${c.highlight ? "rgba(129,140,248,0.4)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 10,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: "50%",
        background: `rgba(79,70,229,0.25)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 600, color: "#C7D2FE", flexShrink: 0,
      }}>
        {c.name.split(" ").map(n => n[0]).join("")}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#F9FAFB", lineHeight: 1.3 }}>{c.name}</div>
        <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 1 }}>{c.role}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
        <div style={{
          fontSize: 12, fontWeight: 700,
          color: c.highlight ? "#C7D2FE" : "#9CA3AF",
          fontVariantNumeric: "tabular-nums",
        }}>
          {c.score}
        </div>
        <div style={{
          fontSize: 10, fontWeight: 500,
          color: STAGE_COLOR[c.stage],
          background: `${STAGE_COLOR[c.stage]}18`,
          padding: "2px 8px", borderRadius: 20,
          letterSpacing: "0.02em",
        }}>
          {STAGE_LABEL[c.stage]}
        </div>
      </div>
    </div>
  );
}

function PipelineWidget() {
  return (
    <div style={{
      background: "rgba(13,15,26,0.9)",
      border: "1px solid rgba(79,70,229,0.3)",
      borderRadius: 16,
      padding: "20px 24px",
      backdropFilter: "blur(12px)",
      maxWidth: 440,
      width: "100%",
    }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#F9FAFB" }}>
          Hiring pipeline — Senior BPO Analyst
        </div>
        <div style={{ fontSize: 11, color: "#818CF8", marginTop: 2 }}>
          {CANDIDATES.length} candidates · 1 offer sent · 1 hired
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {CANDIDATES.map((c, i) => (
          <CandidateCard key={c.name} c={c} delay={i * 120} />
        ))}
      </div>
      <div style={{
        marginTop: 16, paddingTop: 14,
        borderTop: "1px solid rgba(255,255,255,0.07)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ fontSize: 11, color: "#6B7280" }}>400 CVs processed in 3 min</div>
        <div style={{
          fontSize: 11, fontWeight: 500, color: "#4F46E5",
          background: "rgba(79,70,229,0.12)",
          padding: "4px 12px", borderRadius: 20, cursor: "pointer",
        }}>
          Unlock contacts →
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      fontFamily: "'DM Sans', system-ui, sans-serif",
      background: "#0C0E1A",
      color: "#F9FAFB",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(12,14,26,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
        padding: "0 32px",
        height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <ZorvisLogo size={28} theme="dark" showWordmark />

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {["Product", "Use Cases", "Solutions", "Pricing", "Customers"].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} style={{
              fontSize: 14, color: "#9CA3AF", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F9FAFB")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9CA3AF")}
            >{item}</a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="/login" style={{
            fontSize: 13, color: "#818CF8", textDecoration: "none",
            padding: "8px 16px",
          }}>
            Sign in
          </a>
          <a href="/waitlist" style={{
            background: "#4F46E5",
            color: "#FFFFFF",
            fontSize: 13, fontWeight: 600,
            padding: "9px 20px",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background 0.2s, transform 0.1s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#4338CA")}
            onMouseLeave={e => (e.currentTarget.style.background = "#4F46E5")}
            onMouseDown={e => (e.currentTarget.style.transform = "scale(0.98)")}
            onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            Get early access
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 32px 80px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `radial-gradient(circle, rgba(79,70,229,0.12) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }} />

        {/* Glow */}
        <div style={{
          position: "absolute",
          top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 400,
          background: "radial-gradient(ellipse, rgba(79,70,229,0.18) 0%, transparent 70%)",
          zIndex: 0, pointerEvents: "none",
        }} />

        {/* Pill badge */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(79,70,229,0.12)",
          border: "1px solid rgba(129,140,248,0.3)",
          borderRadius: 100,
          padding: "6px 16px",
          marginBottom: 32,
        }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#818CF8" }} />
          <span style={{ fontSize: 12, color: "#818CF8", fontWeight: 500, letterSpacing: "0.02em" }}>
            People Intelligence Platform — India &amp; UAE
          </span>
        </div>

        {/* H1 */}
        <h1 style={{
          position: "relative", zIndex: 1,
          fontSize: "clamp(42px, 7vw, 80px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          margin: "0 0 8px",
          color: "#FFFFFF",
          maxWidth: 820,
        }}>
          Hire. Manage. Grow.
        </h1>
        <h1 style={{
          position: "relative", zIndex: 1,
          fontSize: "clamp(42px, 7vw, 80px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          margin: "0 0 28px",
          color: "#818CF8",
          maxWidth: 820,
        }}>
          All powered by AI.
        </h1>

        {/* Sub */}
        <p style={{
          position: "relative", zIndex: 1,
          fontSize: "clamp(15px, 2vw, 18px)",
          color: "#9CA3AF",
          maxWidth: 560,
          lineHeight: 1.6,
          margin: "0 0 40px",
        }}>
          One platform. WhatsApp-native. Built for India &amp; UAE SMEs.
          <br />
          <span style={{ color: "#C7D2FE" }}>400 CVs ranked in 3 minutes.</span> Tests on WhatsApp. Offers signed digitally.
        </p>

        {/* CTAs */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center",
          marginBottom: 56,
        }}>
          <a href="/waitlist" style={{
            background: "#4F46E5",
            color: "#FFFFFF",
            fontSize: 15, fontWeight: 600,
            padding: "14px 28px",
            borderRadius: 10,
            textDecoration: "none",
            transition: "background 0.2s, transform 0.1s",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#4338CA")}
            onMouseLeave={e => (e.currentTarget.style.background = "#4F46E5")}
          >
            Start free — no card required
          </a>
          <a href="/demo" style={{
            background: "transparent",
            border: "1px solid rgba(129,140,248,0.3)",
            color: "#818CF8",
            fontSize: 15, fontWeight: 500,
            padding: "14px 28px",
            borderRadius: 10,
            textDecoration: "none",
            transition: "border-color 0.2s, background 0.2s",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(129,140,248,0.6)";
              e.currentTarget.style.background = "rgba(79,70,229,0.08)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(129,140,248,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Watch 2-min demo
          </a>
        </div>

        {/* Social proof */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <div style={{ display: "flex" }}>
            {["KR", "AM", "PS", "RK"].map((init, i) => (
              <div key={init} style={{
                width: 28, height: 28, borderRadius: "50%",
                background: `hsl(${240 + i * 15}, 50%, ${30 + i * 5}%)`,
                border: "2px solid #0C0E1A",
                marginLeft: i > 0 ? -8 : 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, fontWeight: 600, color: "#C7D2FE",
              }}>{init}</div>
            ))}
          </div>
          <span style={{ fontSize: 12, color: "#6B7280" }}>
            Trusted by 40+ BPO companies in beta
          </span>
        </div>

        {/* Pipeline widget */}
        <div style={{
          position: "relative", zIndex: 1,
          marginTop: 64,
          display: "flex", justifyContent: "center",
          width: "100%",
        }}>
          <PipelineWidget />
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: "#060A12",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 32px",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#EF4444", textAlign: "center", marginBottom: 12 }}>
            THE PROBLEM
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center", color: "#FFFFFF", marginBottom: 8 }}>
            Sound familiar?
          </h2>
          <p style={{ fontSize: 15, color: "#9CA3AF", textAlign: "center", marginBottom: 48 }}>
            Every Monday morning in every SME across India.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}>
            {PAIN_POINTS.map(p => (
              <div key={p.label} style={{
                background: `${p.color}08`,
                border: `1px solid ${p.color}28`,
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex", alignItems: "flex-start", gap: 14,
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${p.color}55`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = `${p.color}28`)}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#F9FAFB", marginBottom: 4 }}>{p.label}</div>
                  <div style={{ fontSize: 12, color: p.color, opacity: 0.8 }}>{p.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 40, textAlign: "center",
            fontSize: 16, fontWeight: 600, color: "#FFFFFF",
          }}>
            Zorvis solves all of this.{" "}
            <span style={{ color: "#818CF8" }}>In one platform. Starting free.</span>
          </div>
        </div>
      </section>

      {/* ── PLATFORM MODULES ────────────────────────────────────────────────── */}
      <section id="product" style={{ padding: "100px 32px", background: "#0C0E1A" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#818CF8", textAlign: "center", marginBottom: 12 }}>
            THE PLATFORM
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center", color: "#FFFFFF", marginBottom: 12 }}>
            Three intelligence layers.
          </h2>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center", color: "#818CF8", marginBottom: 16 }}>
            One unified system.
          </h2>
          <p style={{ fontSize: 15, color: "#9CA3AF", textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
            Hire the right people. Keep them engaged. Make every people decision with data.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {MODULES.map((mod, i) => (
              <div key={mod.name} style={{
                background: "#13152A",
                border: `1px solid ${mod.accentColor}30`,
                borderRadius: 16,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${mod.accentColor}60`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${mod.accentColor}30`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: mod.accentColor, opacity: 0.7,
                }} />

                {/* Module number */}
                <div style={{
                  fontSize: 56, fontWeight: 800, letterSpacing: "-0.04em",
                  color: mod.accentColor, opacity: 0.12, lineHeight: 1,
                  position: "absolute", top: 20, right: 24,
                  userSelect: "none",
                }}>
                  {mod.num}
                </div>

                <div style={{
                  display: "inline-block",
                  background: `${mod.accentColor}15`,
                  border: `1px solid ${mod.accentColor}30`,
                  borderRadius: 100,
                  padding: "3px 12px",
                  fontSize: 11, fontWeight: 600,
                  color: mod.accentColor,
                  letterSpacing: "0.05em",
                  marginBottom: 16,
                }}>
                  {mod.tagline}
                </div>

                <h3 style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px", letterSpacing: "-0.01em" }}>
                  {mod.name}
                </h3>
                <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.6, marginBottom: 24 }}>
                  {mod.desc}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {mod.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#D1D5DB" }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: mod.accentColor, flexShrink: 0,
                      }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: `${mod.statusColor}15`,
                  border: `1px solid ${mod.statusColor}30`,
                  borderRadius: 100,
                  padding: "4px 12px",
                  fontSize: 11, fontWeight: 600,
                  color: mod.statusColor,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: mod.statusColor }} />
                  {mod.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────────── */}
      <section style={{
        background: "#060A12",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 32px",
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32,
          textAlign: "center",
        }}>
          {[
            { num: "3 min", label: "400 CVs ranked" },
            { num: "₹0",    label: "to start — free forever" },
            { num: "1",     label: "platform, post to signed offer" },
          ].map(s => (
            <div key={s.num}>
              <div style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#FFFFFF", lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARKETS ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 32px", background: "#0C0E1A" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#818CF8", textAlign: "center", marginBottom: 12 }}>
            MARKETS
          </p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center", color: "#FFFFFF", marginBottom: 48 }}>
            Built for India. Ready for UAE.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
            {[
              {
                flag: "🇮🇳", country: "India",
                items: ["BPO · Staffing · SME hiring", "Naukri + LinkedIn integration", "₹9,999/mo base · Free tier"],
                status: "Phase 1 · Live", statusColor: "#10B981", accentColor: "#4F46E5",
              },
              {
                flag: "🇦🇪", country: "UAE",
                items: ["Blue collar · Hospitality · WPS", "Emirates ID OCR · Arabic offers", "AED 549/mo base"],
                status: "Phase 1 · Month 7", statusColor: "#818CF8", accentColor: "#818CF8",
              },
            ].map(m => (
              <div key={m.country} style={{
                background: "#13152A",
                border: `1px solid ${m.accentColor}25`,
                borderRadius: 16,
                padding: "28px 28px",
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{m.flag}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>{m.country}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 6 }}>
                  {m.items.map(item => (
                    <li key={item} style={{ fontSize: 13, color: "#9CA3AF", display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: m.accentColor, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: `${m.statusColor}15`,
                  border: `1px solid ${m.statusColor}30`,
                  borderRadius: 100,
                  padding: "4px 12px",
                  fontSize: 11, fontWeight: 600,
                  color: m.statusColor,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: m.statusColor }} />
                  {m.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────────────────── */}
      <section style={{
        background: "#060A12",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 32px",
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color: "#818CF8", marginBottom: 32 }}>
            EARLY CUSTOMERS
          </p>
          <div style={{
            background: "#13152A",
            border: "1px solid rgba(129,140,248,0.2)",
            borderRadius: 16,
            padding: "36px 40px",
          }}>
            <p style={{ fontSize: 18, fontWeight: 500, color: "#F9FAFB", lineHeight: 1.6, margin: "0 0 28px", fontStyle: "italic" }}>
              "We used to spend 6 hours screening CVs every Monday. Zorvis does it in minutes. Our shortlist quality went up."
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(79,70,229,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: "#C7D2FE",
              }}>PS</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF" }}>Priya Sharma</div>
                <div style={{ fontSize: 12, color: "#9CA3AF" }}>HR Manager · BPO company · Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────────── */}
      <section style={{
        background: "#0C0E1A",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "100px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 500, height: 300,
          background: "radial-gradient(ellipse, rgba(79,70,229,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <ZorvisLogo size={48} theme="dark" showWordmark={false} />
          </div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 8px" }}>
            The force behind your
          </h2>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#818CF8", margin: "0 0 20px" }}>
            people vision.
          </h2>
          <p style={{ fontSize: 15, color: "#6B7280", marginBottom: 40, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Zor is force. Vis is vision. Zorvis is the AI layer your people decisions deserve.
            Free forever on the starter plan.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/waitlist" style={{
              background: "#4F46E5",
              color: "#FFFFFF",
              fontSize: 15, fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#4338CA")}
              onMouseLeave={e => (e.currentTarget.style.background = "#4F46E5")}
            >
              Start free today
            </a>
            <a href="/demo" style={{
              background: "transparent",
              border: "1px solid rgba(129,140,248,0.3)",
              color: "#818CF8",
              fontSize: 15, fontWeight: 500,
              padding: "14px 32px",
              borderRadius: 10,
              textDecoration: "none",
            }}>
              Book a demo
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer style={{
        background: "#060A12",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <ZorvisLogo size={20} theme="dark" showWordmark />
        <div style={{ fontSize: 12, color: "#4B5563" }}>
          © 2026 Zorvis AI Technologies Pvt Ltd · India · UAE
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy", "Terms", "DPDP Compliant"].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: "#4B5563", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </footer>

      {/* ── GLOBAL STYLES ───────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0C0E1A; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        section { animation: fadeUp 0.6s ease both; }
      `}</style>
    </div>
  );
}

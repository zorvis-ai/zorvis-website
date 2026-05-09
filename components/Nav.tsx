"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "./brand";

export function ZMark({ size = 28, dark = false }: { size?: number; dark?: boolean }) {
  const sw = size * 0.19, pad = sw / 2 + 1;
  const TL = { x: pad, y: pad }, TR = { x: size - pad, y: pad };
  const BL = { x: pad, y: size - pad }, BR = { x: size - pad, y: size - pad };
  const bg = dark ? "#0D1117" : "#FFFFFF";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-label="Zorvis">
      <line x1={TL.x} y1={TL.y} x2={TR.x} y2={TR.y} stroke="#4F46E5" strokeWidth={sw} strokeLinecap="round"/>
      <line x1={TR.x} y1={TR.y} x2={BL.x} y2={BL.y} stroke="#7C3AED" strokeWidth={sw} strokeLinecap="round"/>
      <line x1={BL.x} y1={BL.y} x2={BR.x} y2={BR.y} stroke="#4F46E5" strokeWidth={sw} strokeLinecap="round"/>
      <circle cx={TR.x} cy={TR.y} r={size * 0.15} fill={bg}/>
      <circle cx={TR.x} cy={TR.y} r={size * 0.11} fill="#4F46E5"/>
      <circle cx={BL.x} cy={BL.y} r={size * 0.15} fill={bg}/>
      <circle cx={BL.x} cy={BL.y} r={size * 0.11} fill="#4F46E5"/>
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#FFFFFF",
        borderBottom: `1px solid ${scrolled ? "#E2E6F0" : "#E2E6F0"}`,
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.2s",
        padding: "0 24px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <ZMark size={26}/>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.5px", color: "#0D1117" }}>orvis</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="zv-desktop-nav">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 13, fontWeight: 500,
              color: pathname === l.href ? "#4F46E5" : "#374151",
              textDecoration: "none", padding: "6px 12px", borderRadius: 6,
              background: pathname === l.href ? "#EEF2FF" : "transparent",
              transition: "all 0.15s",
            }}
              onMouseEnter={e => { if (pathname !== l.href) (e.currentTarget as HTMLAnchorElement).style.background = "#F7F8FC"; }}
              onMouseLeave={e => { if (pathname !== l.href) (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >{l.label}</Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="zv-desktop-nav">
          <Link href="/login" style={{ fontSize: 13, fontWeight: 500, color: "#374151", textDecoration: "none", padding: "7px 14px", borderRadius: 6, transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#F7F8FC")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >Sign in</Link>
          <Link href="/waitlist" style={{
            background: "#4F46E5", color: "#FFFFFF", fontSize: 13, fontWeight: 600,
            padding: "8px 18px", borderRadius: 8, textDecoration: "none",
            transition: "background 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#4338CA")}
            onMouseLeave={e => (e.currentTarget.style.background = "#4F46E5")}
          >Get early access</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="zv-mobile-menu-btn" style={{
          display: "none", background: "none", border: "none",
          cursor: "pointer", padding: 8, borderRadius: 6,
        }} aria-label="Menu">
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D1117" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D1117" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="zv-mobile-menu" style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 99,
          background: "#FFFFFF", borderBottom: "1px solid #E2E6F0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          padding: "12px 16px 20px",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {NAV.map(l => (
            <Link key={l.href} href={l.href} style={{
              display: "block", padding: "11px 12px", fontSize: 15, fontWeight: 500,
              color: pathname === l.href ? "#4F46E5" : "#0D1117",
              textDecoration: "none", borderRadius: 8,
              background: pathname === l.href ? "#EEF2FF" : "transparent",
              marginBottom: 2,
            }}>
              {l.label}
            </Link>
          ))}
          <div style={{ borderTop: "1px solid #E2E6F0", marginTop: 12, paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href="/login" style={{ display: "block", padding: "11px 12px", fontSize: 15, fontWeight: 500, color: "#374151", textDecoration: "none", borderRadius: 8 }}>Sign in</Link>
            <Link href="/waitlist" style={{ display: "block", padding: "12px 16px", fontSize: 15, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", borderRadius: 8, background: "#4F46E5", textAlign: "center" }}>Get early access</Link>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @media (max-width: 768px) {
          .zv-desktop-nav { display: none !important; }
          .zv-mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .zv-mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}

export function Footer() {
  // Footer columns — links to pages that exist OR are coming today (batch 2B-2D)
  const COLS = [
    {
      heading: "PRODUCT",
      links: [
        ["Platform", "/product"],
        ["Pricing", "/pricing"],
        ["Use Cases", "/use-cases"],
        ["ROI Calculator", "/roi-calculator"],
      ],
    },
    {
      heading: "SOLUTIONS",
      links: [
        ["High-volume hiring", "/solutions/volume-hiring"],
        ["BPO & Contact Centres", "/solutions/volume-hiring#bpo"],
        ["Staffing Agencies", "/solutions/volume-hiring#staffing"],
        ["Manufacturing", "/solutions/volume-hiring#manufacturing"],
        ["Retail & QSR", "/solutions/volume-hiring#retail"],
      ],
    },
    {
      heading: "RESOURCES",
      links: [
        ["How it works", "/how-it-works"],
        ["HR Templates", "/resources/templates"],
        ["Blog", "/resources/blog"],
        ["FAQ", "/faq"],
        ["Trust & Security", "/trust"],
      ],
    },
    {
      heading: "COMPANY",
      links: [
        ["About", "/about"],
        ["Customers", "/customers"],
        ["Careers", "/careers"],
        ["Early access", "/waitlist"],
        ["founder@zorvis.ai", "mailto:founder@zorvis.ai"],
      ],
    },
  ];

  // Trust badges row
  const TRUST = [
    { label: "DPDP Act 2023", status: "live" },
    { label: "UAE PDPL Ready", status: "live" },
    { label: "GDPR Compliant", status: "live" },
    { label: "SOC 2", status: "progress" },
    { label: "ISO 27001", status: "progress" },
  ];

  return (
    <footer style={{
      background: "#0D1117", color: "#9CA3AF",
      padding: "56px 32px 28px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top section: Brand + 4 columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 1fr) repeat(4, minmax(140px, 1fr))",
          gap: 32, marginBottom: 40,
        }} className="zv-footer-grid">
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 14 }}>
              <ZMark size={24} dark/>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.5px" }}>orvis</span>
            </Link>
            <p style={{ fontSize: 13, color: "#6B7280", maxWidth: 240, lineHeight: 1.6, marginBottom: 16 }}>
              People Intelligence Platform for India and UAE SMEs. Hire, manage, and grow your team — powered by AI.
            </p>
            {/* Region indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#6B7280" }}>
              <span style={{ fontSize: 14 }}>🇮🇳</span>
              <span>India</span>
              <span style={{ color: "#374151" }}>·</span>
              <span style={{ fontSize: 14 }}>🇦🇪</span>
              <span>UAE</span>
            </div>
          </div>

          {/* 4 link columns */}
          {COLS.map(col => (
            <div key={col.heading}>
              <div style={{
                fontSize: 11, fontWeight: 600, color: "#4B5563",
                letterSpacing: "0.1em", marginBottom: 14,
              }}>{col.heading}</div>
              {col.links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    display: "block", fontSize: 13, color: "#6B7280",
                    textDecoration: "none", marginBottom: 9, lineHeight: 1.4,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#E5E7EB")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}
                >{label}</Link>
              ))}
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div style={{
          borderTop: "1px solid #1F2937",
          padding: "24px 0",
          display: "flex", flexWrap: "wrap", justifyContent: "center",
          gap: 24, rowGap: 14,
        }}>
          {TRUST.map(badge => (
            <div key={badge.label} style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 12, color: "#6B7280",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z"
                  stroke={badge.status === "live" ? "#10B981" : "#F59E0B"}
                  strokeWidth="1.6"
                  fill={badge.status === "live" ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.08)"}
                />
              </svg>
              <span style={{ fontWeight: 500 }}>{badge.label}</span>
              {badge.status === "progress" && (
                <span style={{ fontSize: 10, color: "#4B5563" }}>(in progress)</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom row: copyright + legal + social */}
        <div style={{
          borderTop: "1px solid #1F2937",
          paddingTop: 20,
          display: "flex", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16, alignItems: "center",
        }}>
          <span style={{ fontSize: 12, color: "#4B5563" }}>
            © 2026 Zorvis AI Technologies Pvt Ltd · Built for emerging markets
          </span>

          {/* Social + legal */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Legal links */}
            <div style={{ display: "flex", gap: 16 }}>
              <Link href="/privacy" style={{ fontSize: 12, color: "#4B5563", textDecoration: "none" }}>Privacy</Link>
              <Link href="/terms" style={{ fontSize: 12, color: "#4B5563", textDecoration: "none" }}>Terms</Link>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <a
                href="https://www.linkedin.com/company/zorvis-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "#4B5563", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9CA3AF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4B5563")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/zorvisai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                style={{ color: "#4B5563", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9CA3AF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4B5563")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:founder@zorvis.ai"
                aria-label="Email"
                style={{ color: "#4B5563", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#9CA3AF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4B5563")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive: stack columns on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .zv-footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 540px) {
          .zv-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

export function Tag({ children, color = "#4F46E5" }: { children: React.ReactNode; color?: string }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color, textAlign: "center", marginBottom: 10 }}>
      {children}
    </p>
  );
}

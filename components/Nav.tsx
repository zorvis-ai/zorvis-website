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
  return (
    <footer style={{
      background: "#0D1117", color: "#9CA3AF",
      padding: "40px 32px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: 32 }}>
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 12 }}>
              <ZMark size={22} dark/>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>orvis</span>
            </Link>
            <p style={{ fontSize: 13, color: "#6B7280", maxWidth: 240, lineHeight: 1.6 }}>People Intelligence Platform for India and UAE SMEs.</p>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[
              { heading: "Product", links: [["Platform", "/product"], ["Pricing", "/pricing"], ["Use Cases", "/use-cases"]] },
              { heading: "Company", links: [["About", "/about"], ["Customers", "/customers"], ["Solutions", "/solutions"]] },
              { heading: "Contact",  links: [["Early access", "/waitlist"], ["founder@zorvis.ai", "mailto:founder@zorvis.ai"]] },
            ].map(col => (
              <div key={col.heading}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#4B5563", letterSpacing: "0.1em", marginBottom: 12 }}>{col.heading.toUpperCase()}</div>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} style={{ display: "block", fontSize: 13, color: "#6B7280", textDecoration: "none", marginBottom: 8, transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#9CA3AF")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}
                  >{label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1F2937", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "#4B5563" }}>© 2026 Zorvis AI Technologies Pvt Ltd · India · UAE · zorvis.ai</span>
          <div style={{ display: "flex", gap: 16 }}>
            {[["Privacy", "#"], ["Terms", "#"], ["DPDP Compliant", "#"]].map(([l, h]) => (
              <Link key={l} href={h} style={{ fontSize: 12, color: "#4B5563", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
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

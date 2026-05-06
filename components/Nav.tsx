"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "./brand";

export function ZMark({ size = 28 }: { size?: number }) {
  const sw = size * 0.19, pad = sw / 2 + 1;
  const TL = { x: pad, y: pad }, TR = { x: size - pad, y: pad };
  const BL = { x: pad, y: size - pad }, BR = { x: size - pad, y: size - pad };
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-label="Zorvis">
      <line x1={TL.x} y1={TL.y} x2={TR.x} y2={TR.y} stroke="#4F46E5" strokeWidth={sw} strokeLinecap="round"/>
      <line x1={TR.x} y1={TR.y} x2={BL.x} y2={BL.y} stroke="#818CF8" strokeWidth={sw} strokeLinecap="round"/>
      <line x1={BL.x} y1={BL.y} x2={BR.x} y2={BR.y} stroke="#4F46E5" strokeWidth={sw} strokeLinecap="round"/>
      <circle cx={TR.x} cy={TR.y} r={size * 0.15} fill="#0C0E1A"/>
      <circle cx={TR.x} cy={TR.y} r={size * 0.11} fill="#C7D2FE"/>
      <circle cx={BL.x} cy={BL.y} r={size * 0.15} fill="#0C0E1A"/>
      <circle cx={BL.x} cy={BL.y} r={size * 0.11} fill="#C7D2FE"/>
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(12,14,26,0.97)" : "rgba(12,14,26,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "0 32px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <ZMark size={26}/>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.5px", color: "#FFFFFF" }}>orvis</span>
        </Link>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }} className="zorvis-desktop-nav">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 13, color: pathname === l.href ? "#C7D2FE" : "#9CA3AF",
              textDecoration: "none",
              borderBottom: pathname === l.href ? "1px solid #4F46E5" : "1px solid transparent",
              paddingBottom: 2, transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F9FAFB")}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === l.href ? "#C7D2FE" : "#9CA3AF")}
            >{l.label}</Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/login" style={{ fontSize: 13, color: "#818CF8", textDecoration: "none", padding: "7px 14px" }}>Sign in</Link>
          <Link href="/waitlist" style={{
            background: "#4F46E5", color: "#FFFFFF", fontSize: 13, fontWeight: 600,
            padding: "8px 18px", borderRadius: 8, textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#4338CA")}
            onMouseLeave={e => (e.currentTarget.style.background = "#4F46E5")}
          >Get early access</Link>
        </div>
      </nav>
      <style>{`
        @media (max-width: 680px) { .zorvis-desktop-nav { display: none !important; } }
      `}</style>
    </>
  );
}

export function Footer() {
  return (
    <footer style={{
      background: "#060A12", borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "28px 32px", display: "flex",
      justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 16,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
        <ZMark size={18}/><span style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>orvis</span>
      </Link>
      <div style={{ fontSize: 11, color: "#4B5563" }}>© 2026 Zorvis AI Technologies Pvt Ltd · India · UAE · zorvis.ai</div>
      <div style={{ display: "flex", gap: 18 }}>
        {[["Privacy", "#"], ["Terms", "#"], ["DPDP Compliant", "#"]].map(([l, h]) => (
          <Link key={l} href={h} style={{ fontSize: 11, color: "#4B5563", textDecoration: "none" }}>{l}</Link>
        ))}
      </div>
    </footer>
  );
}

// Reusable section tag label
export function Tag({ children, color = "#818CF8" }: { children: React.ReactNode; color?: string }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", color, textAlign: "center", marginBottom: 12 }}>
      {children}
    </p>
  );
}

// Reusable CTA button pair
export function CTAPair({ primary = "Get early access", secondary = "See pricing", primaryHref = "/waitlist", secondaryHref = "/pricing" }) {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
      <Link href={primaryHref} style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "13px 30px", borderRadius: 9, textDecoration: "none" }}>
        {primary}
      </Link>
      <Link href={secondaryHref} style={{ border: "1px solid rgba(129,140,248,0.3)", color: "#818CF8", fontSize: 14, fontWeight: 500, padding: "13px 30px", borderRadius: 9, textDecoration: "none" }}>
        {secondary}
      </Link>
    </div>
  );
}

"use client";
import Link from "next/link";
import { ZMark } from "@/components/Nav";

export default function LoginPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#F7F8FC", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px" }}>

      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 48 }}>
        <ZMark size={28}/>
        <span style={{ fontSize: 20, fontWeight: 700, color: "#0D1117", letterSpacing: "-0.5px" }}>orvis</span>
      </Link>

      <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 16, padding: "48px 44px", maxWidth: 420, width: "100%", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

        {/* Icon */}
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 24 }}>
          🔨
        </div>

        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#0D1117", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
          We're building this.
        </h1>
        <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.65, marginBottom: 28 }}>
          The Zorvis dashboard is under active development. We're onboarding early customers personally while we build — no self-serve login yet.
        </p>

        {/* ETA badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 100, padding: "8px 18px", marginBottom: 32 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4F46E5", animation: "zpulse 2s infinite" }}/>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#4F46E5" }}>Expected: July 2026</span>
        </div>

        <p style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 28 }}>
          Join the waitlist and we'll set up your account personally when we launch.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/waitlist" style={{ display: "block", background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "12px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>
            Join the waitlist →
          </Link>
          <a href="mailto:founder@zorvis.ai" style={{ display: "block", background: "#F7F8FC", border: "1px solid #E2E6F0", color: "#374151", fontSize: 14, fontWeight: 500, padding: "12px", borderRadius: 8, textDecoration: "none" }}>
            Email founder@zorvis.ai
          </a>
          <Link href="/" style={{ fontSize: 13, color: "#9CA3AF", textDecoration: "none", paddingTop: 4 }}>
            ← Back to home
          </Link>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes zpulse{0%,100%{opacity:1}50%{opacity:0.4}}
      `}</style>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";
import { USE_CASES } from "@/components/brand";
import Link from "next/link";

export default function UseCasesPage() {
  const [active, setActive] = useState(USE_CASES[0].id);
  const cur = USE_CASES.find(u => u.id === active)!;

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <PageHero
        eyebrow="USE CASES"
        headline={
          <>
            One platform.<br />
            <span style={{ color: "#4F46E5" }}>Every hiring context.</span>
          </>
        }
        summary="BPO to blue collar. India to UAE. Solo founder to enterprise HR. Every candidate and employee reached on their preferred channel."
        suiteContext="Eight scenarios. Same data spine. Same intelligence engine."
      />

      <section style={{ padding: "56px 32px 100px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>

          {/* Tab list */}
          <div style={{ flex: "0 0 224px", display: "flex", flexDirection: "column", gap: 4 }}>
            {USE_CASES.map(u => (
              <button key={u.id} onClick={() => setActive(u.id)} style={{
                display: "flex", alignItems: "center", gap: 11,
                background: active === u.id ? "#EEF2FF" : "transparent",
                border: active === u.id ? `1px solid #C7D2FE` : "1px solid transparent",
                borderRadius: 9, padding: "10px 12px",
                cursor: "pointer", textAlign: "left",
                fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s",
              }}
                onMouseEnter={e => { if (active !== u.id) (e.currentTarget as HTMLButtonElement).style.background = "#F7F8FC"; }}
                onMouseLeave={e => { if (active !== u.id) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
              >
                <span style={{ fontSize: 18 }}>{u.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: active === u.id ? "#4F46E5" : "#374151" }}>{u.title}</div>
                  <div style={{ fontSize: 10, color: u.color, marginTop: 1 }}>{u.sub}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Case detail */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "30px 28px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                <span style={{ fontSize: 36 }}>{cur.icon}</span>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#0D1117" }}>{cur.title}</h2>
                  <div style={{ display: "inline-block", background: `${cur.color}12`, border: `1px solid ${cur.color}28`, borderRadius: 100, padding: "2px 10px", fontSize: 11, fontWeight: 500, color: cur.color, marginTop: 4 }}>{cur.sub}</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: "14px" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#DC2626", letterSpacing: "0.1em", marginBottom: 7 }}>THE PROBLEM</div>
                  <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, margin: 0 }}>{cur.problem}</p>
                </div>
                <div style={{ background: `${cur.color}07`, border: `1px solid ${cur.color}20`, borderRadius: 10, padding: "14px" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: cur.color, letterSpacing: "0.1em", marginBottom: 7 }}>WITH ZORVIS</div>
                  <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, margin: 0 }}>{cur.solution}</p>
                </div>
              </div>

              {/* Step flow */}
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.1em", marginBottom: 12 }}>HOW IT WORKS</div>
                <div style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", gap: 4 }}>
                  {cur.steps.map((step, i) => (
                    <div key={step} style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ background: `${cur.color}10`, border: `1px solid ${cur.color}28`, borderRadius: 8, padding: "9px 12px", fontSize: 11, color: "#374151", textAlign: "center", maxWidth: 120 }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: cur.color, color: "#FFFFFF", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px" }}>{i + 1}</div>
                        {step}
                      </div>
                      {i < cur.steps.length - 1 && <div style={{ color: cur.color, fontSize: 14, margin: "0 3px", opacity: 0.4 }}>›</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {cur.metrics.map(m => (
                  <div key={m} style={{ background: `${cur.color}10`, border: `1px solid ${cur.color}25`, borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 600, color: cur.color }}>{m}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview grid */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 40px", color: "#0D1117" }}>Built for your industry</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
            {USE_CASES.map(u => (
              <button key={u.id} onClick={() => { setActive(u.id); window.scrollTo({ top: 280, behavior: "smooth" }); }} style={{
                background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "16px 16px",
                cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans',sans-serif",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)", transition: "box-shadow 0.15s, border-color 0.15s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLButtonElement).style.borderColor = `${u.color}35`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#E2E6F0"; }}
              >
                <span style={{ fontSize: 24, display: "block", marginBottom: 8 }}>{u.icon}</span>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0D1117", marginBottom: 2 }}>{u.title}</div>
                <div style={{ fontSize: 10, color: u.color }}>{u.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 32px", textAlign: "center", background: "#FFFFFF" }}>
        <h2 style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 800, margin: "0 0 10px", color: "#0D1117" }}>Don't see your exact use case?</h2>
        <p style={{ color: "#6B7280", marginBottom: 24, fontSize: 14 }}>Tell us your situation — we'll build for it.</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "11px 24px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>Join and describe your use case</Link>
          <a href="mailto:founder@zorvis.ai" style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", color: "#374151", fontSize: 14, fontWeight: 500, padding: "11px 24px", borderRadius: 8, textDecoration: "none" }}>Email us directly</a>
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

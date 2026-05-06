"use client";
import { useState } from "react";
import { Nav, Footer, Tag } from "@/components/Nav";
import { PRICING } from "@/components/brand";
import Link from "next/link";

const COMPARE = [
  { f:"Active jobs",                    s:"3",            g:"Unlimited",    sc:"Unlimited" },
  { f:"CV ranking",                     s:"50/job",       g:"Unlimited",    sc:"Unlimited" },
  { f:"Contact details",                s:"Blurred",      g:"✓ Unlocked",   sc:"✓ Unlocked" },
  { f:"Assessments (any channel)",      s:"10/mo",        g:"200/mo",       sc:"Unlimited" },
  { f:"Digital offers + e-signature",   s:"—",            g:"✓",            sc:"✓" },
  { f:"Kanban pipeline",                s:"Basic",        g:"Full + auto",  sc:"Full + auto" },
  { f:"Employee HR OS",                 s:"—",            g:"25 employees", sc:"100 employees" },
  { f:"UAE compliance module",          s:"—",            g:"—",            sc:"✓" },
  { f:"Agency white-label",             s:"—",            g:"—",            sc:"✓" },
  { f:"API access",                     s:"—",            g:"—",            sc:"✓" },
  { f:"Support",                        s:"Email",        g:"Priority",     sc:"SLA + dedicated" },
];

export default function PricingPage() {
  const [market, setMarket] = useState<"india"|"uae">("india");
  const plans = PRICING[market];

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#0C0E1A", color:"#F9FAFB", minHeight:"100vh" }}>
      <Nav/>

      {/* HERO */}
      <section style={{ padding:"120px 32px 60px", textAlign:"center", position:"relative" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:300, background:"radial-gradient(ellipse,rgba(79,70,229,0.11) 0%,transparent 70%)", pointerEvents:"none" }}/>
        <Tag>PRICING</Tag>
        <h1 style={{ fontSize:"clamp(32px,5vw,58px)", fontWeight:700, letterSpacing:"-0.03em", margin:"0 0 14px", color:"#FFFFFF" }}>
          Start free.<br/><span style={{ color:"#818CF8" }}>Pay when it works.</span>
        </h1>
        <p style={{ fontSize:16, color:"#9CA3AF", marginBottom:36, maxWidth:480, margin:"0 auto 36px" }}>Free tier is permanent. No trial clock. No credit card. Upgrade when you're ready.</p>
        <div style={{ display:"inline-flex", background:"#13152A", border:"1px solid rgba(255,255,255,0.1)", borderRadius:100, padding:4 }}>
          {(["india","uae"] as const).map(m=>(
            <button key={m} onClick={()=>setMarket(m)} style={{ background:market===m?"#4F46E5":"transparent", color:market===m?"#FFFFFF":"#9CA3AF", border:"none", borderRadius:100, padding:"8px 24px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s" }}>
              {m==="india"?"🇮🇳 India (₹)":"🇦🇪 UAE (AED)"}
            </button>
          ))}
        </div>
      </section>

      {/* PLAN CARDS */}
      <section style={{ padding:"0 32px 80px" }}>
        <div style={{ maxWidth:980, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
          {plans.map(p=>(
            <div key={p.name} style={{ background:"#13152A", border:p.highlight?`2px solid ${p.color}`:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:"32px 26px", position:"relative", transform:p.highlight?"scale(1.02)":"scale(1)", transition:"transform 0.2s" }}>
              {p.highlight && (p as any).badge && (
                <div style={{ position:"absolute", top:-14, left:"50%", transform:"translateX(-50%)", background:p.color, color:"#FFFFFF", fontSize:11, fontWeight:700, letterSpacing:"0.05em", padding:"4px 16px", borderRadius:100, whiteSpace:"nowrap" }}>{(p as any).badge}</div>
              )}
              <div style={{ fontSize:12, fontWeight:600, color:p.color, letterSpacing:"0.06em", marginBottom:8 }}>{p.name.toUpperCase()}</div>
              <div style={{ display:"flex", alignItems:"baseline", gap:6, marginBottom:4 }}>
                <span style={{ fontSize:36, fontWeight:700, letterSpacing:"-0.02em", color:"#FFFFFF" }}>{p.price}</span>
                <span style={{ fontSize:13, color:"#9CA3AF" }}>{p.sub}</span>
              </div>
              <p style={{ fontSize:13, color:"#9CA3AF", marginBottom:22 }}>{p.desc}</p>
              <ul style={{ listStyle:"none", padding:0, margin:"0 0 26px", display:"flex", flexDirection:"column", gap:9 }}>
                {p.features.map(f=>(
                  <li key={f} style={{ display:"flex", alignItems:"flex-start", gap:9, fontSize:13, color:"#D1D5DB" }}>
                    <div style={{ width:18, height:18, borderRadius:"50%", background:`${p.color}18`, border:`1px solid ${p.color}35`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                      <svg width="8" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={p.href} style={{ display:"block", textAlign:"center", background:p.highlight?p.color:"transparent", border:`1px solid ${p.highlight?p.color:"rgba(255,255,255,0.15)"}`, color:p.highlight?"#FFFFFF":"#D1D5DB", fontSize:14, fontWeight:600, padding:"12px", borderRadius:8, textDecoration:"none" }}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p style={{ textAlign:"center", fontSize:13, color:"#6B7280", marginTop:24 }}>All plans include assessment delivery on email, WhatsApp, SMS, and web portal — candidate's choice.</p>
      </section>

      {/* COMPARE */}
      <section style={{ background:"#060A12", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"80px 32px" }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:700, letterSpacing:"-0.02em", textAlign:"center", margin:"0 0 44px", color:"#FFFFFF" }}>Full comparison</h2>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr>
                  <th style={{ textAlign:"left", padding:"12px 16px", color:"#9CA3AF", fontWeight:500, borderBottom:"1px solid rgba(255,255,255,0.08)" }}>Feature</th>
                  {["Starter","Growth","Scale"].map(h=>(
                    <th key={h} style={{ textAlign:"center", padding:"12px 16px", color:h==="Growth"?"#C7D2FE":"#9CA3AF", fontWeight:600, borderBottom:"1px solid rgba(255,255,255,0.08)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row,i)=>(
                  <tr key={row.f} style={{ background:i%2===0?"transparent":"rgba(255,255,255,0.02)" }}>
                    <td style={{ padding:"11px 16px", color:"#D1D5DB" }}>{row.f}</td>
                    <td style={{ padding:"11px 16px", textAlign:"center", color:"#9CA3AF" }}>{row.s}</td>
                    <td style={{ padding:"11px 16px", textAlign:"center", color:row.g.startsWith("✓")?"#10B981":"#D1D5DB" }}>{row.g}</td>
                    <td style={{ padding:"11px 16px", textAlign:"center", color:row.sc.startsWith("✓")?"#10B981":"#D1D5DB" }}>{row.sc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:"80px 32px" }}>
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:700, letterSpacing:"-0.02em", textAlign:"center", margin:"0 0 44px", color:"#FFFFFF" }}>Common questions</h2>
          {[
            { q:"Is the free tier really free forever?", a:"Yes. No time limit. Keep using Starter as long as you want. Upgrade only when you need to unlock contact details or send more assessments." },
            { q:"Which channels can candidates use for assessments?", a:"Email (default), WhatsApp, SMS, and a web portal. The candidate's preference is captured at first contact and respected through their entire journey. You never force a channel." },
            { q:"Which channels do employees use for the HR OS?", a:"WhatsApp, Slack, email, or the web portal — employee's choice. The HR OS is channel-agnostic from Day 1. No forced app downloads." },
            { q:"Can I use Zorvis for both India and UAE?", a:"Yes. The Scale plan includes the full UAE compliance module — WPS SIF generation, Emirates ID OCR, bilingual Arabic/English offers, and the visa expiry calendar." },
            { q:"Is annual billing available?", a:"Yes — annual billing is 2 months free (20% off) on Growth and Scale. Email founder@zorvis.ai to switch." },
          ].map(faq=>(
            <div key={faq.q} style={{ borderBottom:"1px solid rgba(255,255,255,0.07)", padding:"20px 0" }}>
              <div style={{ fontSize:15, fontWeight:600, color:"#FFFFFF", marginBottom:8 }}>{faq.q}</div>
              <div style={{ fontSize:13, color:"#9CA3AF", lineHeight:1.65 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background:"#060A12", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"60px 32px", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(20px,3vw,32px)", fontWeight:700, margin:"0 0 12px", color:"#FFFFFF" }}>Start free. Upgrade when you're ready.</h2>
        <p style={{ color:"#9CA3AF", marginBottom:28, fontSize:14 }}>No credit card. First hire in days.</p>
        <Link href="/waitlist" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:14, fontWeight:600, padding:"13px 32px", borderRadius:8, textDecoration:"none" }}>Get early access →</Link>
      </section>

      <Footer/>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}

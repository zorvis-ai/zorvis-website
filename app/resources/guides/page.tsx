"use client";
import Link from "next/link";
import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";

const COMING = [
  { icon:"🎯", title:"The Complete BPO Hiring Playbook", phase:"Hiring Module", eta:"July 2026", color:"#4F46E5", desc:"Job post → AI screening → assessment → Kanban → signed offer. Built for Indian BPOs hiring 50–500 agents per month." },
  { icon:"🇦🇪", title:"UAE Blue Collar Hiring: Pre-Arrival to WPS", phase:"UAE Module", eta:"July 2026", color:"#D97706", desc:"Screen workers in India before visa costs. Emirates ID OCR on arrival. WPS SIF in one click. Full compliance walkthrough." },
  { icon:"🏢", title:"Staffing Agency White-Label Setup Guide", phase:"Agency Module", eta:"Q4 2026", color:"#7C3AED", desc:"Set up Zorvis under your brand. Manage multiple employer clients. Score every candidate before placement." },
  { icon:"📱", title:"Setting Up Your Omnichannel HR Helpdesk", phase:"HR OS Module", eta:"Q4 2026", color:"#059669", desc:"Employee self-service for leave, payslips, and goals — on WhatsApp, Slack, email, or web portal." },
  { icon:"⚖️", title:"GCC Compliance Calendar Setup", phase:"Compliance Module", eta:"Q4 2026", color:"#D97706", desc:"Automate visa expiry alerts, Emirates ID renewals, MOHRE documentation, and labour contract tracking." },
  { icon:"🔮", title:"Reading Your Workforce Intelligence Report", phase:"Intelligence Module", eta:"2027", color:"#059669", desc:"Interpret team health scores, hire quality predictions, source ROI data, and monthly workforce narratives." },
];

export default function GuidesPage() {
  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#FFFFFF", color:"#0D1117", minHeight:"100vh" }}>
      <Nav />
      <PageHero
        eyebrow="GUIDES"
        headline={
          <>
            Deep-dive product guides.<br />
            <span style={{ color:"#4F46E5" }}>Built as we build.</span>
          </>
        }
        summary="Each guide launches alongside its module. Phase 1 goes live July 2026 — the first two guides follow immediately."
        suiteContext="Step-by-step playbooks for hiring, compliance, and HR ops"
      />

      {/* Available now */}
      <section style={{ padding:"56px 32px 56px", maxWidth:900, margin:"0 auto" }}>
        <h2 style={{ fontSize:16, fontWeight:700, color:"#0D1117", marginBottom:16 }}>Available now</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:14 }}>
          {[
            { icon:"📝", title:"Blog — 5 in-depth articles", desc:"CV screening, BPO hiring, UAE compliance, AI recruitment, and HR software comparisons. Practical guides, no fluff.", href:"/resources/blog" },
            { icon:"📋", title:"HR Templates — 5 free templates", desc:"Offer letters, JDs, interview scorecards, BGV checklist, and onboarding guide. All free.", href:"/resources/templates" },
          ].map(r => (
            <Link key={r.title} href={r.href} style={{ textDecoration:"none" }}>
              <div style={{ background:"#F7F8FF", border:"1px solid #C7D2FE", borderRadius:12, padding:"20px", cursor:"pointer", transition:"box-shadow 0.15s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow="0 4px 16px rgba(79,70,229,0.12)")}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow="none")}>
                <span style={{ fontSize:28, display:"block", marginBottom:10 }}>{r.icon}</span>
                <div style={{ fontSize:15, fontWeight:700, color:"#0D1117", marginBottom:5 }}>{r.title}</div>
                <div style={{ fontSize:13, color:"#6B7280", lineHeight:1.55, marginBottom:10 }}>{r.desc}</div>
                <div style={{ fontSize:13, fontWeight:600, color:"#4F46E5" }}>Browse →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming guides */}
      <section style={{ background:"#F7F8FC", borderTop:"1px solid #E2E6F0", padding:"56px 32px" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <h2 style={{ fontSize:20, fontWeight:700, color:"#0D1117", marginBottom:6 }}>Product guides — coming soon</h2>
          <p style={{ fontSize:14, color:"#6B7280", marginBottom:28 }}>Join the waitlist to get each guide the day it launches.</p>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {COMING.map(g => (
              <div key={g.title} style={{ background:"#FFFFFF", border:"1px solid #E2E6F0", borderRadius:12, padding:"18px 20px", display:"flex", alignItems:"flex-start", gap:16 }}>
                <span style={{ fontSize:22, flexShrink:0 }}>{g.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4, flexWrap:"wrap" }}>
                    <div style={{ fontSize:14, fontWeight:700, color:"#0D1117" }}>{g.title}</div>
                    <div style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:100, padding:"2px 9px", fontSize:10, fontWeight:600, color:"#6B7280" }}>{g.phase}</div>
                  </div>
                  <div style={{ fontSize:13, color:"#6B7280", lineHeight:1.55 }}>{g.desc}</div>
                </div>
                <div style={{ background:`${g.color}12`, border:`1px solid ${g.color}25`, borderRadius:100, padding:"3px 10px", fontSize:10, fontWeight:600, color:g.color, flexShrink:0, whiteSpace:"nowrap" }}>{g.eta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"56px 32px", textAlign:"center" }}>
        <h2 style={{ fontSize:20, fontWeight:800, color:"#0D1117", margin:"0 0 10px" }}>Get notified when guides launch.</h2>
        <p style={{ color:"#6B7280", fontSize:14, marginBottom:22 }}>We send each guide to waitlist members first.</p>
        <Link href="/waitlist" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:14, fontWeight:600, padding:"11px 26px", borderRadius:8, textDecoration:"none", boxShadow:"0 4px 12px rgba(79,70,229,0.25)" }}>Join the waitlist →</Link>
      </section>

      <Footer />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes zpulse{0%,100%{opacity:1}50%{opacity:0.4}}
      `}</style>
    </div>
  );
}

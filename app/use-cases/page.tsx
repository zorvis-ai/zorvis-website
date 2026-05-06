"use client";
import { useState } from "react";
import { Nav, Footer, Tag } from "@/components/Nav";
import { USE_CASES } from "@/components/brand";
import Link from "next/link";

export default function UseCasesPage() {
  const [active, setActive] = useState(USE_CASES[0].id);
  const cur = USE_CASES.find(u=>u.id===active)!;

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#0C0E1A", color:"#F9FAFB", minHeight:"100vh" }}>
      <Nav/>

      <section style={{ padding:"120px 32px 56px", textAlign:"center", maxWidth:720, margin:"0 auto" }}>
        <Tag>USE CASES</Tag>
        <h1 style={{ fontSize:"clamp(32px,5vw,54px)", fontWeight:700, letterSpacing:"-0.03em", margin:"0 0 14px", color:"#FFFFFF" }}>
          One platform.<br/><span style={{ color:"#818CF8" }}>Every hiring context.</span>
        </h1>
        <p style={{ fontSize:16, color:"#9CA3AF" }}>BPO to blue collar. India to UAE. Solo founder to enterprise HR. Zorvis adapts to your exact reality — and delivers to every candidate and employee on their preferred channel.</p>
      </section>

      <section style={{ padding:"0 32px 100px", maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", gap:32, flexWrap:"wrap" }}>

          {/* TAB LIST */}
          <div style={{ flex:"0 0 240px", display:"flex", flexDirection:"column", gap:6 }}>
            {USE_CASES.map(u=>(
              <button key={u.id} onClick={()=>setActive(u.id)} style={{ display:"flex", alignItems:"center", gap:12, background:active===u.id?`${u.color}16`:"transparent", border:active===u.id?`1px solid ${u.color}38`:"1px solid transparent", borderRadius:10, padding:"11px 14px", cursor:"pointer", textAlign:"left", fontFamily:"'DM Sans',sans-serif", transition:"all 0.15s" }}>
                <span style={{ fontSize:18 }}>{u.icon}</span>
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:active===u.id?"#FFFFFF":"#9CA3AF" }}>{u.title}</div>
                  <div style={{ fontSize:10, color:u.color, marginTop:1 }}>{u.sub}</div>
                </div>
              </button>
            ))}
          </div>

          {/* CASE DETAIL */}
          <div style={{ flex:1, minWidth:300 }}>
            <div style={{ background:"#13152A", border:`1px solid ${cur.color}28`, borderRadius:16, padding:"34px 30px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:26 }}>
                <span style={{ fontSize:38 }}>{cur.icon}</span>
                <div>
                  <h2 style={{ fontSize:24, fontWeight:700, margin:0, color:"#FFFFFF" }}>{cur.title}</h2>
                  <div style={{ display:"inline-block", background:`${cur.color}16`, border:`1px solid ${cur.color}28`, borderRadius:100, padding:"2px 12px", fontSize:11, fontWeight:500, color:cur.color, marginTop:4 }}>{cur.sub}</div>
                </div>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:28 }}>
                <div style={{ background:"rgba(239,68,68,0.07)", border:"1px solid rgba(239,68,68,0.15)", borderRadius:10, padding:"14px" }}>
                  <div style={{ fontSize:10, fontWeight:600, color:"#EF4444", letterSpacing:"0.1em", marginBottom:7 }}>THE PROBLEM</div>
                  <p style={{ fontSize:13, color:"#D1D5DB", lineHeight:1.6, margin:0 }}>{cur.problem}</p>
                </div>
                <div style={{ background:`${cur.color}07`, border:`1px solid ${cur.color}18`, borderRadius:10, padding:"14px" }}>
                  <div style={{ fontSize:10, fontWeight:600, color:cur.color, letterSpacing:"0.1em", marginBottom:7 }}>THE SOLUTION</div>
                  <p style={{ fontSize:13, color:"#D1D5DB", lineHeight:1.6, margin:0 }}>{cur.solution}</p>
                </div>
              </div>

              {/* Step flow */}
              <div style={{ marginBottom:26 }}>
                <div style={{ fontSize:10, fontWeight:600, color:"#9CA3AF", letterSpacing:"0.1em", marginBottom:14 }}>HOW IT WORKS</div>
                <div style={{ display:"flex", alignItems:"flex-start", flexWrap:"wrap", gap:4 }}>
                  {cur.steps.map((step,i)=>(
                    <div key={step} style={{ display:"flex", alignItems:"center" }}>
                      <div style={{ background:`${cur.color}14`, border:`1px solid ${cur.color}30`, borderRadius:9, padding:"10px 13px", fontSize:11, color:"#D1D5DB", textAlign:"center", maxWidth:120 }}>
                        <div style={{ width:18, height:18, borderRadius:"50%", background:cur.color, color:"#FFFFFF", fontSize:9, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 5px" }}>{i+1}</div>
                        {step}
                      </div>
                      {i<cur.steps.length-1 && <div style={{ color:cur.color, fontSize:16, margin:"0 3px", opacity:0.45 }}>›</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {cur.metrics.map(m=>(
                  <div key={m} style={{ background:`${cur.color}14`, border:`1px solid ${cur.color}28`, borderRadius:100, padding:"5px 13px", fontSize:11, fontWeight:500, color:cur.color }}>{m}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL CASES OVERVIEW */}
      <section style={{ background:"#060A12", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"80px 32px" }}>
        <div style={{ maxWidth:960, margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:700, letterSpacing:"-0.02em", textAlign:"center", margin:"0 0 44px", color:"#FFFFFF" }}>Built for your industry</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:14 }}>
            {USE_CASES.map(u=>(
              <button key={u.id} onClick={()=>{ setActive(u.id); window.scrollTo({top:300,behavior:"smooth"}); }} style={{ background:"#13152A", border:`1px solid ${u.color}18`, borderRadius:12, padding:"18px 18px", cursor:"pointer", textAlign:"left", fontFamily:"'DM Sans',sans-serif", transition:"border-color 0.2s,transform 0.2s" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLButtonElement).style.borderColor=`${u.color}45`; (e.currentTarget as HTMLButtonElement).style.transform="translateY(-2px)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLButtonElement).style.borderColor=`${u.color}18`; (e.currentTarget as HTMLButtonElement).style.transform="translateY(0)"; }}
              >
                <span style={{ fontSize:26, display:"block", marginBottom:8 }}>{u.icon}</span>
                <div style={{ fontSize:13, fontWeight:600, color:"#FFFFFF", marginBottom:3 }}>{u.title}</div>
                <div style={{ fontSize:10, color:u.color }}>{u.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding:"80px 32px", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(20px,3vw,32px)", fontWeight:700, margin:"0 0 12px", color:"#FFFFFF" }}>Don't see your exact use case?</h2>
        <p style={{ color:"#9CA3AF", marginBottom:28, fontSize:14 }}>We're building with early customers. Tell us your situation — we'll build for it.</p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <Link href="/waitlist" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:14, fontWeight:600, padding:"12px 26px", borderRadius:8, textDecoration:"none" }}>Join and describe your use case</Link>
          <a href="mailto:founder@zorvis.ai" style={{ border:"1px solid rgba(129,140,248,0.3)", color:"#818CF8", fontSize:14, fontWeight:500, padding:"12px 26px", borderRadius:8, textDecoration:"none" }}>Email us directly</a>
        </div>
      </section>

      <Footer/>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}

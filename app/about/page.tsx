"use client";
import { Nav, Footer, Tag, ZMark } from "@/components/Nav";
import { TEAM, BRAND } from "@/components/brand";
import Link from "next/link";

const STATS = [{ n:"3+", l:"Years building together" },{ n:"$1M+", l:"ARR at Wild Oak" },{ n:"2", l:"Markets at launch" },{ n:"10+", l:"Years product + engineering experience" }];
const VALUES = [
  { icon:"⚡", title:"Speed over perfection",    body:"We ship. We learn. We fix. A working product in the hands of a real HR manager beats a perfect product in Figma. Always." },
  { icon:"🔒", title:"Trust is the product",     body:"SME buyers don't trust technology — they trust people. Every design decision starts with: does this earn trust?" },
  { icon:"📊", title:"Data compounds",           body:"Every hire, every score, every outcome makes the next prediction better. We are building an intelligence moat, not a feature list." },
  { icon:"🌏", title:"Built for the real India", body:"Not Bangalore SaaS. The BPO in Hyderabad. The factory in Pune. The hotel in Dubai. People who hire in volume on a budget." },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#0C0E1A", color:"#F9FAFB", minHeight:"100vh" }}>
      <Nav/>

      {/* HERO */}
      <section style={{ padding:"130px 32px 72px", maxWidth:740, margin:"0 auto", textAlign:"center", position:"relative" }}>
        <div style={{ position:"absolute", top:"40%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:280, background:"radial-gradient(ellipse,rgba(79,70,229,0.14) 0%,transparent 70%)", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <Tag>OUR STORY</Tag>
          <h1 style={{ fontSize:"clamp(34px,6vw,62px)", fontWeight:700, letterSpacing:"-0.03em", lineHeight:1.05, margin:"0 0 20px" }}>
            We've been on both sides<br/><span style={{ color:"#818CF8" }}>of the hire.</span>
          </h1>
          <p style={{ fontSize:16, color:"#9CA3AF", lineHeight:1.75, maxWidth:600, margin:"0 auto" }}>
            At Wild Oak, we grew from 0 to $1M ARR in 18 months. We hired fast, made mistakes, read too many CVs, and built a team on gut instinct and spreadsheets. Then we asked: why doesn't a better system exist for companies like ours?
            <br/><br/>
            Zorvis is the answer we wished existed. The {BRAND.tagline} built specifically for India and UAE SMEs — where every HR manager is stretched thin and every wrong hire is felt for months.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding:"0 32px 80px" }}>
        <div style={{ maxWidth:860, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:16 }}>
          {STATS.map(s=>(
            <div key={s.n} style={{ background:"#13152A", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:"24px 20px", textAlign:"center" }}>
              <div style={{ fontSize:38, fontWeight:700, letterSpacing:"-0.03em", color:"#FFFFFF", lineHeight:1 }}>{s.n}</div>
              <div style={{ fontSize:12, color:"#9CA3AF", marginTop:6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding:"0 32px 100px" }}>
        <div style={{ maxWidth:960, margin:"0 auto" }}>
          <Tag>THE TEAM</Tag>
          <h2 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:700, letterSpacing:"-0.02em", textAlign:"center", margin:"0 0 52px", color:"#FFFFFF" }}>Small team. Deep experience.</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:24 }}>
            {TEAM.map(m=>(
              <div key={m.name} style={{ background:"#13152A", border:`1px solid ${m.color}25`, borderRadius:16, padding:"32px 28px", position:"relative", overflow:"hidden", transition:"border-color 0.2s,transform 0.2s" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.borderColor=`${m.color}55`; (e.currentTarget as HTMLDivElement).style.transform="translateY(-3px)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.borderColor=`${m.color}25`; (e.currentTarget as HTMLDivElement).style.transform="translateY(0)"; }}
              >
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:m.color, opacity:0.6 }}/>
                <div style={{ width:60, height:60, borderRadius:"50%", background:`${m.color}22`, border:`2px solid ${m.color}38`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:700, color:m.color, marginBottom:18 }}>{m.initials}</div>
                <div style={{ fontSize:19, fontWeight:700, color:"#FFFFFF", marginBottom:4 }}>{m.name}</div>
                <div style={{ fontSize:11, fontWeight:600, color:m.color, letterSpacing:"0.05em", marginBottom:14 }}>{m.role.toUpperCase()}</div>
                <p style={{ fontSize:13, color:"#9CA3AF", lineHeight:1.65, marginBottom:18 }}>{m.bio}</p>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:12, color:"#818CF8", textDecoration:"none", background:"rgba(79,70,229,0.1)", border:"1px solid rgba(129,140,248,0.2)", padding:"6px 14px", borderRadius:100 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background:"#060A12", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"80px 32px" }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <Tag>HOW WE BUILD</Tag>
          <h2 style={{ fontSize:"clamp(24px,4vw,38px)", fontWeight:700, letterSpacing:"-0.02em", textAlign:"center", margin:"0 0 48px", color:"#FFFFFF" }}>Four principles. Non-negotiable.</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(360px,1fr))", gap:18 }}>
            {VALUES.map(v=>(
              <div key={v.title} style={{ background:"#13152A", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:"22px 22px", display:"flex", gap:16 }}>
                <span style={{ fontSize:26, flexShrink:0 }}>{v.icon}</span>
                <div>
                  <div style={{ fontSize:15, fontWeight:600, color:"#FFFFFF", marginBottom:7 }}>{v.title}</div>
                  <div style={{ fontSize:13, color:"#9CA3AF", lineHeight:1.65 }}>{v.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"80px 32px", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:700, letterSpacing:"-0.02em", margin:"0 0 14px", color:"#FFFFFF" }}>We're hiring too.</h2>
        <p style={{ fontSize:15, color:"#9CA3AF", marginBottom:32, maxWidth:480, margin:"0 auto 32px" }}>
          Looking for a Technical Co-founder. Built SaaS products at scale. Care about how India hires. Let's talk.
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <Link href="/waitlist" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:14, fontWeight:600, padding:"12px 28px", borderRadius:8, textDecoration:"none" }}>Join the waitlist</Link>
          <a href="mailto:founder@zorvis.ai" style={{ border:"1px solid rgba(129,140,248,0.3)", color:"#818CF8", fontSize:14, fontWeight:500, padding:"12px 28px", borderRadius:8, textDecoration:"none" }}>Email us directly</a>
        </div>
      </section>

      <Footer/>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}

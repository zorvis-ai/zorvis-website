"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Nav, ZMark, Footer, Tag } from "@/components/Nav";
import { MODULES, CHANNELS, USE_CASES, BRAND } from "@/components/brand";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; obs.disconnect();
      let n = 0; const step = Math.ceil(target / 40);
      const t = setInterval(() => { n += step; if (n >= target) { setVal(target); clearInterval(t); } else setVal(n); }, 28);
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const CANDIDATES = [
  { name: "Kavya Reddy",  role: "BPO Analyst",  score: "84–90", stage: "AI Ranked",  ch: "Email",     hi: true },
  { name: "Arjun Mehta",  role: "BPO Senior",   score: "78–84", stage: "Test Sent",  ch: "WhatsApp",  hi: false },
  { name: "Priya Singh",  role: "Team Lead",    score: "72–78", stage: "Offer Sent", ch: "SMS",       hi: false },
  { name: "Divya Nair",   role: "Sr. Agent",    score: "82–88", stage: "Hired ✓",   ch: "Email",     hi: true },
];
const SC: Record<string, string> = { "AI Ranked":"#818CF8","Test Sent":"#F59E0B","Offer Sent":"#3B82F6","Hired ✓":"#10B981" };
const CC: Record<string, string> = { Email:"#6B7280", WhatsApp:"#10B981", SMS:"#F59E0B" };

const PAIN = [
  { icon:"📋", h:"400 CVs every Monday",    b:"6 hours of reading. Zero score. No consistency. No record of why you shortlisted anyone.", c:"#EF4444" },
  { icon:"💸", h:"Testing costs ₹2,000/candidate", b:"Separate login. Separate invoice. Completely disconnected from your pipeline.", c:"#F59E0B" },
  { icon:"📧", h:"Offers lost in email threads", b:"7 threads to track one offer. No timestamp. No digital signature. No legal record.", c:"#818CF8" },
  { icon:"🗂️", h:"5 job boards, 5 inboxes",  b:"The best candidates ghost because nobody followed up. You never even know.", c:"#EF4444" },
  { icon:"📉", h:"Hire fails at 90 days",    b:"No one connects the failure back to the aptitude score at hiring. That data never existed.", c:"#F59E0B" },
  { icon:"🏢", h:"Enterprise tools: ₹40L/yr", b:"5-month implementation. Built for 5,000-person companies. You have 50.", c:"#818CF8" },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#0C0E1A", color:"#F9FAFB", minHeight:"100vh", overflowX:"hidden" }}>
      <Nav/>

      {/* ── HERO ── */}
      <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"120px 32px 80px", position:"relative", overflow:"hidden", textAlign:"center" }}>
        <div style={{ position:"absolute", inset:0, zIndex:0, backgroundImage:"radial-gradient(circle,rgba(79,70,229,0.12) 1px,transparent 1px)", backgroundSize:"40px 40px", maskImage:"radial-gradient(ellipse 80% 60% at 50% 40%,black 30%,transparent 100%)" }}/>
        <div style={{ position:"absolute", top:"32%", left:"50%", transform:"translate(-50%,-50%)", width:700, height:420, background:"radial-gradient(ellipse,rgba(79,70,229,0.15) 0%,transparent 70%)", pointerEvents:"none" }}/>

        {/* Eyebrow */}
        <div style={{ position:"relative", zIndex:1, display:"inline-flex", alignItems:"center", gap:8, background:"rgba(79,70,229,0.1)", border:"1px solid rgba(129,140,248,0.25)", borderRadius:100, padding:"6px 16px", marginBottom:28 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#10B981", animation:"zpulse 2s ease-in-out infinite" }}/>
          <span style={{ fontSize:12, color:"#818CF8", fontWeight:500 }}>People Intelligence Platform · India & UAE · Early Access Open</span>
        </div>

        {/* H1 */}
        <h1 style={{ position:"relative", zIndex:1, fontSize:"clamp(44px,7vw,84px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.02, margin:"0 0 8px", color:"#FFFFFF", maxWidth:900 }}>Hire. Manage. Grow.</h1>
        <h1 style={{ position:"relative", zIndex:1, fontSize:"clamp(44px,7vw,84px)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.08, margin:"0 0 22px", color:"#818CF8", maxWidth:900 }}>All powered by AI.</h1>

        {/* Sub */}
        <p style={{ position:"relative", zIndex:1, fontSize:"clamp(15px,2vw,19px)", color:"#9CA3AF", maxWidth:600, lineHeight:1.65, margin:"0 0 16px" }}>
          {BRAND.pitch} One platform. Every channel your people already use.
        </p>

        {/* Channel strip */}
        <div style={{ position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", justifyContent:"center" }}>
            {CHANNELS.map(c => (
              <div key={c.label} style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:100, padding:"5px 13px", fontSize:11, color:"#9CA3AF" }}>
                <span>{c.icon}</span>{c.label}
              </div>
            ))}
          </div>
          <p style={{ fontSize:11, color:"#4B5563", marginTop:8 }}>Candidate chooses email, WhatsApp, SMS or web. Employee chooses Slack, email or portal. One unified view for HR.</p>
        </div>

        {/* CTAs */}
        <div style={{ position:"relative", zIndex:1, display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center", margin:"32px 0 44px" }}>
          <Link href="/waitlist" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:15, fontWeight:600, padding:"14px 30px", borderRadius:10, textDecoration:"none" }}>Start free — no card required</Link>
          <Link href="/use-cases" style={{ background:"transparent", border:"1px solid rgba(129,140,248,0.3)", color:"#818CF8", fontSize:15, fontWeight:500, padding:"14px 30px", borderRadius:10, textDecoration:"none" }}>See use cases →</Link>
        </div>

        {/* Social proof */}
        <div style={{ position:"relative", zIndex:1, display:"flex", alignItems:"center", gap:10, marginBottom:52 }}>
          <div style={{ display:"flex" }}>
            {["KR","AM","PS","RK"].map((i,n) => (
              <div key={i} style={{ width:28, height:28, borderRadius:"50%", background:`hsl(${240+n*15},50%,${30+n*5}%)`, border:"2px solid #0C0E1A", marginLeft:n>0?-8:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:600, color:"#C7D2FE" }}>{i}</div>
            ))}
          </div>
          <span style={{ fontSize:12, color:"#6B7280" }}>40+ BPO companies and founders in early access · India</span>
        </div>

        {/* Pipeline widget */}
        <div style={{ position:"relative", zIndex:1, maxWidth:440, width:"100%" }}>
          <div style={{ background:"rgba(13,15,26,0.92)", border:"1px solid rgba(79,70,229,0.3)", borderRadius:16, padding:"20px 22px", backdropFilter:"blur(12px)" }}>
            <div style={{ fontSize:13, fontWeight:600, color:"#F9FAFB", marginBottom:4 }}>Hiring pipeline — Senior BPO Analyst</div>
            <div style={{ fontSize:11, color:"#818CF8", marginBottom:14 }}>AI ranked 400 CVs · Each candidate on their preferred channel</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {CANDIDATES.map((c,i) => (
                <div key={c.name} style={{ background:c.hi?"rgba(79,70,229,0.1)":"rgba(255,255,255,0.03)", border:`1px solid ${c.hi?"rgba(129,140,248,0.35)":"rgba(255,255,255,0.07)"}`, borderRadius:10, padding:"10px 14px", display:"flex", alignItems:"center", gap:10, opacity:1, animation:`zfadein 0.4s ease ${i*100}ms both` }}>
                  <div style={{ width:32, height:32, borderRadius:"50%", background:"rgba(79,70,229,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:600, color:"#C7D2FE", flexShrink:0 }}>{c.name.split(" ").map(n=>n[0]).join("")}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:12, fontWeight:600, color:"#F9FAFB" }}>{c.name}</div>
                    <div style={{ fontSize:10, color:"#9CA3AF" }}>{c.role}</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:3 }}>
                    <div style={{ fontSize:11, fontWeight:700, color:c.hi?"#C7D2FE":"#6B7280" }}>{c.score}</div>
                    <div style={{ display:"flex", gap:4 }}>
                      <div style={{ fontSize:9, fontWeight:500, color:SC[c.stage], background:`${SC[c.stage]}18`, padding:"2px 7px", borderRadius:20 }}>{c.stage}</div>
                      <div style={{ fontSize:9, fontWeight:500, color:CC[c.ch], background:`${CC[c.ch]}18`, padding:"2px 7px", borderRadius:20 }}>{c.ch}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:14, paddingTop:12, borderTop:"1px solid rgba(255,255,255,0.06)", display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontSize:11, color:"#6B7280" }}>400 CVs → shortlist in 3 min</span>
              <span style={{ fontSize:11, fontWeight:500, color:"#4F46E5", background:"rgba(79,70,229,0.1)", padding:"4px 12px", borderRadius:20 }}>Unlock contacts →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ background:"#060A12", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"80px 32px" }}>
        <div style={{ maxWidth:960, margin:"0 auto" }}>
          <Tag color="#EF4444">THE PROBLEM</Tag>
          <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:700, letterSpacing:"-0.03em", textAlign:"center", margin:"0 0 12px", color:"#FFFFFF" }}>Monday morning. 400 CVs.</h2>
          <p style={{ fontSize:16, color:"#9CA3AF", textAlign:"center", maxWidth:540, margin:"0 auto 48px", lineHeight:1.6 }}>Every HR manager in India knows this feeling. Zorvis exists because this system is broken — and nobody fixed it for SMEs.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:14 }}>
            {PAIN.map(p => (
              <div key={p.h} style={{ background:`${p.c}06`, border:`1px solid ${p.c}22`, borderRadius:12, padding:"20px 22px", display:"flex", alignItems:"flex-start", gap:14, transition:"border-color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.borderColor=`${p.c}50`)}
                onMouseLeave={e=>(e.currentTarget.style.borderColor=`${p.c}22`)}
              >
                <span style={{ fontSize:22, flexShrink:0 }}>{p.icon}</span>
                <div><div style={{ fontSize:14, fontWeight:600, color:"#F9FAFB", marginBottom:5 }}>{p.h}</div><div style={{ fontSize:12, color:p.c, opacity:0.85, lineHeight:1.55 }}>{p.b}</div></div>
              </div>
            ))}
          </div>
          <p style={{ textAlign:"center", marginTop:40, fontSize:16 }}>
            <strong style={{ color:"#FFFFFF" }}>Zorvis solves all of this. </strong>
            <span style={{ color:"#818CF8" }}>One platform. Starting free.</span>
          </p>
        </div>
      </section>

      {/* ── THREE MODULES ── */}
      <section style={{ padding:"100px 32px", background:"#0C0E1A" }}>
        <div style={{ maxWidth:1040, margin:"0 auto" }}>
          <Tag>THE PLATFORM</Tag>
          <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:700, letterSpacing:"-0.03em", textAlign:"center", margin:"0 0 6px", color:"#FFFFFF" }}>Three intelligence layers.</h2>
          <h2 style={{ fontSize:"clamp(28px,4vw,48px)", fontWeight:700, letterSpacing:"-0.03em", textAlign:"center", margin:"0 0 14px", color:"#818CF8" }}>One unified system.</h2>
          <p style={{ fontSize:15, color:"#9CA3AF", textAlign:"center", maxWidth:520, margin:"0 auto 60px" }}>Hire the right people. Keep them engaged on their preferred channel. Make every people decision backed by compounding data.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20 }}>
            {MODULES.map(m => (
              <div key={m.name} style={{ background:"#13152A", border:`1px solid ${m.accentColor}28`, borderRadius:16, padding:"30px 26px", position:"relative", overflow:"hidden", transition:"border-color 0.2s,transform 0.2s" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.borderColor=`${m.accentColor}55`; (e.currentTarget as HTMLDivElement).style.transform="translateY(-3px)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.borderColor=`${m.accentColor}28`; (e.currentTarget as HTMLDivElement).style.transform="translateY(0)"; }}
              >
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:m.accentColor, opacity:0.6 }}/>
                <div style={{ fontSize:52, fontWeight:800, letterSpacing:"-0.04em", color:m.accentColor, opacity:0.1, lineHeight:1, position:"absolute", top:18, right:22, userSelect:"none" }}>{m.num}</div>
                <div style={{ display:"inline-block", background:`${m.accentColor}14`, border:`1px solid ${m.accentColor}28`, borderRadius:100, padding:"3px 12px", fontSize:11, fontWeight:600, color:m.accentColor, letterSpacing:"0.04em", marginBottom:14 }}>{m.tagline}</div>
                <h3 style={{ fontSize:24, fontWeight:700, color:"#FFFFFF", margin:"0 0 10px" }}>{m.name}</h3>
                <p style={{ fontSize:13, color:"#9CA3AF", lineHeight:1.65, marginBottom:20 }}>{m.desc}</p>
                <ul style={{ listStyle:"none", padding:0, margin:"0 0 20px", display:"flex", flexDirection:"column", gap:7 }}>
                  {m.features.slice(0,4).map(f=>(
                    <li key={f} style={{ display:"flex", alignItems:"flex-start", gap:9, fontSize:13, color:"#D1D5DB" }}>
                      <div style={{ width:5, height:5, borderRadius:"50%", background:m.accentColor, flexShrink:0, marginTop:5 }}/>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${m.statusColor}14`, border:`1px solid ${m.statusColor}28`, borderRadius:100, padding:"4px 12px", fontSize:11, fontWeight:600, color:m.statusColor }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:m.statusColor }}/>{m.status}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:40 }}>
            <Link href="/product" style={{ fontSize:14, color:"#818CF8", textDecoration:"none", borderBottom:"1px solid rgba(129,140,248,0.3)", paddingBottom:2 }}>Explore the full platform →</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background:"#060A12", borderTop:"1px solid rgba(255,255,255,0.05)", borderBottom:"1px solid rgba(255,255,255,0.05)", padding:"52px 32px" }}>
        <div style={{ maxWidth:880, margin:"0 auto", display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:32, textAlign:"center" }}>
          {[{t:3,s:" min",l:"to rank 400 CVs"},{t:0,p:"₹",l:"to start — free forever"},{t:1,l:"platform, job post to signed offer"}].map((s,i)=>(
            <div key={i}>
              <div style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:700, letterSpacing:"-0.03em", color:"#FFFFFF", lineHeight:1 }}>{s.p??""}<Counter target={s.t} suffix={s.s??""}/></div>
              <div style={{ fontSize:13, color:"#9CA3AF", marginTop:6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section style={{ padding:"80px 32px" }}>
        <div style={{ maxWidth:880, margin:"0 auto" }}>
          <Tag>MARKETS</Tag>
          <h2 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:700, letterSpacing:"-0.02em", textAlign:"center", margin:"0 0 48px", color:"#FFFFFF" }}>Built for India. Ready for UAE.</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))", gap:20 }}>
            {[
              { flag:"🇮🇳", country:"India", headline:"Built for BPOs, staffing agencies, and SMEs hiring at scale.", items:["Naukri + LinkedIn integration","Assessments on any channel","₹9,999/mo · Free tier always available"], status:"Phase 1 · Live", sc:"#10B981", ac:"#4F46E5" },
              { flag:"🇦🇪", country:"UAE", headline:"The only platform that solves pre-arrival screening and WPS compliance in one system.", items:["Emirates ID OCR · WPS SIF auto-generated","Bilingual Arabic / English offers","AED 549/mo · Visa expiry alerts"], status:"Phase 1 · Month 7", sc:"#818CF8", ac:"#818CF8" },
            ].map(m=>(
              <div key={m.country} style={{ background:"#13152A", border:`1px solid ${m.ac}22`, borderRadius:16, padding:"28px 26px" }}>
                <div style={{ fontSize:28, marginBottom:10 }}>{m.flag}</div>
                <div style={{ fontSize:20, fontWeight:700, color:"#FFFFFF", marginBottom:6 }}>{m.country}</div>
                <div style={{ fontSize:13, color:"#9CA3AF", lineHeight:1.6, marginBottom:16 }}>{m.headline}</div>
                <ul style={{ listStyle:"none", padding:0, margin:"0 0 18px", display:"flex", flexDirection:"column", gap:6 }}>
                  {m.items.map(item=>(
                    <li key={item} style={{ fontSize:13, color:"#D1D5DB", display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:4, height:4, borderRadius:"50%", background:m.ac, flexShrink:0 }}/>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:`${m.sc}14`, border:`1px solid ${m.sc}28`, borderRadius:100, padding:"4px 12px", fontSize:11, fontWeight:600, color:m.sc }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:m.sc }}/>{m.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ background:"#060A12", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"80px 32px" }}>
        <div style={{ maxWidth:660, margin:"0 auto", textAlign:"center" }}>
          <Tag>EARLY CUSTOMER</Tag>
          <div style={{ background:"#13152A", border:"1px solid rgba(129,140,248,0.18)", borderRadius:16, padding:"40px 36px" }}>
            <div style={{ fontSize:44, color:"#4F46E5", opacity:0.4, lineHeight:1, marginBottom:16 }}>"</div>
            <p style={{ fontSize:18, fontWeight:500, color:"#F9FAFB", lineHeight:1.65, margin:"0 0 28px", fontStyle:"italic" }}>
              We used to spend 6 hours screening CVs every Monday. Zorvis does it in under 20 minutes. My shortlist quality improved and I can defend every decision with a score.
            </p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:"50%", background:"rgba(79,70,229,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, color:"#C7D2FE" }}>PS</div>
              <div style={{ textAlign:"left" }}>
                <div style={{ fontSize:14, fontWeight:600, color:"#FFFFFF" }}>Priya Sharma</div>
                <div style={{ fontSize:12, color:"#9CA3AF" }}>HR Manager · BPO Company · Bangalore · 200 employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:"100px 32px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:300, background:"radial-gradient(ellipse,rgba(79,70,229,0.1) 0%,transparent 70%)", pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <div style={{ display:"flex", justifyContent:"center", marginBottom:24 }}><ZMark size={52}/></div>
          <h2 style={{ fontSize:"clamp(26px,4vw,44px)", fontWeight:700, letterSpacing:"-0.02em", color:"#FFFFFF", margin:"0 0 8px" }}>The force behind your</h2>
          <h2 style={{ fontSize:"clamp(26px,4vw,44px)", fontWeight:700, letterSpacing:"-0.02em", color:"#818CF8", margin:"0 0 18px" }}>people vision.</h2>
          <p style={{ fontSize:15, color:"#6B7280", marginBottom:40, maxWidth:460, margin:"0 auto 40px", lineHeight:1.6 }}>{BRAND.meaning}</p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/waitlist" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:15, fontWeight:600, padding:"14px 32px", borderRadius:10, textDecoration:"none" }}>Start free today</Link>
            <Link href="/pricing" style={{ border:"1px solid rgba(129,140,248,0.3)", color:"#818CF8", fontSize:15, fontWeight:500, padding:"14px 32px", borderRadius:10, textDecoration:"none" }}>See pricing</Link>
          </div>
          <p style={{ fontSize:12, color:"#4B5563", marginTop:18 }}>{BRAND.free}</p>
        </div>
      </section>

      <Footer/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        @keyframes zpulse{0%,100%{opacity:1}50%{opacity:0.4}}
        @keyframes zfadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </div>
  );
}

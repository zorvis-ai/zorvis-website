"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Nav, ZMark, Footer, Tag } from "@/components/Nav";
import { MODULES, CHANNELS, BRAND } from "@/components/brand";

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; obs.disconnect();
      let n = 0; const step = Math.ceil(target / 50);
      const t = setInterval(() => { n += step; if (n >= target) { setVal(target); clearInterval(t); } else setVal(n); }, 24);
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

const PIPELINE_CANDIDATES = [
  { name: "Kavya Reddy",  role: "BPO Analyst",  score: "84–90", stage: "AI Ranked",  ch: "Email",     hi: true  },
  { name: "Arjun Mehta",  role: "BPO Senior",   score: "78–84", stage: "Test Sent",  ch: "WhatsApp",  hi: false },
  { name: "Priya Singh",  role: "Team Lead",    score: "72–78", stage: "Offer Sent", ch: "SMS",       hi: false },
  { name: "Divya Nair",   role: "Sr. Agent",    score: "82–88", stage: "Hired ✓",   ch: "Email",     hi: true  },
];
const SC: Record<string,string> = { "AI Ranked":"#4F46E5","Test Sent":"#D97706","Offer Sent":"#7C3AED","Hired ✓":"#059669" };
const CC: Record<string,string> = { "Email":"#6B7280","WhatsApp":"#059669","SMS":"#D97706" };

const PAIN = [
  { icon:"📋", h:"400 CVs every Monday",         b:"6 hours of reading. No score. No consistency. No record of why you shortlisted anyone.",     c:"#DC2626" },
  { icon:"💸", h:"Testing costs ₹2,000/candidate", b:"Separate login. Separate invoice. Completely disconnected from your pipeline.",              c:"#D97706" },
  { icon:"📧", h:"Offers lost in email threads",  b:"7 threads to track one offer. No timestamp. No signature. No legal record.",                 c:"#7C3AED" },
  { icon:"🗂️", h:"5 job boards, 5 inboxes",       b:"Best candidates ghost because nobody followed up. You never even know.",                     c:"#DC2626" },
  { icon:"📉", h:"Hire fails at 90 days",          b:"No one connects the failure back to the aptitude score at hiring. That data never existed.", c:"#D97706" },
  { icon:"🏢", h:"Enterprise tools: ₹40L/yr",     b:"5-month implementation. Built for 5,000-person companies. You have 50.",                     c:"#7C3AED" },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh", overflowX: "hidden" }}>
      <Nav/>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 120, paddingBottom: 80, paddingLeft: 32, paddingRight: 32,
        background: "linear-gradient(180deg, #F7F8FC 0%, #FFFFFF 100%)",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "linear-gradient(#E2E6F0 1px,transparent 1px),linear-gradient(90deg,#E2E6F0 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)",
          opacity: 0.4,
        }}/>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
          {/* Eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 100, padding: "5px 14px", marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669", animation: "zpulse 2s infinite" }}/>
            <span style={{ fontSize: 12, color: "#4F46E5", fontWeight: 600 }}>People Intelligence Platform · India & UAE · Early Access Open</span>
          </div>

          <h1 style={{ fontSize: "clamp(40px,7vw,80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, margin: "0 0 8px", color: "#0D1117" }}>
            Hire. Manage. Grow.
          </h1>
          <h1 style={{ fontSize: "clamp(40px,7vw,80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.08, margin: "0 0 24px", color: "#4F46E5" }}>
            All powered by AI.
          </h1>

          <p style={{ fontSize: "clamp(15px,2vw,18px)", color: "#374151", maxWidth: 560, lineHeight: 1.65, margin: "0 auto 16px" }}>
            {BRAND.pitch} One platform. Every channel your people already use.
          </p>

          {/* Channel strip */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 6 }}>
            {CHANNELS.map(c => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 5, background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 100, padding: "5px 12px", fontSize: 11, color: "#374151", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <span>{c.icon}</span>{c.label}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 36 }}>Candidate chooses their channel. Employee chooses theirs. One unified view for HR.</p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 44 }}>
            <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 15, fontWeight: 600, padding: "13px 28px", borderRadius: 9, textDecoration: "none", boxShadow: "0 4px 14px rgba(79,70,229,0.3)", transition: "all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.background="#4338CA"; e.currentTarget.style.boxShadow="0 4px 20px rgba(79,70,229,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="#4F46E5"; e.currentTarget.style.boxShadow="0 4px 14px rgba(79,70,229,0.3)"; }}
            >Start free — no card required</Link>
            <Link href="/use-cases" style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", color: "#374151", fontSize: 15, fontWeight: 500, padding: "13px 28px", borderRadius: 9, textDecoration: "none", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", transition: "border-color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor="#C7D2FE")}
              onMouseLeave={e => (e.currentTarget.style.borderColor="#E2E6F0")}
            >See use cases →</Link>
          </div>

          {/* Social proof */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 56 }}>
            <div style={{ display: "flex" }}>
              {["KR","AM","PS","RK"].map((init,n) => (
                <div key={init} style={{ width: 28, height: 28, borderRadius: "50%", background: `hsl(${230+n*20},60%,${55+n*5}%)`, border: "2px solid #FFFFFF", marginLeft: n>0 ? -8 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#FFFFFF" }}>{init}</div>
              ))}
            </div>
            <span style={{ fontSize: 12, color: "#6B7280" }}>40+ BPO companies and founders in early access · India</span>
          </div>
        </div>

        {/* Pipeline widget */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 460, margin: "0 auto" }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 16, padding: "20px 22px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#0D1117", marginBottom: 3 }}>Hiring pipeline — Senior BPO Analyst</div>
            <div style={{ fontSize: 11, color: "#4F46E5", marginBottom: 14 }}>AI ranked 400 CVs · Each on their preferred channel</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PIPELINE_CANDIDATES.map(c => (
                <div key={c.name} style={{ background: c.hi ? "#F7F8FF" : "#FAFAFA", border: `1px solid ${c.hi ? "#C7D2FE" : "#E2E6F0"}`, borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: c.hi ? "#EEF2FF" : "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: c.hi ? "#4F46E5" : "#6B7280", flexShrink: 0 }}>
                    {c.name.split(" ").map(n=>n[0]).join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#0D1117" }}>{c.name}</div>
                    <div style={{ fontSize: 10, color: "#6B7280" }}>{c.role}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: c.hi ? "#4F46E5" : "#9CA3AF" }}>{c.score}</div>
                    <div style={{ display: "flex", gap: 4 }}>
                      <div style={{ fontSize: 9, fontWeight: 600, color: SC[c.stage], background: `${SC[c.stage]}14`, padding: "2px 7px", borderRadius: 20 }}>{c.stage}</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: CC[c.ch], background: `${CC[c.ch]}14`, padding: "2px 7px", borderRadius: 20 }}>{c.ch}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #E2E6F0", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: "#6B7280" }}>400 CVs → shortlist in 3 min</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#4F46E5", background: "#EEF2FF", padding: "3px 10px", borderRadius: 20 }}>Unlock contacts →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2E6F0", padding: "80px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Tag color="#DC2626">THE PROBLEM</Tag>
          <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", textAlign: "center", margin: "0 0 12px", color: "#0D1117" }}>Monday morning. 400 CVs.</h2>
          <p style={{ fontSize: 16, color: "#6B7280", textAlign: "center", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.6 }}>
            Every HR manager in India knows this feeling. Zorvis exists because this system is broken — and nobody fixed it for SMEs.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
            {PAIN.map(p => (
              <div key={p.h} style={{ background: "#FAFAFA", border: `1px solid #E2E6F0`, borderRadius: 12, padding: "20px 22px", display: "flex", alignItems: "flex-start", gap: 14, transition: "border-color 0.15s, box-shadow 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor=`${p.c}30`; (e.currentTarget as HTMLDivElement).style.boxShadow="0 4px 12px rgba(0,0,0,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor="#E2E6F0"; (e.currentTarget as HTMLDivElement).style.boxShadow="none"; }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 5 }}>{p.h}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.55 }}>{p.b}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 40, fontSize: 16 }}>
            <strong style={{ color: "#0D1117" }}>Zorvis solves all of this. </strong>
            <span style={{ color: "#4F46E5" }}>One platform. Starting free.</span>
          </p>
        </div>
      </section>

      {/* ── THREE MODULES ── */}
      <section style={{ padding: "80px 32px", background: "#F7F8FC" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <Tag>THE PLATFORM</Tag>
          <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", textAlign: "center", margin: "0 0 6px", color: "#0D1117" }}>Three intelligence layers.</h2>
          <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", textAlign: "center", margin: "0 0 14px", color: "#4F46E5" }}>One unified system.</h2>
          <p style={{ fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.6 }}>Hire the right people. Keep them engaged. Make every decision backed by data.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
            {MODULES.map(m => (
              <div key={m.name} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "28px 24px", position: "relative", overflow: "hidden", transition: "box-shadow 0.2s, border-color 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow="0 8px 24px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLDivElement).style.borderColor=`${m.accentColor}40`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow="0 1px 4px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor="#E2E6F0"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: m.accentColor }}/>
                <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.04em", color: m.accentColor, opacity: 0.08, lineHeight: 1, position: "absolute", top: 14, right: 20, userSelect: "none" }}>{m.num}</div>
                <div style={{ display: "inline-block", background: `${m.accentColor}12`, border: `1px solid ${m.accentColor}25`, borderRadius: 100, padding: "3px 11px", fontSize: 11, fontWeight: 600, color: m.accentColor, letterSpacing: "0.04em", marginBottom: 12 }}>{m.tagline}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#0D1117", margin: "0 0 8px" }}>{m.name}</h3>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.65, marginBottom: 18 }}>{m.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexDirection: "column", gap: 6 }}>
                  {m.features.slice(0,4).map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#374151" }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: m.accentColor, flexShrink: 0, marginTop: 5 }}/>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: `${m.statusColor}12`, border: `1px solid ${m.statusColor}25`, borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: m.statusColor }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: m.statusColor }}/>{m.status}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/product" style={{ fontSize: 14, color: "#4F46E5", textDecoration: "none", fontWeight: 500 }}>Explore the full platform →</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2E6F0", borderBottom: "1px solid #E2E6F0", padding: "52px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32, textAlign: "center" }}>
          {[{t:3,s:" min",l:"to rank 400 CVs"},{t:0,p:"₹",l:"to start — free forever"},{t:1,l:"platform, job post to signed offer"}].map((s,i) => (
            <div key={i}>
              <div style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#4F46E5", lineHeight: 1 }}>{s.p??""}<Counter target={s.t} suffix={s.s??""}/></div>
              <div style={{ fontSize: 13, color: "#6B7280", marginTop: 5 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section style={{ padding: "80px 32px", background: "#F7F8FC" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Tag>MARKETS</Tag>
          <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 48px", color: "#0D1117" }}>Built for India. Ready for UAE.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 18 }}>
            {[
              { flag:"🇮🇳", country:"India", headline:"Built for BPOs, staffing agencies, and SMEs hiring at scale.", items:["Naukri + LinkedIn integration","Assessments on any channel","₹9,999/mo · Free tier always available"], status:"Phase 1 · Live", sc:"#059669", bc:"#DCFCE7", tc:"#059669" },
              { flag:"🇦🇪", country:"UAE", headline:"The only platform that solves pre-arrival screening and WPS compliance in one system.", items:["Emirates ID OCR · WPS SIF auto-generated","Bilingual Arabic / English offers","AED 549/mo · Visa expiry alerts"], status:"Phase 1 · Month 7", sc:"#7C3AED", bc:"#F5F3FF", tc:"#7C3AED" },
            ].map(m => (
              <div key={m.country} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "26px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{m.flag}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#0D1117", marginBottom: 6 }}>{m.country}</div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, marginBottom: 16 }}>{m.headline}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                  {m.items.map(item => (
                    <li key={item} style={{ fontSize: 13, color: "#374151", display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: m.sc, flexShrink: 0 }}/>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: m.bc, borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 600, color: m.tc }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: m.sc }}/>{m.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E2E6F0", padding: "80px 32px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <Tag>EARLY CUSTOMER</Tag>
          <div style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 16, padding: "36px 32px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 40, color: "#4F46E5", opacity: 0.3, lineHeight: 1, marginBottom: 14 }}>"</div>
            <p style={{ fontSize: 18, fontWeight: 500, color: "#0D1117", lineHeight: 1.65, margin: "0 0 24px", fontStyle: "italic" }}>
              We used to spend 6 hours screening CVs every Monday. Zorvis does it in under 20 minutes. My shortlist quality improved and I can defend every decision with a score.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#4F46E5" }}>PS</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117" }}>Priya Sharma</div>
                <div style={{ fontSize: 12, color: "#6B7280" }}>HR Manager · BPO Company · Bangalore · 200 employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0D1117", padding: "90px 32px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <ZMark size={48} dark/>
        </div>
        <h2 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 8px" }}>The force behind your</h2>
        <h2 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#818CF8", margin: "0 0 18px" }}>people vision.</h2>
        <p style={{ fontSize: 15, color: "#6B7280", marginBottom: 36, maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.6 }}>{BRAND.meaning}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 15, fontWeight: 600, padding: "13px 28px", borderRadius: 9, textDecoration: "none", boxShadow: "0 4px 14px rgba(79,70,229,0.4)" }}>Start free today</Link>
          <Link href="/pricing" style={{ background: "transparent", border: "1px solid #374151", color: "#9CA3AF", fontSize: 15, fontWeight: 500, padding: "13px 28px", borderRadius: 9, textDecoration: "none" }}>See pricing</Link>
        </div>
        <p style={{ fontSize: 12, color: "#4B5563", marginTop: 16 }}>{BRAND.free}</p>
      </section>

      <Footer/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        @keyframes zpulse{0%,100%{opacity:1}50%{opacity:0.4}}
      `}</style>
    </div>
  );
}

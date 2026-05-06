"use client";
import { useState } from "react";
import Link from "next/link";
import { ZMark } from "@/components/Nav";
import { BRAND } from "@/components/brand";

async function submit(data: { email:string; company_name:string; company_size:string; country:string }) {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) throw new Error("env vars missing");
  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method:"POST",
    headers:{ "Content-Type":"application/json", apikey:anon, Authorization:`Bearer ${anon}`, Prefer:"return=minimal" },
    body: JSON.stringify({ ...data, source:"zorvis.ai/waitlist" }),
  });
  if (!res.ok) {
    const msg = await res.text();
    if (msg.includes("duplicate") || msg.includes("unique")) return "duplicate";
    throw new Error(msg);
  }
  return "ok";
}

const SIZES    = ["1–10","11–50","51–200","201–500","500+"];
const COUNTRIES= ["India","UAE","Saudi Arabia","Other GCC","Other"];
const PERKS    = [
  { icon:"🚀", h:"First cohort access",    b:"You're in the first group when we launch. We onboard every customer personally on a 30-min call." },
  { icon:"🔒", h:"Founder pricing locked", b:"Early customers get a rate that never increases — even as we add modules." },
  { icon:"🎯", h:"Shape the product",      b:"We interview every early customer. Your real hiring problems become our next feature." },
  { icon:"⚡", h:"White-glove setup",       b:"We set up your first job posting with you. No ticket queue. No documentation maze." },
];

export default function WaitlistPage() {
  const [form, setForm] = useState({ email:"", company_name:"", company_size:"", country:"" });
  const [state, setState] = useState<"idle"|"loading"|"success"|"duplicate"|"error">("idle");
  const [err, setErr] = useState("");
  const set = (k:string,v:string) => setForm(p=>({...p,[k]:v}));

  const go = async () => {
    const { email, company_name, company_size, country } = form;
    if (!email||!company_name||!company_size||!country) { setErr("Please fill in all fields."); return; }
    if (!email.includes("@")) { setErr("Please enter a valid email."); return; }
    setState("loading"); setErr("");
    try {
      const r = await submit({ email, company_name, company_size, country });
      setState(r==="duplicate"?"duplicate":"success");
    } catch { setState("error"); setErr("Something went wrong. Email founder@zorvis.ai directly."); }
  };

  const inp: React.CSSProperties = { width:"100%", background:"#0C0E1A", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, padding:"12px 14px", fontSize:14, color:"#F9FAFB", fontFamily:"'DM Sans',sans-serif", outline:"none", boxSizing:"border-box", transition:"border-color 0.2s" };
  const done = state==="success"||state==="duplicate";

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#0C0E1A", color:"#F9FAFB", minHeight:"100vh" }}>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(12,14,26,0.97)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.06)", padding:"0 32px", height:56, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:8, textDecoration:"none" }}>
          <ZMark size={22}/><span style={{ fontSize:16, fontWeight:700, color:"#FFFFFF" }}>orvis</span>
        </Link>
        <Link href="/pricing" style={{ fontSize:12, color:"#818CF8", textDecoration:"none" }}>See pricing →</Link>
      </nav>

      <div style={{ maxWidth:1020, margin:"0 auto", padding:"90px 32px 80px", display:"flex", gap:56, flexWrap:"wrap", alignItems:"flex-start" }}>

        {/* LEFT */}
        <div style={{ flex:"1 1 340px", paddingTop:20 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.25)", borderRadius:100, padding:"4px 14px", marginBottom:24 }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:"#10B981", animation:"zpulse 2s infinite" }}/>
            <span style={{ fontSize:11, color:"#10B981", fontWeight:500 }}>EARLY ACCESS · INDIA</span>
          </div>
          <h1 style={{ fontSize:"clamp(28px,5vw,48px)", fontWeight:700, letterSpacing:"-0.03em", lineHeight:1.1, margin:"0 0 16px" }}>
            Be first.<br/><span style={{ color:"#818CF8" }}>Shape the product.</span><br/>Lock in founder pricing.
          </h1>
          <p style={{ fontSize:14, color:"#9CA3AF", lineHeight:1.7, marginBottom:32 }}>
            We're onboarding a first cohort of HR managers and founders across India. Limited spots. We onboard you personally — no ticket queue.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:16, marginBottom:32 }}>
            {PERKS.map(p=>(
              <div key={p.h} style={{ display:"flex", gap:14 }}>
                <span style={{ fontSize:22, flexShrink:0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize:14, fontWeight:600, color:"#FFFFFF", marginBottom:2 }}>{p.h}</div>
                  <div style={{ fontSize:12, color:"#9CA3AF", lineHeight:1.55 }}>{p.b}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background:"#13152A", borderRadius:12, border:"1px solid rgba(79,70,229,0.18)", padding:"18px 20px" }}>
            <p style={{ fontSize:13, fontStyle:"italic", color:"#D1D5DB", lineHeight:1.65, margin:"0 0 10px" }}>
              "6 hours of CV reading every Monday. Zorvis does it in 20 minutes. My shortlist quality is better and I can defend every decision with a score."
            </p>
            <div style={{ fontSize:11, color:"#818CF8" }}>Priya Sharma — HR Manager, BPO, Bangalore</div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex:"1 1 360px" }}>
          <div style={{ background:"#13152A", border:"1px solid rgba(79,70,229,0.22)", borderRadius:16, padding:"32px 28px" }}>
            {done ? (
              <div style={{ textAlign:"center", padding:"16px 0" }}>
                <div style={{ fontSize:52, marginBottom:16 }}>{state==="duplicate"?"👋":"🎉"}</div>
                <h2 style={{ fontSize:22, fontWeight:700, margin:"0 0 12px" }}>{state==="duplicate"?"You're already on the list.":"You're on the list."}</h2>
                <p style={{ fontSize:14, color:"#9CA3AF", lineHeight:1.65, marginBottom:28 }}>
                  {state==="duplicate" ? "We already have your email. Expect a message within 48 hours." : "We'll reach out personally within 48 hours. Check your inbox."}
                </p>
                <Link href="/" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:13, fontWeight:600, padding:"10px 24px", borderRadius:8, textDecoration:"none" }}>Back to home</Link>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize:19, fontWeight:700, margin:"0 0 5px" }}>Join the waitlist</h2>
                <p style={{ fontSize:13, color:"#9CA3AF", marginBottom:24 }}>4 fields. 30 seconds. We respond personally within 48 hours.</p>
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  <div>
                    <label style={{ fontSize:12, color:"#9CA3AF", display:"block", marginBottom:5 }}>Work email *</label>
                    <input style={inp} type="email" placeholder="priya@company.com" value={form.email} onChange={e=>set("email",e.target.value)} onFocus={e=>(e.target.style.borderColor="rgba(129,140,248,0.45)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")}/>
                  </div>
                  <div>
                    <label style={{ fontSize:12, color:"#9CA3AF", display:"block", marginBottom:5 }}>Company name *</label>
                    <input style={inp} placeholder="Acme BPO Pvt Ltd" value={form.company_name} onChange={e=>set("company_name",e.target.value)} onFocus={e=>(e.target.style.borderColor="rgba(129,140,248,0.45)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")}/>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                    <div>
                      <label style={{ fontSize:12, color:"#9CA3AF", display:"block", marginBottom:5 }}>Team size *</label>
                      <select style={{ ...inp, cursor:"pointer" }} value={form.company_size} onChange={e=>set("company_size",e.target.value)} onFocus={e=>(e.target.style.borderColor="rgba(129,140,248,0.45)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")}>
                        <option value="">Select</option>
                        {SIZES.map(s=><option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize:12, color:"#9CA3AF", display:"block", marginBottom:5 }}>Country *</label>
                      <select style={{ ...inp, cursor:"pointer" }} value={form.country} onChange={e=>set("country",e.target.value)} onFocus={e=>(e.target.style.borderColor="rgba(129,140,248,0.45)")} onBlur={e=>(e.target.style.borderColor="rgba(255,255,255,0.1)")}>
                        <option value="">Select</option>
                        {COUNTRIES.map(c=><option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  {err && <div style={{ background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.25)", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#EF4444" }}>{err}</div>}
                  <button onClick={go} disabled={state==="loading"} style={{ background:state==="loading"?"#3730A3":"#4F46E5", color:"#FFFFFF", fontSize:14, fontWeight:600, padding:"13px", borderRadius:8, border:"none", cursor:state==="loading"?"not-allowed":"pointer", fontFamily:"'DM Sans',sans-serif", width:"100%" }}>
                    {state==="loading"?"Joining...":"Join the waitlist →"}
                  </button>
                  <p style={{ fontSize:11, color:"#6B7280", textAlign:"center", margin:0 }}>No spam. No credit card. We respond in 48 hours.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        select option{background:#13152A;color:#F9FAFB}
        @keyframes zpulse{0%,100%{opacity:1}50%{opacity:0.4}}
      `}</style>
    </div>
  );
}

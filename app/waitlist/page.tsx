"use client";
import { useState } from "react";
import Link from "next/link";
import { ZMark } from "@/components/Nav";

// ── Matches your existing Supabase table exactly ──────────────────────────────
// Columns: email (unique), company_name, company_size, country, source, created_at
// Keys: NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY from Doppler
async function submitWaitlist(data: { email: string; company_name: string; company_size: string; country: string }) {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) throw new Error("Supabase env vars not found — check Doppler");
  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": anon,
      "Authorization": `Bearer ${anon}`,
      "Prefer": "return=minimal",
    },
    body: JSON.stringify({ ...data, source: "zorvis.ai/waitlist" }),
  });
  if (!res.ok) {
    const txt = await res.text();
    if (txt.includes("duplicate") || txt.includes("unique") || txt.includes("23505")) return "duplicate";
    throw new Error(txt);
  }
  return "ok";
}

const SIZES    = ["1–10","11–50","51–200","201–500","500+"];
const COUNTRIES = ["India","UAE","Saudi Arabia","Other GCC","Other"];
const PERKS = [
  { icon: "🚀", h: "First cohort access",    b: "You're in the first group. We onboard every customer personally on a 30-minute call." },
  { icon: "🔒", h: "Founder pricing locked", b: "Early customers lock in a rate that never increases — even as we add modules." },
  { icon: "🎯", h: "Shape the product",      b: "We interview every early customer. Your real problems become our next feature." },
  { icon: "⚡", h: "White-glove setup",       b: "We set up your first job posting together. No ticket queue." },
];

export default function WaitlistPage() {
  const [form, setForm] = useState({ email: "", company_name: "", company_size: "", country: "" });
  const [state, setState] = useState<"idle"|"loading"|"success"|"duplicate"|"error">("idle");
  const [err, setErr] = useState("");
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const go = async () => {
    const { email, company_name, company_size, country } = form;
    if (!email || !company_name || !company_size || !country) { setErr("Please fill in all fields."); return; }
    if (!email.includes("@")) { setErr("Please enter a valid email address."); return; }
    setState("loading"); setErr("");
    try {
      const r = await submitWaitlist({ email, company_name, company_size, country });
      setState(r === "duplicate" ? "duplicate" : "success");
    } catch (e: any) {
      console.error(e);
      setState("error");
      setErr("Something went wrong. Please email founder@zorvis.ai directly.");
    }
  };

  const inp: React.CSSProperties = {
    width: "100%", background: "#FFFFFF",
    border: "1px solid #E2E6F0", borderRadius: 8,
    padding: "11px 14px", fontSize: 14, color: "#0D1117",
    fontFamily: "'DM Sans',sans-serif", outline: "none",
    boxSizing: "border-box", transition: "border-color 0.15s, box-shadow 0.15s",
  };

  const done = state === "success" || state === "duplicate";

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#F7F8FC", color: "#0D1117", minHeight: "100vh" }}>

      {/* Minimal nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#FFFFFF", borderBottom: "1px solid #E2E6F0", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <ZMark size={22}/><span style={{ fontSize: 16, fontWeight: 700, color: "#0D1117" }}>orvis</span>
        </Link>
        <Link href="/pricing" style={{ fontSize: 12, color: "#4F46E5", textDecoration: "none", fontWeight: 500 }}>See pricing →</Link>
      </nav>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "88px 24px 72px", display: "flex", gap: 56, flexWrap: "wrap", alignItems: "flex-start" }}>

        {/* LEFT */}
        <div style={{ flex: "1 1 320px", paddingTop: 20 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: 100, padding: "4px 14px", marginBottom: 24 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669", animation: "zpulse 2s infinite" }}/>
            <span style={{ fontSize: 11, color: "#059669", fontWeight: 600 }}>EARLY ACCESS · INDIA</span>
          </div>

          <h1 style={{ fontSize: "clamp(26px,5vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 14px", color: "#0D1117" }}>
            Be first.<br/>
            <span style={{ color: "#4F46E5" }}>Shape the product.</span><br/>
            Lock in founder pricing.
          </h1>
          <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, marginBottom: 32 }}>
            We're onboarding a first cohort of HR managers and founders across India. Limited spots. We onboard you personally — no ticket queue.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {PERKS.map(p => (
              <div key={p.h} style={{ display: "flex", gap: 14 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 2 }}>{p.h}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.55 }}>{p.b}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E2E6F0", padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <p style={{ fontSize: 13, fontStyle: "italic", color: "#374151", lineHeight: 1.65, margin: "0 0 10px" }}>
              "6 hours of CV reading every Monday. Zorvis does it in 20 minutes. My shortlist quality is better and I can defend every decision with a score."
            </p>
            <div style={{ fontSize: 11, color: "#4F46E5", fontWeight: 500 }}>Priya Sharma — HR Manager, BPO, Bangalore</div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div style={{ flex: "1 1 340px" }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 16, padding: "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            {done ? (
              <div style={{ textAlign: "center", padding: "12px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>{state === "duplicate" ? "👋" : "🎉"}</div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D1117", margin: "0 0 10px" }}>
                  {state === "duplicate" ? "You're already on the list." : "You're on the list."}
                </h2>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.65, marginBottom: 28 }}>
                  {state === "duplicate"
                    ? "We already have your email. Expect a personal message within 48 hours."
                    : "We'll reach out personally within 48 hours to set up your account."}
                </p>
                <Link href="/" style={{ display: "inline-block", background: "#4F46E5", color: "#FFFFFF", fontSize: 13, fontWeight: 600, padding: "10px 24px", borderRadius: 8, textDecoration: "none" }}>
                  Back to home
                </Link>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: 19, fontWeight: 700, color: "#0D1117", margin: "0 0 4px" }}>Join the waitlist</h2>
                <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 22 }}>4 fields. 30 seconds. We respond personally in 48 hours.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 500, color: "#374151", display: "block", marginBottom: 5 }}>Work email *</label>
                    <input style={inp} type="email" placeholder="priya@company.com" value={form.email}
                      onChange={e => set("email", e.target.value)}
                      onFocus={e => { e.target.style.borderColor="#4F46E5"; e.target.style.boxShadow="0 0 0 3px rgba(79,70,229,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor="#E2E6F0"; e.target.style.boxShadow="none"; }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 500, color: "#374151", display: "block", marginBottom: 5 }}>Company name *</label>
                    <input style={inp} placeholder="Acme BPO Pvt Ltd" value={form.company_name}
                      onChange={e => set("company_name", e.target.value)}
                      onFocus={e => { e.target.style.borderColor="#4F46E5"; e.target.style.boxShadow="0 0 0 3px rgba(79,70,229,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor="#E2E6F0"; e.target.style.boxShadow="none"; }}
                    />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 500, color: "#374151", display: "block", marginBottom: 5 }}>Team size *</label>
                      <select style={{ ...inp, cursor: "pointer" }} value={form.company_size}
                        onChange={e => set("company_size", e.target.value)}
                        onFocus={e => { e.target.style.borderColor="#4F46E5"; e.target.style.boxShadow="0 0 0 3px rgba(79,70,229,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor="#E2E6F0"; e.target.style.boxShadow="none"; }}
                      >
                        <option value="">Select</option>
                        {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 500, color: "#374151", display: "block", marginBottom: 5 }}>Country *</label>
                      <select style={{ ...inp, cursor: "pointer" }} value={form.country}
                        onChange={e => set("country", e.target.value)}
                        onFocus={e => { e.target.style.borderColor="#4F46E5"; e.target.style.boxShadow="0 0 0 3px rgba(79,70,229,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor="#E2E6F0"; e.target.style.boxShadow="none"; }}
                      >
                        <option value="">Select</option>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  {err && (
                    <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#DC2626" }}>
                      {err}
                    </div>
                  )}

                  <button onClick={go} disabled={state === "loading"} style={{
                    background: state === "loading" ? "#6366F1" : "#4F46E5", color: "#FFFFFF",
                    fontSize: 14, fontWeight: 600, padding: "13px", borderRadius: 8,
                    border: "none", cursor: state === "loading" ? "not-allowed" : "pointer",
                    fontFamily: "'DM Sans',sans-serif", width: "100%",
                    boxShadow: "0 4px 12px rgba(79,70,229,0.25)", transition: "background 0.15s",
                  }}>
                    {state === "loading" ? "Joining..." : "Join the waitlist →"}
                  </button>

                  <p style={{ fontSize: 11, color: "#9CA3AF", textAlign: "center", margin: 0 }}>
                    No spam. No credit card. We respond in 48 hours.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        select option { background: #FFFFFF; color: #0D1117; }
        @keyframes zpulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  );
}

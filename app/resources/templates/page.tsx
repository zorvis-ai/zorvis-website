"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, Tag } from "@/components/Nav";
import { ALL_TEMPLATES, TEMPLATE_CATEGORIES } from "./data";

const FORMAT_COLOR: Record<string, string> = {
  Word: "#4F46E5", Excel: "#059669", Email: "#D97706",
};

export default function TemplatesPage() {
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<typeof ALL_TEMPLATES[0] | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const filtered = ALL_TEMPLATES.filter(t => {
    const mc = cat === "All" || t.category === cat;
    const ms = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.tags.some(g => g.includes(search.toLowerCase()));
    return mc && ms;
  });

  const openTemplate = (t: typeof ALL_TEMPLATES[0]) => {
    setActive(t); setSubmitted(false); setCopied(false); setEmail(""); setEmailErr(false);
  };

  const handleSubmit = async () => {
    if (!email.includes("@")) { setEmailErr(true); return; }
    setEmailErr(false);
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (url && anon) {
      try {
        await fetch(`${url}/rest/v1/waitlist`, {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: anon, Authorization: `Bearer ${anon}`, Prefer: "return=minimal" },
          body: JSON.stringify({ email, company_name: "Template download", company_size: "Unknown", country: "Unknown", source: `template:${active?.slug}` }),
        });
      } catch {}
    }
    if (active) { navigator.clipboard.writeText(active.content).catch(() => {}); setCopied(true); }
    setSubmitted(true);
  };

  const handleCopy = () => {
    if (active) { navigator.clipboard.writeText(active.content).catch(() => {}); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: "110px 32px 56px", textAlign: "center", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>TEMPLATES</Tag>
        <h1 style={{ fontSize: "clamp(28px,5vw,50px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 14px", color: "#0D1117" }}>
          Free HR templates.<br /><span style={{ color: "#4F46E5" }}>Ready to use today.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 500, margin: "0 auto 28px", lineHeight: 1.6 }}>
          Offer letters, JDs, interview scorecards, onboarding checklists, and compliance templates. All free. No signup to browse.
        </p>
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search templates (e.g. offer letter, BPO scorecard, onboarding...)"
          style={{ maxWidth: 480, width: "100%", background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 8, padding: "11px 16px", fontSize: 14, color: "#0D1117", outline: "none", boxSizing: "border-box", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
          onFocus={e => (e.target.style.borderColor = "#4F46E5")}
          onBlur={e => (e.target.style.borderColor = "#E2E6F0")}
        />
      </section>

      {/* CATEGORY FILTERS */}
      <section style={{ padding: "0 32px 20px", maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {TEMPLATE_CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)}
              style={{ background: cat === c ? "#4F46E5" : "#F7F8FC", border: `1px solid ${cat === c ? "#4F46E5" : "#E2E6F0"}`, color: cat === c ? "#FFFFFF" : "#374151", borderRadius: 100, padding: "6px 14px", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s" }}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "0 32px 80px", maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 20 }}>{filtered.length} template{filtered.length !== 1 ? "s" : ""}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16 }}>
          {filtered.map(t => (
            <div key={t.slug}
              style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "20px", display: "flex", flexDirection: "column", cursor: "pointer", transition: "box-shadow 0.15s, border-color 0.15s" }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = "0 6px 20px rgba(0,0,0,0.07)"; d.style.borderColor = "#C7D2FE"; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = "none"; d.style.borderColor = "#E2E6F0"; }}
              onClick={() => openTemplate(t)}>
              {/* badges */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#4F46E5", background: "#EEF2FF", padding: "2px 8px", borderRadius: 20 }}>{t.category}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: FORMAT_COLOR[t.format], background: `${FORMAT_COLOR[t.format]}14`, padding: "2px 8px", borderRadius: 20 }}>{t.format}</div>
                </div>
                {t.popular && <div style={{ fontSize: 9, fontWeight: 700, color: "#D97706", background: "#FEF3C7", padding: "2px 7px", borderRadius: 20 }}>POPULAR</div>}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#0D1117", lineHeight: 1.4, marginBottom: 7, flex: 1 }}>{t.title}</div>
              <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5, marginBottom: 14 }}>{t.description}</div>
              <div style={{ fontSize: 11, color: "#4F46E5", background: "#EEF2FF", borderRadius: 6, padding: "6px 10px", lineHeight: 1.5, marginBottom: 14 }}>
                {t.preview}
              </div>
              <button onClick={() => openTemplate(t)}
                style={{ background: "#4F46E5", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", width: "100%", boxShadow: "0 2px 8px rgba(79,70,229,0.2)" }}>
                View & Copy Template →
              </button>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#9CA3AF" }}>
            No templates match. <button onClick={() => { setCat("All"); setSearch(""); }} style={{ background: "none", border: "none", color: "#4F46E5", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Clear filters</button>
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "56px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#0D1117", margin: "0 0 10px" }}>Want templates that auto-generate inside your hiring pipeline?</h2>
        <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 22, maxWidth: 440, margin: "0 auto 22px" }}>
          Zorvis AI auto-generates offer letters, JDs, and assessment invites directly in your pipeline — delivered on the candidate's preferred channel.
        </p>
        <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "11px 26px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>
          Get early access →
        </Link>
      </section>

      {/* MODAL */}
      {active && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          onClick={() => setActive(null)}>
          <div
            style={{ background: "#FFFFFF", borderRadius: 16, maxWidth: 720, width: "100%", maxHeight: "90vh", overflow: "auto", padding: "28px", boxShadow: "0 24px 64px rgba(0,0,0,0.22)" }}
            onClick={e => e.stopPropagation()}>
            {/* header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#4F46E5", background: "#EEF2FF", padding: "2px 8px", borderRadius: 20, display: "inline-block", marginBottom: 8 }}>{active.category}</div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0D1117", margin: 0, lineHeight: 1.3 }}>{active.title}</h2>
              </div>
              <button onClick={() => setActive(null)} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 13, color: "#374151", fontFamily: "'DM Sans',sans-serif", flexShrink: 0, marginLeft: 16 }}>Close ✕</button>
            </div>
            <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 16 }}>{active.description}</p>

            {/* content preview */}
            <div style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 10, padding: "16px 18px", marginBottom: 18, fontFamily: "'Courier New',monospace", fontSize: 12, lineHeight: 1.8, color: "#374151", whiteSpace: "pre-wrap", maxHeight: 300, overflow: "auto" }}>
              {active.content}
            </div>

            {/* email capture */}
            {!submitted ? (
              <div style={{ background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 12, padding: "20px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1117", marginBottom: 5 }}>Get this template emailed to you — free</div>
                <p style={{ fontSize: 12, color: "#6B7280", marginBottom: 14 }}>Enter your work email. We'll send a clean copy + let you know when new templates are added.</p>
                <div style={{ display: "flex", gap: 8, marginBottom: emailErr ? 6 : 12 }}>
                  <input
                    value={email} onChange={e => { setEmail(e.target.value); setEmailErr(false); }}
                    placeholder="you@company.com"
                    style={{ flex: 1, background: "#FFFFFF", border: `1px solid ${emailErr ? "#EF4444" : "#E2E6F0"}`, borderRadius: 8, padding: "9px 12px", fontSize: 13, color: "#0D1117", fontFamily: "'DM Sans',sans-serif", outline: "none" }}
                    onFocus={e => (e.target.style.borderColor = "#4F46E5")}
                    onBlur={e => (e.target.style.borderColor = emailErr ? "#EF4444" : "#E2E6F0")}
                    onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  />
                  <button onClick={handleSubmit}
                    style={{ background: "#4F46E5", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", whiteSpace: "nowrap", boxShadow: "0 3px 10px rgba(79,70,229,0.25)" }}>
                    Send to me
                  </button>
                </div>
                {emailErr && <div style={{ fontSize: 12, color: "#EF4444", marginBottom: 8 }}>Please enter a valid email address.</div>}
                <button onClick={handleCopy}
                  style={{ background: "none", border: "none", color: "#4F46E5", fontSize: 12, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", textDecoration: "underline" }}>
                  {copied ? "✓ Copied to clipboard!" : "Or just copy to clipboard →"}
                </button>
              </div>
            ) : (
              <div style={{ background: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: 12, padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#059669", marginBottom: 4 }}>Sent! Also copied to your clipboard.</div>
                <p style={{ fontSize: 12, color: "#374151", marginBottom: 10 }}>Check your inbox. We'll notify you when new templates are added.</p>
                <button onClick={handleCopy}
                  style={{ background: "none", border: "none", color: "#059669", fontSize: 12, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", textDecoration: "underline" }}>
                  Copy again
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

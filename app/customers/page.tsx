"use client";
import { Nav, Footer, Tag } from "@/components/Nav";
import Link from "next/link";

const TESTIMONIALS = [
  { quote: "We used to spend 6 hours screening CVs every Monday. Zorvis does it in under 20 minutes. The shortlist quality improved and I can defend every decision with a score — not just gut feel.", name: "Priya Sharma", role: "HR Manager", company: "BPO Company · Bangalore · 200 employees", initials: "PS", color: "#4F46E5", metrics: ["6 hrs → 20 min", "Shortlist quality ↑", "Score on every candidate"] },
  { quote: "The assessment flow is genius. Candidates don't drop off because there's nothing to install, no account to create. We set email as default and completion rate went from 40% to 83%.", name: "Rahul Verma", role: "Talent Acquisition", company: "Staffing Agency · Mumbai", initials: "RV", color: "#7C3AED", metrics: ["83% completion rate", "No app needed", "Any channel, any device"] },
  { quote: "As the only person handling HR, Zorvis gave me an enterprise pipeline without hiring an HR manager first. First good hire in 4 days. The free tier was enough to validate the whole thing.", name: "Ananya Singh", role: "Founder & CEO", company: "D2C Startup · Delhi", initials: "AS", color: "#059669", metrics: ["First hire in 4 days", "No HR team needed", "Started free"] },
];

const METRICS = [
  { n: "20 min", l: "to shortlist 400 CVs" },
  { n: "83%",   l: "assessment completion rate" },
  { n: "4 days", l: "average time to first hire" },
  { n: "60%",   l: "reduction in screening time" },
];

export default function CustomersPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <section style={{ padding: "120px 32px 64px", textAlign: "center", maxWidth: 720, margin: "0 auto", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>EARLY CUSTOMERS</Tag>
        <h1 style={{ fontSize: "clamp(30px,5vw,50px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 14px", color: "#0D1117" }}>
          Real HR managers.<br /><span style={{ color: "#4F46E5" }}>Real results.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.6 }}>We're in early access with BPO companies, staffing agencies, and founders across India.</p>
      </section>

      {/* METRICS */}
      <section style={{ padding: "0 32px 72px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
          {METRICS.map(m => (
            <div key={m.n} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 12, padding: "22px 18px", textAlign: "center" }}>
              <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", color: "#4F46E5", lineHeight: 1 }}>{m.n}</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 5 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "0 32px 88px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 44px", color: "#0D1117" }}>What early customers say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "24px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", transition: "box-shadow 0.15s, border-color 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = `${t.color}35`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E6F0"; }}
              >
                <div style={{ fontSize: 30, color: t.color, opacity: 0.25, lineHeight: 1, marginBottom: 10 }}>"</div>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 18, fontStyle: "italic" }}>{t.quote}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {t.metrics.map(m => (
                    <div key={m} style={{ background: `${t.color}10`, border: `1px solid ${t.color}22`, borderRadius: 100, padding: "3px 9px", fontSize: 11, fontWeight: 600, color: t.color }}>{m}</div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${t.color}14`, border: `1px solid ${t.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: t.color, flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#0D1117" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#6B7280" }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "36px 32px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "inline-block", background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#4F46E5", letterSpacing: "0.05em", marginBottom: 16 }}>CASE STUDY</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#0D1117" }}>How a 200-person BPO halved their time-to-shortlist</h3>
            <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, marginBottom: 22 }}>
              A Bangalore-based BPO was receiving 400+ CVs per job on Naukri. Their single HR manager spent 6–8 hours every Monday creating a shortlist. After Zorvis, the same shortlist — with score bands and AI summaries — took under 20 minutes. Assessments delivered via each candidate's preferred channel improved completion rates from 40% to over 80%.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
              {[{ b: "6–8 hrs", a: "20 min", l: "Shortlisting time" }, { b: "40%", a: "83%", l: "Assessment completion" }, { b: "Spreadsheet", a: "AI pipeline", l: "Candidate visibility" }].map(s => (
                <div key={s.l} style={{ textAlign: "center", background: "#F7F8FC", borderRadius: 8, padding: "12px 8px" }}>
                  <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>{s.l}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    <span style={{ fontSize: 12, color: "#DC2626", textDecoration: "line-through" }}>{s.b}</span>
                    <span style={{ fontSize: 10, color: "#9CA3AF" }}>→</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#059669" }}>{s.a}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 13, fontStyle: "italic", color: "#374151", borderLeft: "3px solid #4F46E5", paddingLeft: 14, lineHeight: 1.65 }}>
              "The AI score band isn't just fast — it's consistent. I can defend every shortlist decision now. Before, it was all gut feeling."
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "56px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 800, margin: "0 0 10px", color: "#0D1117" }}>Join them.</h2>
        <p style={{ color: "#6B7280", marginBottom: 24, fontSize: 14 }}>Free tier is permanent. No credit card needed.</p>
        <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "12px 28px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>Get early access →</Link>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

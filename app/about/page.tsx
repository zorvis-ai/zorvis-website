"use client";
import { Nav, Footer, Tag } from "@/components/Nav";
import { TEAM } from "@/components/brand";
import Link from "next/link";

const STATS = [
  { n: "50–500",  l: "employees — the SME ignored by enterprise vendors" },
  { n: "₹40L",   l: "What enterprise HR tools cost per year" },
  { n: "2",       l: "Markets at launch — India and UAE" },
  { n: "3 min",   l: "to rank 400 CVs. Was 6 hours." },
];

const TIMELINE = [
  { year: "2021–24", title: "Seeing the problem from the inside", body: "Sagar spent three years as Senior Product Manager at Amazon in Seattle — building products used by millions, watching enterprise infrastructure work at scale. When he returned to India, one thing stood out: the HR tools that worked for Amazon didn't exist for the 200-person BPO in Bangalore. The gap wasn't a product gap — it was a priority gap. Nobody had built for this customer." },
  { year: "2024",    title: "The question that started everything", body: "Every HR manager he spoke to described the same Monday morning: 400 CVs, 6 hours of reading, no scoring, no pipeline, offers tracked on email. Enterprise tools cost ₹40L a year and take 5 months to implement. The SME was completely locked out. The question wasn't whether the problem was real — it was why nobody had solved it." },
  { year: "2025",    title: "Building the team", body: "Ambar joined as Product Advisor, bringing deep experience scaling products at Pipedrive (100k+ customers) and Smartly.io. Mehak joined as Technology Advisor, with 7 years building safety-critical aerospace systems at Collins Aerospace. The team was built around one belief: India and UAE SMEs deserve the same intelligence infrastructure as enterprise — at a price they can actually afford." },
  { year: "2026",    title: "Zorvis launches", body: "First cohort of BPO companies and founders in India. The platform that starts intelligence at the first CV and never stops — connecting hiring scores to 90-day performance, managing the employee lifecycle across every channel, built specifically for the company that has been ignored by every enterprise HR vendor." },
];

const VALUES = [
  { icon: "⚡", title: "Speed over perfection",    body: "We ship. We learn. We fix. A working product in the hands of a real HR manager beats a perfect product in Figma. Always." },
  { icon: "🔒", title: "Trust is the product",     body: "SME buyers don't trust technology — they trust people. Every design decision starts with: does this earn trust?" },
  { icon: "📊", title: "Data compounds",           body: "Every hire, every score, every outcome makes the next prediction better. We're building an intelligence moat, not a feature list." },
  { icon: "🌏", title: "Built for the real India", body: "Not Bangalore SaaS. The BPO in Hyderabad. The factory in Pune. The hotel in Dubai. People who hire in volume on a budget." },
  { icon: "🤝", title: "AI ranks. Humans decide.", body: "AI surfaces the best candidates with explainable scores. The hiring decision is always human. No AI makes a final call on anyone's career." },
  { icon: "🛡️", title: "Ethical by design",        body: "No individual attrition risk scores. No surveillance. Team health signals only, aggregated to department level. This is permanent." },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <section style={{ padding: "120px 32px 72px", maxWidth: 760, margin: "0 auto", textAlign: "center", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>OUR STORY</Tag>
        <h1 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, margin: "0 0 22px", color: "#0D1117" }}>
          India's best companies<br /><span style={{ color: "#4F46E5" }}>deserve better tools.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.75, maxWidth: 600, margin: "0 auto" }}>
          Zorvis started with a simple observation: enterprise HR infrastructure works beautifully for the 10,000-person company. It does nothing for the 200-person BPO in Hyderabad — the company that drives most of India's employment, hires in volume every month, and has been completely ignored by every major vendor.
          <br /><br />
          We built Zorvis to close that gap. People Intelligence Platform capability at SME pricing. Starting free.
        </p>
      </section>

      <section style={{ padding: "0 32px 80px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14 }}>
          {STATS.map(s => (
            <div key={s.n} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", color: "#4F46E5", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 7, lineHeight: 1.45 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 32px 100px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Tag>THE JOURNEY</Tag>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 52px", color: "#0D1117" }}>How we got here.</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {TIMELINE.map((t, i) => (
              <div key={t.year} style={{ display: "flex", gap: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#4F46E5", border: "3px solid #EEF2FF", marginTop: 4, flexShrink: 0 }} />
                  {i < TIMELINE.length - 1 && <div style={{ width: 2, flex: 1, background: "#E2E6F0", margin: "6px 0" }} />}
                </div>
                <div style={{ paddingBottom: i < TIMELINE.length - 1 ? 36 : 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#4F46E5", letterSpacing: "0.1em", marginBottom: 5 }}>{t.year}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#0D1117", marginBottom: 7 }}>{t.title}</div>
                  <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{t.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "80px 32px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <Tag>THE TEAM</Tag>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 10px", color: "#0D1117" }}>Small team. Deep experience.</h2>
          <p style={{ fontSize: 15, color: "#6B7280", textAlign: "center", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.6 }}>
            Product, engineering, and growth experience built across Amazon, Collins Aerospace, and Pipedrive. We've seen enterprise infrastructure from the inside. Now we're making it accessible.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {TEAM.map(m => (
              <div key={m.name} style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "28px 24px", position: "relative", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: m.color }} />
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${m.color}14`, border: `2px solid ${m.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: m.color, marginBottom: 16 }}>{m.initials}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", marginBottom: 3 }}>{m.name}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: m.color, letterSpacing: "0.06em", marginBottom: 12 }}>{m.role.toUpperCase()}</div>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.65, marginBottom: 16 }}>{m.bio}</p>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#4F46E5", textDecoration: "none", background: "#EEF2FF", border: "1px solid #C7D2FE", padding: "5px 12px", borderRadius: 100, fontWeight: 500 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 32px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Tag>HOW WE BUILD</Tag>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 44px", color: "#0D1117" }}>Six principles. Non-negotiable.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 14 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 12, padding: "20px 20px", display: "flex", gap: 14 }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 6 }}>{v.title}</div>
                  <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.65 }}>{v.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — points to careers page, no co-founder mention */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "72px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(20px,4vw,34px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 12px", color: "#0D1117" }}>We're building the founding engineering team.</h2>
        <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 480, margin: "0 auto 30px", lineHeight: 1.65 }}>
          NCR, India. Full-time. Stock options that reflect your place on the founding team. If you want to own something real from Day 1, we're hiring.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/careers" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "11px 26px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>See open roles</Link>
          <a href="mailto:founder@zorvis.ai" style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", color: "#374151", fontSize: 14, fontWeight: 500, padding: "11px 26px", borderRadius: 8, textDecoration: "none" }}>Email founder@zorvis.ai</a>
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

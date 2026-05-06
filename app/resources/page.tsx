import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer, Tag } from "@/components/Nav";
import { ALL_POSTS } from "./blog/posts";

export const metadata: Metadata = {
  title: "Resources — HR Guides, Blog & Templates for India & UAE",
  description: "Free hiring guides, blog articles, and templates for Indian and UAE HR managers. CV screening, aptitude testing, UAE compliance, BPO hiring, and more.",
};

const RECENT = ALL_POSTS.slice(0, 6);
const FEATURED = ALL_POSTS.filter(p => p.featured).slice(0, 4);

const RESOURCE_HUBS = [
  {
    icon: "📝", title: "Blog", count: `${ALL_POSTS.length}+ articles`, href: "/resources/blog",
    desc: "Practical guides on CV screening, aptitude testing, UAE compliance, BPO hiring, and AI recruitment.",
    color: "#4F46E5",
  },
  {
    icon: "📋", title: "Guides", count: "Step-by-step", href: "/resources/guides",
    desc: "Deep-dive guides for setting up hiring processes, UAE compliance, and HR operations from scratch.",
    color: "#7C3AED",
  },
  {
    icon: "📄", title: "Templates", count: "Free downloads", href: "/resources/guides",
    desc: "Offer letter templates, interview scorecards, onboarding checklists — ready to use.",
    color: "#059669",
  },
];

const TOPIC_CLUSTERS = [
  { label: "CV Screening & Shortlisting", href: "/resources/blog?category=CV+Screening", icon: "📋" },
  { label: "Aptitude Testing & Assessments", href: "/resources/blog?category=Assessments", icon: "✅" },
  { label: "UAE Compliance & WPS", href: "/resources/blog?category=UAE+Compliance", icon: "🇦🇪" },
  { label: "BPO Hiring India", href: "/resources/blog?category=BPO+Hiring", icon: "🎯" },
  { label: "AI in Recruitment", href: "/resources/blog?category=AI+Hiring", icon: "🤖" },
  { label: "SME HR Operations", href: "/resources/blog?category=SME+HR", icon: "⚙️" },
  { label: "Attrition & Retention", href: "/resources/blog?category=Attrition+%26+Retention", icon: "📈" },
  { label: "HR Software Comparisons", href: "/resources/blog?category=HR+Software+India", icon: "🔍" },
];

export default function ResourcesPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: "110px 32px 60px", textAlign: "center", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>RESOURCES</Tag>
        <h1 style={{ fontSize: "clamp(28px,5vw,50px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 14px", color: "#0D1117" }}>
          Hire smarter.<br /><span style={{ color: "#4F46E5" }}>Everything you need to know.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
          Free guides, blog articles, and templates for HR managers and founders in India and the UAE. No signup needed.
        </p>
      </section>

      {/* RESOURCE HUBS */}
      <section style={{ padding: "0 32px 64px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          {RESOURCE_HUBS.map(r => (
            <Link key={r.title} href={r.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "24px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", transition: "box-shadow 0.15s, border-color 0.15s", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = `${r.color}40`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E6F0"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: r.color }} />
                <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>{r.icon}</span>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", marginBottom: 4 }}>{r.title}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: r.color, marginBottom: 10 }}>{r.count}</div>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, marginBottom: 14 }}>{r.desc}</p>
                <div style={{ fontSize: 13, fontWeight: 600, color: r.color }}>Browse {r.title.toLowerCase()} →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TOPIC CLUSTERS */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "56px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0D1117", marginBottom: 24, textAlign: "center" }}>Browse by topic</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10 }}>
            {TOPIC_CLUSTERS.map(t => (
              <Link key={t.label} href={t.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10, transition: "border-color 0.15s, box-shadow 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#C7D2FE"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(79,70,229,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E6F0"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <span style={{ fontSize: 18 }}>{t.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>{t.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section style={{ padding: "56px 32px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0D1117", margin: 0 }}>Featured articles</h2>
          <Link href="/resources/blog" style={{ fontSize: 13, color: "#4F46E5", textDecoration: "none", fontWeight: 500 }}>View all {ALL_POSTS.length} articles →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 14 }}>
          {FEATURED.map(p => (
            <Link key={p.slug} href={`/resources/blog/${p.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "18px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)", transition: "box-shadow 0.15s, border-color 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 14px rgba(0,0,0,0.07)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#C7D2FE"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.03)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E6F0"; }}
              >
                <div style={{ fontSize: 10, fontWeight: 700, color: "#4F46E5", marginBottom: 8 }}>{p.category.toUpperCase()}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1117", lineHeight: 1.4, marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5, marginBottom: 10 }}>{p.description.slice(0, 90)}...</div>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>{p.readTime} min read</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "56px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", margin: "0 0 10px" }}>Ready to put this into practice?</h2>
        <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 24 }}>Free forever on the Starter plan. No credit card.</p>
        <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 14, fontWeight: 600, padding: "12px 28px", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}>
          Get early access →
        </Link>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

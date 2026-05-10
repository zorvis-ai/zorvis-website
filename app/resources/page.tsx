"use client";
import Link from "next/link";
import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";
import { ALL_POSTS, CATEGORIES } from "./blog/posts";

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
  { label: "CV Screening & Shortlisting",    href: "/resources/blog", icon: "📋" },
  { label: "Aptitude Testing & Assessments", href: "/resources/blog", icon: "✅" },
  { label: "UAE Compliance & WPS",           href: "/resources/blog", icon: "🇦🇪" },
  { label: "BPO Hiring India",               href: "/resources/blog", icon: "🎯" },
  { label: "AI in Recruitment",              href: "/resources/blog", icon: "🤖" },
  { label: "SME HR Operations",              href: "/resources/blog", icon: "⚙️" },
  { label: "Attrition & Retention",          href: "/resources/blog", icon: "📈" },
  { label: "HR Software Comparisons",        href: "/resources/blog", icon: "🔍" },
];

export default function ResourcesPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <PageHero
        eyebrow="RESOURCES"
        headline={
          <>
            Hire smarter.<br />
            <span style={{ color: "#4F46E5" }}>Everything you need to know.</span>
          </>
        }
        summary="Free guides, blog articles, and templates for HR managers and founders in India and the UAE. No signup needed."
        suiteContext="Updated regularly. Built from the same playbook as Zorvis itself."
      />

      {/* RESOURCE HUBS */}
      <section style={{ padding: "56px 32px 64px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          {RESOURCE_HUBS.map(r => (
            <Link key={r.title} href={r.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 14, padding: "24px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", transition: "box-shadow 0.15s, border-color 0.15s", position: "relative", overflow: "hidden", cursor: "pointer" }}>
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
                <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
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
              <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "18px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)", cursor: "pointer" }}>
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

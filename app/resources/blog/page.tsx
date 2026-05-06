"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, Tag } from "@/components/Nav";
import { ALL_POSTS, CATEGORIES } from "./posts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ALL_POSTS.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featured = ALL_POSTS.filter(p => p.featured).slice(0, 4);

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: "110px 32px 56px", textAlign: "center", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>RESOURCES · BLOG</Tag>
        <h1 style={{ fontSize: "clamp(28px,5vw,50px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 14px", color: "#0D1117" }}>
          Hiring smarter.<br /><span style={{ color: "#4F46E5" }}>For India and UAE.</span>
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.6 }}>
          Practical guides on CV screening, aptitude testing, UAE compliance, BPO hiring, and AI recruitment — written for HR managers and founders.
        </p>
        <div style={{ maxWidth: 440, margin: "0 auto" }}>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search articles..."
            style={{ width: "100%", background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 8, padding: "11px 16px", fontSize: 14, color: "#0D1117", outline: "none", boxSizing: "border-box", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
            onFocus={e => (e.target.style.borderColor = "#4F46E5")}
            onBlur={e => (e.target.style.borderColor = "#E2E6F0")}
          />
        </div>
      </section>

      {/* FEATURED */}
      {!search && activeCategory === "All" && (
        <section style={{ padding: "0 32px 56px", maxWidth: 1040, margin: "0 auto" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", marginBottom: 20 }}>Featured articles</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            {featured.map(p => (
              <Link key={p.slug} href={`/resources/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#F7F8FF", border: "1px solid #C7D2FE", borderRadius: 12, padding: "18px 18px", height: "100%", transition: "box-shadow 0.15s", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 14px rgba(79,70,229,0.12)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#4F46E5", letterSpacing: "0.1em", marginBottom: 8 }}>{p.category.toUpperCase()}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1117", lineHeight: 1.4, marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>{p.description.slice(0, 80)}...</div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 10 }}>{p.readTime} min read</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CATEGORY FILTERS */}
      <section style={{ padding: "0 32px 32px", maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              background: activeCategory === cat ? "#4F46E5" : "#F7F8FC",
              border: `1px solid ${activeCategory === cat ? "#4F46E5" : "#E2E6F0"}`,
              color: activeCategory === cat ? "#FFFFFF" : "#374151",
              borderRadius: 100, padding: "6px 14px", fontSize: 12, fontWeight: 500,
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s",
            }}>{cat}</button>
          ))}
        </div>
      </section>

      {/* POST GRID */}
      <section style={{ padding: "0 32px 80px", maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 20 }}>{filtered.length} articles</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16 }}>
          {filtered.map(p => (
            <Link key={p.slug} href={`/resources/blog/${p.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 12, padding: "20px 20px", height: "100%", boxShadow: "0 1px 3px rgba(0,0,0,0.03)", transition: "box-shadow 0.15s, border-color 0.15s", cursor: "pointer", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 14px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#C7D2FE"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.03)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E6F0"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div style={{ display: "inline-block", background: "#EEF2FF", borderRadius: 100, padding: "3px 9px", fontSize: 10, fontWeight: 600, color: "#4F46E5" }}>{p.category}</div>
                  <div style={{ fontSize: 11, color: "#9CA3AF" }}>{p.readTime} min</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0D1117", lineHeight: 1.45, marginBottom: 8, flex: 1 }}>{p.title}</div>
                <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5, marginBottom: 12 }}>{p.description.slice(0, 100)}...</div>
                <div style={{ fontSize: 11, color: "#4F46E5", fontWeight: 500 }}>Read article →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

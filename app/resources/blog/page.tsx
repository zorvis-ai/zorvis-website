"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, Tag } from "@/components/Nav";
import { ALL_POSTS, CATEGORIES } from "./posts";

export default function BlogPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const filtered = ALL_POSTS.filter(p =>
    (cat === "All" || p.category === cat) &&
    (!q || p.title.toLowerCase().includes(q.toLowerCase()) || p.tags.some(t => t.includes(q.toLowerCase())))
  );

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#FFFFFF", color:"#0D1117", minHeight:"100vh" }}>
      <Nav />
      <section style={{ padding:"110px 32px 56px", textAlign:"center", background:"linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <Tag>BLOG</Tag>
        <h1 style={{ fontSize:"clamp(28px,5vw,48px)", fontWeight:800, letterSpacing:"-0.03em", margin:"0 0 14px" }}>
          HR insights for India and UAE.<br /><span style={{ color:"#4F46E5" }}>No fluff, just practice.</span>
        </h1>
        <p style={{ fontSize:16, color:"#6B7280", maxWidth:480, margin:"0 auto 28px", lineHeight:1.6 }}>
          CV screening, assessments, BPO hiring, UAE compliance, and AI-powered HR — written by practitioners for practitioners.
        </p>
        <input
          value={q} onChange={e => setQ(e.target.value)}
          placeholder="Search articles..."
          style={{ maxWidth:420, width:"100%", background:"#FFFFFF", border:"1px solid #E2E6F0", borderRadius:8, padding:"11px 16px", fontSize:14, color:"#0D1117", outline:"none", boxSizing:"border-box" }}
        />
      </section>

      <section style={{ padding:"0 32px 80px", maxWidth:1040, margin:"0 auto" }}>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:32 }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)}
              style={{ background:cat===c?"#4F46E5":"#F7F8FC", border:`1px solid ${cat===c?"#4F46E5":"#E2E6F0"}`, color:cat===c?"#FFFFFF":"#374151", borderRadius:100, padding:"6px 14px", fontSize:12, fontWeight:500, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
          {filtered.map(post => (
            <Link key={post.slug} href={`/resources/blog/${post.slug}`} style={{ textDecoration:"none" }}>
              <div style={{ background:"#FFFFFF", border:"1px solid #E2E6F0", borderRadius:14, padding:"24px", height:"100%", boxSizing:"border-box", transition:"box-shadow 0.15s, border-color 0.15s", cursor:"pointer" }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow="0 8px 24px rgba(0,0,0,0.08)"; d.style.borderColor="#C7D2FE"; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow="none"; d.style.borderColor="#E2E6F0"; }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                  <div style={{ fontSize:10, fontWeight:700, color:"#4F46E5", background:"#EEF2FF", padding:"3px 9px", borderRadius:20 }}>{post.heroTag}</div>
                  {post.featured && <div style={{ fontSize:9, fontWeight:700, color:"#D97706", background:"#FEF3C7", padding:"3px 9px", borderRadius:20 }}>FEATURED</div>}
                </div>
                <h3 style={{ fontSize:15, fontWeight:700, color:"#0D1117", margin:"0 0 8px", lineHeight:1.45 }}>{post.title}</h3>
                <p style={{ fontSize:13, color:"#6B7280", lineHeight:1.55, margin:"0 0 16px" }}>{post.description}</p>
                <div style={{ display:"flex", gap:12, fontSize:12, color:"#9CA3AF" }}>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign:"center", padding:"60px 0", color:"#9CA3AF" }}>
            No articles match your search. <button onClick={() => { setCat("All"); setQ(""); }} style={{ background:"none", border:"none", color:"#4F46E5", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Clear filters</button>
          </div>
        )}
      </section>
      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

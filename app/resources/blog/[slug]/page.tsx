import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { ALL_POSTS, type VisualModule } from "../posts";

export async function generateStaticParams() {
  return ALL_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = ALL_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Zorvis AI Blog`,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article" },
    keywords: post.tags.join(", "),
  };
}

function StatGrid({ data }: { data: VisualModule["data"] }) {
  const { title, stats } = data as { title: string; stats: { value: string; label: string; color: string }[] };
  return (
    <div style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:14, padding:"28px 24px", margin:"28px 0" }}>
      <div style={{ fontSize:12, fontWeight:700, color:"#6B7280", letterSpacing:"0.1em", marginBottom:20, textTransform:"uppercase" }}>{title}</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:16 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background:"#FFFFFF", borderRadius:10, padding:"18px 16px", border:"1px solid #E2E6F0", textAlign:"center" }}>
            <div style={{ fontSize:"clamp(22px,3vw,34px)", fontWeight:800, color:s.color, letterSpacing:"-0.02em", marginBottom:6 }}>{s.value}</div>
            <div style={{ fontSize:12, color:"#6B7280", lineHeight:1.5 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonTable({ data }: { data: VisualModule["data"] }) {
  const { title, headers, rows, highlight } = data as { title: string; headers: string[]; rows: string[][]; highlight: number };
  return (
    <div style={{ margin:"28px 0", overflowX:"auto" }}>
      <div style={{ fontSize:13, fontWeight:700, color:"#0D1117", marginBottom:12 }}>{title}</div>
      <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13, minWidth:560 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ background: i > 0 && i-1 === highlight ? "#EEF2FF" : "#F7F8FC", padding:"10px 14px", textAlign:"left", fontWeight:600, color: i > 0 && i-1 === highlight ? "#4F46E5" : "#374151", border:"1px solid #E2E6F0", fontSize:12, whiteSpace:"nowrap" }}>
                {i > 0 && i-1 === highlight && <span style={{ marginRight:4 }}>⭐</span>}{h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding:"10px 14px", border:"1px solid #E2E6F0", background: ci > 0 && ci-1 === highlight ? "#F5F3FF" : "#FFFFFF", color: ci === 0 ? "#374151" : "#0D1117", fontWeight: ci === 0 ? 600 : 400 }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProcessFlow({ data }: { data: VisualModule["data"] }) {
  const { title, steps } = data as { title: string; steps: { icon: string; title: string; desc: string; time: string }[] };
  return (
    <div style={{ margin:"28px 0", background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:14, padding:"24px" }}>
      <div style={{ fontSize:13, fontWeight:700, color:"#0D1117", marginBottom:20 }}>{title}</div>
      <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display:"flex", gap:16, alignItems:"flex-start" }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
              <div style={{ width:42, height:42, borderRadius:"50%", background:"#4F46E5", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{s.icon}</div>
              {i < steps.length - 1 && <div style={{ width:2, height:28, background:"#C7D2FE", margin:"4px 0" }} />}
            </div>
            <div style={{ paddingBottom:i < steps.length - 1 ? 24 : 0, flex:1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:3 }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#0D1117" }}>{s.title}</div>
                <div style={{ fontSize:11, color:"#4F46E5", background:"#EEF2FF", padding:"2px 8px", borderRadius:20, fontWeight:600 }}>{s.time}</div>
              </div>
              <div style={{ fontSize:12, color:"#6B7280", lineHeight:1.5 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Funnel({ data }: { data: VisualModule["data"] }) {
  const { title, funnels } = data as { title: string; funnels: { label: string; steps: { label: string; value: number }[]; color: string }[] };
  return (
    <div style={{ margin:"28px 0", background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:14, padding:"24px" }}>
      <div style={{ fontSize:13, fontWeight:700, color:"#0D1117", marginBottom:20 }}>{title}</div>
      <div style={{ display:"grid", gridTemplateColumns:`repeat(${funnels.length},1fr)`, gap:20 }}>
        {funnels.map((f, fi) => (
          <div key={fi}>
            <div style={{ fontSize:12, fontWeight:600, color:f.color, marginBottom:12, textAlign:"center" }}>{f.label}</div>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {f.steps.map((s, si) => (
                <div key={si}>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#374151", marginBottom:3 }}>
                    <span>{s.label}</span>
                    <span style={{ fontWeight:700 }}>{s.value}%</span>
                  </div>
                  <div style={{ height:8, background:"#E5E7EB", borderRadius:4, overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${s.value}%`, background:f.color, borderRadius:4 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ data }: { data: VisualModule["data"] }) {
  const { title, items } = data as { title: string; items: { platform: string; time: string; desc: string }[] };
  const colors = ["#EF4444", "#F59E0B", "#4F46E5"];
  return (
    <div style={{ margin:"28px 0", background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:14, padding:"24px" }}>
      <div style={{ fontSize:13, fontWeight:700, color:"#0D1117", marginBottom:20 }}>{title}</div>
      <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
            <div style={{ width:90, flexShrink:0 }}>
              <div style={{ fontSize:11, fontWeight:700, color:colors[i], background:`${colors[i]}15`, padding:"4px 8px", borderRadius:6, textAlign:"center" }}>{item.time}</div>
            </div>
            <div style={{ flex:1, background:"#FFFFFF", borderRadius:10, padding:"12px 14px", border:"1px solid #E2E6F0" }}>
              <div style={{ fontSize:13, fontWeight:700, color:"#0D1117", marginBottom:4 }}>{item.platform}</div>
              <div style={{ fontSize:12, color:"#6B7280", lineHeight:1.5 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderVisual(v: VisualModule) {
  if (v.type === "stat-grid") return <StatGrid data={v.data} />;
  if (v.type === "comparison-table") return <ComparisonTable data={v.data} />;
  if (v.type === "process-flow") return <ProcessFlow data={v.data} />;
  if (v.type === "funnel") return <Funnel data={v.data} />;
  if (v.type === "timeline") return <Timeline data={v.data} />;
  return null;
}

function renderText(content: string) {
  return content.split("\n\n").map((para, i) => {
    const html = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>");
    if (para.startsWith("1.") || para.startsWith("-")) {
      const items = para.split("\n").filter(Boolean);
      return (
        <ul key={i} style={{ margin:"0 0 16px", paddingLeft:20 }}>
          {items.map((item, ii) => (
            <li key={ii} style={{ fontSize:15, lineHeight:1.7, color:"#374151", marginBottom:6 }}
              dangerouslySetInnerHTML={{ __html: item.replace(/^[\d]+\.\s+|^[-•]\s+/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ul>
      );
    }
    return <p key={i} style={{ fontSize:15, lineHeight:1.75, color:"#374151", margin:"0 0 14px" }} dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = ALL_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const related = ALL_POSTS.filter(p => p.slug !== post.slug && (p.category === post.category || p.featured)).slice(0, 3);

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:"#FFFFFF", color:"#0D1117", minHeight:"100vh" }}>
      <Nav />
      <article style={{ maxWidth:720, margin:"0 auto", padding:"100px 24px 60px" }}>
        <div style={{ marginBottom:32 }}>
          <div style={{ display:"flex", gap:8, marginBottom:14 }}>
            <div style={{ fontSize:10, fontWeight:700, color:"#4F46E5", background:"#EEF2FF", padding:"3px 10px", borderRadius:20 }}>{post.heroTag}</div>
            {post.featured && <div style={{ fontSize:10, fontWeight:700, color:"#D97706", background:"#FEF3C7", padding:"3px 10px", borderRadius:20 }}>FEATURED</div>}
          </div>
          <h1 style={{ fontSize:"clamp(22px,4vw,38px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.25, margin:"0 0 16px", color:"#0D1117" }}>{post.title}</h1>
          <p style={{ fontSize:16, color:"#6B7280", lineHeight:1.6, margin:"0 0 20px" }}>{post.description}</p>
          <div style={{ display:"flex", gap:16, fontSize:13, color:"#9CA3AF", paddingBottom:24, borderBottom:"1px solid #F0F1F5" }}>
            <span>{new Date(post.date).toLocaleDateString("en-IN", { day:"numeric", month:"long", year:"numeric" })}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
            <span>·</span>
            <span>{post.category}</span>
          </div>
        </div>
        <div>
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.type === "text" && section.content && renderText(section.content)}
              {section.type === "visual" && section.visual && renderVisual(section.visual)}
            </div>
          ))}
        </div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:32, paddingTop:24, borderTop:"1px solid #F0F1F5" }}>
          {post.tags.map(t => (
            <div key={t} style={{ fontSize:11, color:"#6B7280", background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:20, padding:"3px 10px" }}>{t}</div>
          ))}
        </div>
        <div style={{ margin:"40px 0", background:"linear-gradient(135deg,#EEF2FF,#F5F3FF)", border:"1px solid #C7D2FE", borderRadius:16, padding:"28px 24px", textAlign:"center" }}>
          <div style={{ fontSize:18, fontWeight:700, color:"#0D1117", marginBottom:8 }}>See Zorvis AI in action</div>
          <p style={{ fontSize:14, color:"#6B7280", marginBottom:20 }}>Join the waitlist for early access to the hire-to-retire People Intelligence Platform built for India and UAE SMEs.</p>
          <Link href="/waitlist" style={{ background:"#4F46E5", color:"#FFFFFF", fontSize:14, fontWeight:600, padding:"11px 28px", borderRadius:8, textDecoration:"none", display:"inline-block", boxShadow:"0 4px 12px rgba(79,70,229,0.3)" }}>
            Get early access →
          </Link>
        </div>
        {related.length > 0 && (
          <div>
            <h3 style={{ fontSize:16, fontWeight:700, color:"#0D1117", marginBottom:16 }}>Related articles</h3>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:14 }}>
              {related.map(r => (
                <Link key={r.slug} href={`/resources/blog/${r.slug}`} style={{ textDecoration:"none", background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:12, padding:"16px", display:"block" }}>
                  <div style={{ fontSize:10, fontWeight:700, color:"#4F46E5", background:"#EEF2FF", padding:"2px 8px", borderRadius:20, display:"inline-block", marginBottom:8 }}>{r.heroTag}</div>
                  <div style={{ fontSize:13, fontWeight:600, color:"#0D1117", lineHeight:1.4 }}>{r.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

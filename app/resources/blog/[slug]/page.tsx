import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav, Footer } from "@/components/Nav";
import { ALL_POSTS } from "../posts";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return ALL_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = ALL_POSTS.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Zorvis AI"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://zorvis.ai/resources/blog/${post.slug}`,
    },
  };
}

// Article body generator — structured content for each post
function getArticleContent(slug: string): string[] {
  // Each article gets 5 structured sections — enough for SEO value
  // In production, replace with real CMS content
  const post = ALL_POSTS.find(p => p.slug === slug);
  if (!post) return [];
  return [
    `This is a comprehensive guide to ${post.title.toLowerCase()}. Understanding this topic is essential for HR managers and founders building high-performance teams in India and the UAE.`,
    `The core challenge here is one that every SME HR team faces: the tools built for enterprise don't translate to your context, and the manual processes don't scale. This guide walks through a practical approach.`,
    `When we analysed data from early Zorvis AI customers across India and the UAE, a consistent pattern emerged. The companies that solve this problem well share a few common practices — all of which can be implemented without enterprise budgets or dedicated HR teams.`,
    `The most important thing to understand is that this isn't primarily a technology problem. It's a process problem. The right technology makes a good process more efficient — but it can't replace one.`,
    `If you're an HR manager or founder looking to improve your approach to ${post.category.toLowerCase()}, the starting point is always the same: understand your specific context before selecting any tool or process. What works for a 500-person BPO in Bangalore may not work for a 50-person hospitality business in Dubai.`,
  ];
}

export default function BlogPostPage({ params }: Props) {
  const post = ALL_POSTS.find(p => p.slug === params.slug);
  if (!post) notFound();

  const related = ALL_POSTS
    .filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
    .slice(0, 3);

  const content = getArticleContent(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Zorvis AI", url: "https://zorvis.ai" },
    publisher: { "@type": "Organization", name: "Zorvis AI", url: "https://zorvis.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://zorvis.ai/resources/blog/${post.slug}` },
    keywords: post.tags.join(", "),
  };

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Nav />

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "110px 32px 80px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 28, fontSize: 12, color: "#9CA3AF" }}>
          <Link href="/resources" style={{ color: "#9CA3AF", textDecoration: "none" }}>Resources</Link>
          <span>›</span>
          <Link href="/resources/blog" style={{ color: "#9CA3AF", textDecoration: "none" }}>Blog</Link>
          <span>›</span>
          <span style={{ color: "#374151" }}>{post.category}</span>
        </div>

        {/* Category */}
        <div style={{ display: "inline-block", background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#4F46E5", marginBottom: 16 }}>
          {post.category.toUpperCase()}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 16px", color: "#0D1117" }}>
          {post.title}
        </h1>

        {/* Meta */}
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32, paddingBottom: 24, borderBottom: "1px solid #E2E6F0", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#4F46E5" }}>Z</div>
            <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>Zorvis AI</span>
          </div>
          <span style={{ fontSize: 12, color: "#9CA3AF" }}>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span style={{ fontSize: 12, color: "#9CA3AF" }}>{post.readTime} min read</span>
        </div>

        {/* Description / lead */}
        <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.7, marginBottom: 32, fontWeight: 500 }}>
          {post.description}
        </p>

        {/* Article body */}
        {content.map((para, i) => (
          <p key={i} style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, marginBottom: 20 }}>{para}</p>
        ))}

        {/* CTA inside article */}
        <div style={{ background: "#F7F8FF", border: "1px solid #C7D2FE", borderRadius: 12, padding: "24px 24px", margin: "36px 0", textAlign: "center" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0D1117", marginBottom: 8 }}>See how Zorvis AI handles this</div>
          <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 16 }}>Free forever tier. No credit card. Setup in 15 minutes.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/waitlist" style={{ background: "#4F46E5", color: "#FFFFFF", fontSize: 13, fontWeight: 600, padding: "10px 22px", borderRadius: 8, textDecoration: "none" }}>Get early access</Link>
            <Link href="/product" style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", color: "#374151", fontSize: 13, fontWeight: 500, padding: "10px 22px", borderRadius: 8, textDecoration: "none" }}>See the product</Link>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 40 }}>
          {post.tags.map(tag => (
            <span key={tag} style={{ background: "#F7F8FC", border: "1px solid #E2E6F0", borderRadius: 100, padding: "3px 10px", fontSize: 11, color: "#6B7280" }}>{tag}</span>
          ))}
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section style={{ background: "#F7F8FC", borderTop: "1px solid #E2E6F0", padding: "56px 32px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", marginBottom: 20 }}>Related articles</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
              {related.map(r => (
                <Link key={r.slug} href={`/resources/blog/${r.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E2E6F0", borderRadius: 10, padding: "16px 16px", transition: "box-shadow 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.07)")}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#4F46E5", marginBottom: 6 }}>{r.category.toUpperCase()}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#0D1117", lineHeight: 1.4, marginBottom: 4 }}>{r.title}</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>{r.readTime} min read</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

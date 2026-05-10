import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { ArrowRight, Home, Search, FileQuestion } from "lucide-react";

export const metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
};

const HELPFUL_LINKS: { label: string; href: string; desc: string }[] = [
  { label: "Pricing",           href: "/pricing",          desc: "Free, Starter, Growth, Scale" },
  { label: "How it works",      href: "/how-it-works",     desc: "End-to-end in 7 stages" },
  { label: "ROI Calculator",    href: "/roi-calculator",   desc: "Estimate your savings" },
  { label: "Get early access",  href: "/waitlist",         desc: "Founding cohort signup" },
];

export default function NotFound() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav />

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 32px 80px", background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)" }}>
        <div style={{ maxWidth: 640, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 72, height: 72, borderRadius: "50%",
            background: "#EEF2FF", border: "1px solid #C7D2FE",
            marginBottom: 24,
          }}>
            <FileQuestion style={{ width: 32, height: 32, color: "#4F46E5" }} />
          </div>

          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
            color: "#4F46E5",
            background: "rgba(79,70,229,0.08)",
            display: "inline-block",
            padding: "5px 12px", borderRadius: 100,
            marginBottom: 16,
          }}>
            404 · NOT FOUND
          </div>

          <h1 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            margin: "0 0 14px",
            color: "#0D1117",
          }}>
            That page doesn&apos;t exist.
          </h1>

          <p style={{
            fontSize: 16, color: "#6B7280",
            lineHeight: 1.65, maxWidth: 480, margin: "0 auto 36px",
          }}>
            It might have moved, been renamed, or never existed. Either way — here&apos;s where you probably wanted to go.
          </p>

          {/* Primary actions */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <Link
              href="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#4F46E5", color: "#FFFFFF",
                fontSize: 14, fontWeight: 600,
                padding: "11px 22px", borderRadius: 8,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(79,70,229,0.25)",
              }}
            >
              <Home style={{ width: 14, height: 14 }} />
              Back to home
            </Link>
            <Link
              href="/faq"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#FFFFFF", color: "#374151",
                border: "1px solid #E2E6F0",
                fontSize: 14, fontWeight: 500,
                padding: "11px 22px", borderRadius: 8,
                textDecoration: "none",
              }}
            >
              <Search style={{ width: 14, height: 14 }} />
              Browse FAQ
            </Link>
          </div>

          {/* Helpful destinations */}
          <div style={{ borderTop: "1px solid #E2E6F0", paddingTop: 32, textAlign: "left" }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
              color: "#9CA3AF", textAlign: "center", marginBottom: 18,
            }}>
              POPULAR PAGES
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
              {HELPFUL_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "#FFFFFF",
                    border: "1px solid #E2E6F0",
                    borderRadius: 10,
                    padding: "12px 16px",
                    textDecoration: "none",
                    transition: "border-color 0.15s, background 0.15s",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0D1117", marginBottom: 2 }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>
                      {link.desc}
                    </div>
                  </div>
                  <ArrowRight style={{ width: 14, height: 14, color: "#9CA3AF", flexShrink: 0, marginLeft: 12 }} />
                </Link>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 13, color: "#9CA3AF", marginTop: 32 }}>
            Still stuck? Email{" "}
            <a href="mailto:founder@zorvis.ai" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 600 }}>
              founder@zorvis.ai
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}

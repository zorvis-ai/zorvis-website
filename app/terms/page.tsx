import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description:
    "Zorvis AI Terms of Service governing use of the Zorvis platform in India and the UAE.",
};

export default function TermsPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <PageHero
        eyebrow="LEGAL"
        headline={<>Terms of Service</>}
        summary="The agreement governing use of the Zorvis platform — for both employer customers and candidates interacting with the platform."
        suiteContext="Last updated: May 2026 · Effective from public launch"
        hideModulesStrip
      />

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "56px 32px 80px", fontSize: 15, lineHeight: 1.75, color: "#374151" }}>
        <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: 12, padding: "16px 20px", marginBottom: 36, fontSize: 13, color: "#92400E", lineHeight: 1.6 }}>
          <strong>Pre-launch placeholder.</strong> These terms describe the intended commercial relationship between Zorvis and its customers. Final terms will be reviewed by counsel before public launch. Pre-launch design partner relationships are governed by a signed pilot agreement, not this page.
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 0, marginBottom: 12 }}>1. Agreement</h2>
        <p>By creating an account, signing an order form, or otherwise using the Zorvis platform, you agree to these Terms with Zorvis AI Technologies Pvt Ltd ("Zorvis"). If you are using Zorvis on behalf of a company, you represent that you have authority to bind that company.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>2. The platform</h2>
        <p>Zorvis provides AI-powered hiring, onboarding, payroll, performance, and HR operations software for SMEs in India and the UAE. Specific features are governed by the plan you select. We may add or remove features over time.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>3. Your responsibilities</h2>
        <ul style={{ paddingLeft: 22 }}>
          <li>You are responsible for the accuracy of data you upload (job descriptions, CVs, employee records).</li>
          <li>You must obtain valid consent from candidates before uploading their data into Zorvis.</li>
          <li>You will not use Zorvis for illegal, fraudulent, or discriminatory hiring practices.</li>
          <li>You will not attempt to reverse-engineer, scrape, or otherwise misuse the platform or its AI outputs.</li>
        </ul>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>4. AI outputs</h2>
        <p>AI outputs (CV rankings, score bands, interview transcripts, performance predictions) are decision-support tools. They are not infallible. Final hiring, promotion, and compensation decisions remain with you. Zorvis is not liable for hiring outcomes based on AI outputs.</p>
        <p>Where the AI is unsure, it returns a score band rather than false-precision numbers. Where the AI cannot make a determination, it surfaces this rather than guessing.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>5. Pricing and billing</h2>
        <p>Plans, pricing, and quotas are listed at <Link href="/pricing" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 600 }}>/pricing</Link>. Free tier remains free permanently. Paid plans bill monthly in advance unless you select annual billing. Founding-customer pricing is locked for 12 months for design-partner customers.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>6. Data ownership</h2>
        <p>You own your customer data — including the candidate, employee, and hiring data you upload. Zorvis acts as a processor for that data on your behalf, governed by our Data Processing Addendum (incorporated by reference).</p>
        <p>Aggregated, de-identified data may be used to improve the platform and the AI models. We do not sell or share your data with third parties beyond the sub-processors listed in the DPA.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>7. Termination</h2>
        <p>You may cancel any time. Free tier accounts may be terminated for non-use after 12 months. Paid plans require 30 days' notice. Upon termination, you may export your data for 30 days. After that, data is deleted in accordance with our retention policy.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>8. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, Zorvis's aggregate liability is capped at the fees paid by you in the 12 months preceding the claim. We are not liable for indirect, consequential, or punitive damages, including lost profits or hiring outcomes.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>9. Governing law</h2>
        <p>For India customers: governed by the laws of India. Disputes resolved in the courts of New Delhi.</p>
        <p>For UAE customers: governed by the laws of the United Arab Emirates. Disputes resolved in the courts of Dubai.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>10. Contact</h2>
        <p>Questions: <a href="mailto:founder@zorvis.ai" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 600 }}>founder@zorvis.ai</a></p>

        <hr style={{ border: "none", borderTop: "1px solid #E2E6F0", margin: "48px 0 24px" }} />
        <p style={{ fontSize: 13, color: "#9CA3AF" }}>
          For our Privacy Policy, see <Link href="/privacy" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 500 }}>/privacy</Link>.
        </p>
      </article>

      <Footer />
    </div>
  );
}

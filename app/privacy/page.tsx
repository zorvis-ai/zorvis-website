import { Nav, Footer, Tag } from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Zorvis AI Privacy Policy — covering India DPDP Act 2023 and UAE Federal Decree-Law 45/2021 on Personal Data Protection.",
};

export default function PrivacyPage() {
  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      <PageHero
        eyebrow="LEGAL"
        headline={
          <>
            Privacy Policy<br />
            <span style={{ color: "#4F46E5", fontSize: "0.7em" }}>India DPDP Act · UAE PDPL</span>
          </>
        }
        summary="How Zorvis AI collects, uses, stores, and protects personal data — for both candidates and employer customers, across India and the UAE."
        suiteContext="Last updated: May 2026 · Effective from public launch"
        hideModulesStrip
      />

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "56px 32px 80px", fontSize: 15, lineHeight: 1.75, color: "#374151" }}>
        {/* Counsel-review banner */}
        <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: 12, padding: "16px 20px", marginBottom: 36, fontSize: 13, color: "#92400E", lineHeight: 1.6 }}>
          <strong>Pre-launch placeholder.</strong> This policy describes Zorvis AI's intended data handling for the India and UAE markets. Final policy will be reviewed by counsel before public launch. Any contractual reliance prior to launch should be in a signed Data Processing Addendum, not this page.
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 0, marginBottom: 12 }}>1. Who we are</h2>
        <p>Zorvis AI Technologies Pvt Ltd ("Zorvis", "we", "us") is the data fiduciary (under the India DPDP Act 2023) and data controller (under UAE Federal Decree-Law 45/2021 on Personal Data Protection, "PDPL") for personal data processed through this website and the Zorvis platform.</p>
        <p>For data we process on behalf of employer customers (e.g. CV data ingested into a customer's hiring pipeline), we act as a data processor under a separate Data Processing Addendum signed with that customer.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>2. What personal data we collect</h2>
        <p><strong>Website visitors:</strong> page views and aggregate usage analytics (no individual profiling).</p>
        <p><strong>Waitlist sign-ups:</strong> name, work email, company, role, country.</p>
        <p><strong>Employer customers:</strong> company information, billing details, named user accounts, and the candidate/employee data uploaded into their workspace.</p>
        <p><strong>Candidates:</strong> CV content, contact details, assessment responses, AI phone-interview recordings (with explicit consent), and identification documents (Aadhaar, PAN, Emirates ID — depending on market).</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>3. Lawful basis</h2>
        <p>India DPDP Act 2023: data is processed on the basis of consent (Section 6) for candidates and contract performance (Section 7) for employer customers.</p>
        <p>UAE PDPL: data is processed on the basis of consent (Article 4) and contractual necessity. Sensitive personal data (Article 1) is processed only with explicit consent.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>4. AI phone interview recordings</h2>
        <p>If you receive an AI phone interview from a Zorvis customer:</p>
        <ul style={{ paddingLeft: 22 }}>
          <li>A recording disclosure is played in your preferred language before the call connects.</li>
          <li>You may decline. Declining does not auto-reject your application.</li>
          <li>Recordings are retained for 30 days, then auto-deleted.</li>
          <li>You may request a full transcript and dispute any AI scoring.</li>
          <li>The AI never makes the final hiring decision — it only ranks.</li>
        </ul>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>5. Data localisation</h2>
        <p>India personal data is stored in AWS Mumbai (ap-south-1). UAE personal data is stored in AWS Bahrain (me-south-1). No cross-border transfer occurs without an explicit lawful basis (e.g. customer-initiated transfer in a multi-country deployment).</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>6. Your rights</h2>
        <p>Under both DPDP and PDPL, you have the right to: access your data, correct inaccuracies, request erasure, restrict processing, port your data, and object to automated decision-making.</p>
        <p>To exercise these rights, email <a href="mailto:privacy@zorvis.ai" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 600 }}>privacy@zorvis.ai</a>. We will respond within 30 days.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>7. What we do not do</h2>
        <ul style={{ paddingLeft: 22 }}>
          <li>We do not sell personal data. Ever.</li>
          <li>We do not store individual employee attrition or flight-risk scores. Permanently.</li>
          <li>We do not use customer data to train cross-customer AI models without explicit opt-in.</li>
          <li>We do not allow advertising tracking on our website.</li>
        </ul>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>8. Security</h2>
        <p>Encryption in transit (TLS 1.3) and at rest (AES-256). Role-based access controls. Audit logs for all data access. SOC 2 and ISO 27001 in progress.</p>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0D1117", marginTop: 36, marginBottom: 12 }}>9. Contact</h2>
        <p><strong>Data Protection Officer (India):</strong> <a href="mailto:privacy@zorvis.ai" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 600 }}>privacy@zorvis.ai</a></p>
        <p><strong>Data Protection Officer (UAE):</strong> <a href="mailto:privacy-uae@zorvis.ai" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 600 }}>privacy-uae@zorvis.ai</a></p>
        <p><strong>General:</strong> <a href="mailto:founder@zorvis.ai" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 600 }}>founder@zorvis.ai</a></p>

        <hr style={{ border: "none", borderTop: "1px solid #E2E6F0", margin: "48px 0 24px" }} />
        <p style={{ fontSize: 13, color: "#9CA3AF" }}>
          For our Terms of Service, see <Link href="/terms" style={{ color: "#4F46E5", textDecoration: "none", fontWeight: 500 }}>/terms</Link>.
        </p>
      </article>

      <Footer />
    </div>
  );
}

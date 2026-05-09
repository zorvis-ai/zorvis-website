import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Common questions about Zorvis AI hiring platform",
  description:
    "Get answers to 15 real questions about Zorvis AI: data security, DPDP compliance, AI bias, free tier limits, integrations, blue-collar testing, and pricing. Honest answers from the founders.",
  keywords: [
    "Zorvis FAQ",
    "AI hiring software questions",
    "DPDP compliance",
    "blue-collar aptitude test",
    "WhatsApp recruitment",
    "free HR software India",
    "UAE hiring tools",
    "AI bias hiring",
  ],
  openGraph: {
    title: "Frequently Asked Questions — Zorvis AI",
    description:
      "15 honest answers about how Zorvis works, pricing, data security, AI bias safeguards, and DPDP compliance.",
    url: "https://zorvis.ai/faq",
    type: "website",
    images: [
      {
        url: "https://zorvis.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zorvis AI FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorvis AI — FAQ",
    description: "15 honest answers about hiring with AI in India and UAE.",
    images: ["https://zorvis.ai/og-image.png"],
  },
  alternates: {
    canonical: "https://zorvis.ai/faq",
  },
};

// FAQPage structured data — Google uses this to show rich snippets in search results
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is my candidate data safe with Zorvis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Candidate data in Zorvis is encrypted at rest using AES-256 and in transit using TLS 1.3. Documents and CVs are stored in AWS S3 with separate encrypted buckets for India (Mumbai) and UAE (Bahrain). Multi-tenant isolation is enforced via Supabase Row Level Security.",
      },
    },
    {
      "@type": "Question",
      name: "Is Zorvis compliant with India DPDP Act 2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Zorvis captures explicit consent at every stage, follows purpose limitation and data minimisation principles, includes one-tap right to erasure, retains data only for the statutory 12-month period, and stores all India data in AWS ap-south-1 (Mumbai).",
      },
    },
    {
      "@type": "Question",
      name: "How is the AI scoring legally defensible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zorvis uses blind-first ranking that strips name, photo, address, and graduation year before AI embedding. Scores are shown as bands (e.g., 68-74) rather than false-precision single numbers. AI ranks but humans always decide — no candidate is rejected by an algorithm.",
      },
    },
    {
      "@type": "Question",
      name: "Does Zorvis work for blue-collar and frontline hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Blue-collar test configuration uses lower verbal weighting, higher numerical and practical reasoning, shorter test duration (20-25 minutes), simpler language calibrated for SSC-equivalent literacy, and domain-specific banks for manufacturing, hospitality, security, retail, logistics, and healthcare support.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Zorvis free tier include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permanently free with no credit card. Upload unlimited CVs, see AI rankings with score bands and 2-line summaries, see industry percentile benchmarks, and view candidate names. Contact details are blurred and pipeline actions (sending tests, generating offers) are locked. Pay only when you want to contact specific candidates.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Zorvis setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Less than 15 minutes from sign-up to first ranked candidates. Sign up with Google, paste a job description or use the AI JD generator, share your application link, and see candidates ranked. No implementation, no IT involvement, no software to install.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Zorvis for both India and UAE hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Scale plan includes the full UAE compliance module: WPS SIF generation, Emirates ID OCR, bilingual Arabic/English offer letters compliant with UAE Labour Law Federal Decree-Law No. 33 of 2021, and visa expiry calendar.",
      },
    },
    {
      "@type": "Question",
      name: "What integrations does Zorvis have on Day 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Job boards (Naukri, LinkedIn, Indeed, Bayt, GulfTalent), email (SendGrid), WhatsApp (WATI), calendars (Google Calendar, Outlook), background verification (SpringVerify), and storage (AWS S3). HRMS integrations (Darwinbox, Zoho People, Keka, GreytHR) arrive in Months 3-6.",
      },
    },
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Zorvis AI Works — From CV to Hire in 6 Steps",
  description:
    "See the full hire-to-retire AI flow: post jobs, rank 1,000 CVs in 3 minutes, send WhatsApp aptitude tests, schedule interviews, generate offers, onboard employees. Every step learns from every hire.",
  keywords: [
    "how AI hiring works",
    "AI recruitment process",
    "CV ranking system",
    "WhatsApp hiring tool",
    "automated interview scheduling",
    "digital offer letter India",
    "employee onboarding AI",
    "hire to retire platform",
  ],
  openGraph: {
    title: "How Zorvis AI Works — End-to-End Hiring Flow",
    description:
      "From the first CV to final payslip on one platform. Rank in 3 minutes, test on WhatsApp, predict performance at 90 days. The system gets smarter with every hire.",
    url: "https://zorvis.ai/how-it-works",
    type: "website",
    images: [
      {
        url: "https://zorvis.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "How Zorvis AI Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Zorvis AI Works",
    description: "6-stage AI hiring flow. From CV to onboarded employee in days, not weeks.",
    images: ["https://zorvis.ai/og-image.png"],
  },
  alternates: {
    canonical: "https://zorvis.ai/how-it-works",
  },
};

// HowTo structured data — Google may show this as a step-by-step rich snippet
const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Hire with Zorvis AI",
  description:
    "Complete hiring workflow from posting a job to onboarding the new employee using Zorvis AI's hire-to-retire platform.",
  totalTime: "P6D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Post the Job",
      text: "Paste a job description or let AI generate one. Post simultaneously to Naukri, LinkedIn, Indeed, and your careers page from one screen.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI Ranks Every CV",
      text: "Every applicant scored against your role in under 3 minutes for 1,000 CVs. Top candidates surface in a Kanban view with composite score bands.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Send Aptitude Tests on WhatsApp",
      text: "Bulk-send tests to top candidates. 500-question bank per category. Email default, WhatsApp available, SMS fallback. Auto-scored within 60 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Schedule Interviews",
      text: "Top scorers surface with AI interview briefs. Candidates pick slots on their preferred channel. 24h and 1h auto-reminders.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Generate and Send Offers",
      text: "AI fills offer letters with candidate details (except salary, always manual). Sent on WhatsApp + email. Digitally signed on mobile with timestamp and IP.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Onboard the New Employee",
      text: "BGV clears, candidate becomes employee. Documents collected via WhatsApp. Day 1 chain auto-runs with welcome, NDA signing, IT asset request, and 30/60/90-day milestones.",
    },
  ],
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }}
      />
      {children}
    </>
  );
}

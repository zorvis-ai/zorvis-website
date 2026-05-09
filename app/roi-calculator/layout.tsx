import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiring ROI Calculator for India + UAE SMEs | Zorvis AI",
  description:
    "Calculate exactly how much time and money Zorvis would save your hiring team. Live calculator with conservative assumptions. Slide your CV volume, hires per month, and HR costs to see annual savings in seconds. No signup required.",
  keywords: [
    "hiring ROI calculator",
    "AI hiring savings",
    "CV screening cost calculator",
    "HR software ROI India",
    "recruitment cost calculator",
    "aptitude testing savings",
    "BPO hiring cost",
  ],
  openGraph: {
    title: "ROI Calculator — See Your Hiring Savings with Zorvis AI",
    description:
      "Live calculator with conservative assumptions. See exactly how much your team would save on screening time and testing costs.",
    url: "https://zorvis.ai/roi-calculator",
    type: "website",
    images: [
      {
        url: "https://zorvis.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zorvis AI ROI Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorvis AI Hiring ROI Calculator",
    description: "See your hiring savings in 30 seconds. No signup.",
    images: ["https://zorvis.ai/og-image.png"],
  },
  alternates: {
    canonical: "https://zorvis.ai/roi-calculator",
  },
};

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

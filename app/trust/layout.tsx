import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Security — DPDP, GDPR, AI Ethics | Zorvis AI",
  description:
    "How Zorvis protects your data: AES-256 encryption, India + UAE data residency, DPDP Act 2023 compliance, UAE PDPL ready, GDPR compliant. 16 non-negotiable AI ethics principles. AI ranks, humans decide. Always.",
  keywords: [
    "DPDP Act 2023 compliance",
    "UAE PDPL",
    "AI ethics hiring",
    "data residency Mumbai",
    "AI bias prevention",
    "blind-first ranking",
    "candidate data privacy India",
    "secure AI hiring",
  ],
  openGraph: {
    title: "Trust & Security at Zorvis AI",
    description:
      "16 non-negotiable AI principles. AES-256 encryption. Mumbai + Bahrain data residency. DPDP, GDPR, UAE PDPL compliant. AI ranks, humans decide. Always.",
    url: "https://zorvis.ai/trust",
    type: "website",
    images: [
      {
        url: "https://zorvis.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zorvis AI Trust & Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorvis AI — Trust & Security",
    description: "16 AI ethics principles. DPDP, GDPR, UAE PDPL compliant. AI ranks, humans decide.",
    images: ["https://zorvis.ai/og-image.png"],
  },
  alternates: {
    canonical: "https://zorvis.ai/trust",
  },
};

export default function TrustLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Hiring for High-Volume Industries — BPO, Retail, Manufacturing, Staffing | Zorvis",
  description:
    "Built for industries that hire at volume: BPO, contact centres, retail, QSR, logistics, staffing agencies, manufacturing, hospitality. Six industry-specific solutions for the hiring problems other tools were never designed to address.",
  keywords: [
    "BPO hiring software India",
    "high volume recruitment",
    "retail hiring tool",
    "staffing agency software",
    "manufacturing recruitment India",
    "logistics last mile hiring",
    "QSR staff hiring",
    "hospitality recruitment UAE",
    "contact centre hiring",
    "frontline workforce hiring",
  ],
  openGraph: {
    title: "Volume Hiring Solutions — Zorvis AI",
    description:
      "Industry-specific AI hiring tools for BPO, retail, logistics, staffing, manufacturing, and hospitality. Built for the hiring problems other tools were never designed to address.",
    url: "https://zorvis.ai/solutions/volume-hiring",
    type: "website",
    images: [
      {
        url: "https://zorvis.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zorvis Volume Hiring Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorvis — Built for High-Volume Hiring",
    description: "AI hiring for BPO, retail, manufacturing, logistics, staffing, hospitality.",
    images: ["https://zorvis.ai/og-image.png"],
  },
  alternates: {
    canonical: "https://zorvis.ai/solutions/volume-hiring",
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://zorvis.ai",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://zorvis.ai/solutions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Volume Hiring",
      item: "https://zorvis.ai/solutions/volume-hiring",
    },
  ],
};

export default function VolumeHiringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {children}
    </>
  );
}

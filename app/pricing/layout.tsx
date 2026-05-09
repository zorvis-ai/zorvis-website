import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — From Free Forever to Enterprise | Zorvis AI",
  description:
    "Permanent free tier with no credit card. Starter ₹4,999/mo. Growth ₹9,999/mo (most popular). Scale ₹19,999/mo. UAE pricing in AED. AI hiring intelligence at SME prices — 10% cheaper than competitors with structurally more capability.",
  keywords: [
    "AI hiring software pricing India",
    "Zorvis pricing",
    "free HR software India",
    "WhatsApp recruitment cost",
    "BPO hiring software price",
    "UAE HR platform pricing",
    "Zoho Recruit alternative",
    "Keka alternative pricing",
  ],
  openGraph: {
    title: "Zorvis AI Pricing — Free Forever, Pay When It Works",
    description:
      "Free tier permanent. ₹4,999 for Starter. ₹9,999 for Growth. AI hiring at SME prices, with the deepest feature set in the market.",
    url: "https://zorvis.ai/pricing",
    type: "website",
    images: [
      {
        url: "https://zorvis.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zorvis AI Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorvis AI Pricing",
    description: "Free forever tier. Paid plans from ₹4,999/month India / AED 299/month UAE.",
    images: ["https://zorvis.ai/og-image.png"],
  },
  alternates: {
    canonical: "https://zorvis.ai/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

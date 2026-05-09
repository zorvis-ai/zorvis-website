import "./globals.css";
 

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zorvis.ai"),
  title: {
    default: "Zorvis AI — People Intelligence Platform for India & UAE SMEs",
    template: "%s | Zorvis AI",
  },
  description:
    "AI-powered hiring, HR operations, and people intelligence for India and UAE SMEs. Rank 400 CVs in 3 minutes. Assessments on every channel. Digital offers. Free forever tier.",
  keywords: [
    "HR software India",
    "AI recruitment software India",
    "CV screening software",
    "aptitude test software India",
    "hiring software BPO",
    "HR software UAE",
    "WPS SIF software",
    "Emirates ID OCR",
    "HR platform SME India",
    "people intelligence platform",
    "AI hiring tool India",
    "recruitment automation India",
    "digital offer letter India",
    "HR software Dubai",
    "workforce management UAE",
  ],
  authors: [{ name: "Zorvis AI", url: "https://zorvis.ai" }],
  creator: "Zorvis AI Technologies Pvt Ltd",
  publisher: "Zorvis AI Technologies Pvt Ltd",

  // ── Favicons ─────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico",       sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_AE"],
    url: "https://zorvis.ai",
    siteName: "Zorvis AI",
    title: "Zorvis AI — People Intelligence Platform for India & UAE SMEs",
    description:
      "AI-powered hiring and HR operations. Rank 400 CVs in 3 minutes. Free forever tier. Built for India and UAE SMEs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zorvis AI — Hire. Manage. Grow. All powered by AI.",
      },
    ],
  },

  // ── Twitter ───────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Zorvis AI — People Intelligence Platform",
    description:
      "Rank 400 CVs in 3 minutes. AI hiring and HR OS for India and UAE SMEs. Free forever tier.",
    images: ["/og-image.png"],
    creator: "@zorvisai",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://zorvis.ai",
  },
};

// Structured data — Organisation schema
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Zorvis AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "AI-powered People Intelligence Platform for India and UAE SMEs. Hire, manage, and grow your team from one platform.",
  url: "https://zorvis.ai",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free forever starter plan",
  },
  publisher: {
    "@type": "Organization",
    name: "Zorvis AI Technologies Pvt Ltd",
    url: "https://zorvis.ai",
    sameAs: [
      "https://www.linkedin.com/company/zorvis-ai",
      "https://twitter.com/zorvisai",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <meta name="theme-color" content="#4F46E5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

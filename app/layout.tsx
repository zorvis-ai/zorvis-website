import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zorvis.ai"),
  title: {
    default:
      "Zorvis AI — Hire-to-Retire AI Platform for India & UAE SMEs",
    template: "%s | Zorvis AI",
  },
  description:
    "AI hiring platform built for SMEs in India and UAE. Rank 1,000 CVs in 3 minutes, send aptitude tests on WhatsApp, predict performance at 90 days. Free forever tier. Built specifically for high-volume hiring industries.",
  applicationName: "Zorvis AI",
  authors: [{ name: "Zorvis AI", url: "https://zorvis.ai" }],
  creator: "Zorvis AI Technologies Pvt Ltd",
  publisher: "Zorvis AI Technologies Pvt Ltd",
  category: "Business Software",
  keywords: [
    "AI hiring software India",
    "AI recruitment software India",
    "AI hiring software UAE",
    "WhatsApp recruitment platform",
    "BPO hiring software",
    "high volume recruitment India",
    "aptitude test platform India",
    "CV screening software AI",
    "WPS SIF software UAE",
    "Emirates ID OCR",
    "people intelligence platform",
    "hire to retire platform",
    "DPDP compliant HR software",
    "blue collar hiring software",
    "recruitment automation India",
    "digital offer letter India",
    "HR software Bangalore",
    "HR software Mumbai",
    "HR software Dubai",
    "Zoho Recruit alternative",
    "Keka alternative",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zorvis.ai",
    languages: {
      "en-IN": "https://zorvis.ai",
      "en-AE": "https://zorvis.ai",
      "x-default": "https://zorvis.ai",
    },
  },
  openGraph: {
    title: "Zorvis AI — People Intelligence Platform for India & UAE SMEs",
    description:
      "AI-powered hiring and HR operations. Rank 400 CVs in 3 minutes. Free forever tier. Built for India and UAE SMEs.",
    url: "https://zorvis.ai",
    siteName: "Zorvis AI",
    locale: "en_IN",
    alternateLocale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://zorvis.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zorvis AI — Hire. Manage. Grow. All powered by AI.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorvis AI — People Intelligence Platform",
    description:
      "Rank 400 CVs in 3 minutes. AI hiring and HR OS for India and UAE SMEs. Free forever tier.",
    site: "@zorvisai",
    creator: "@zorvisai",
    images: ["https://zorvis.ai/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Zorvis AI",
    statusBarStyle: "black-translucent",
  },
  verification: {
    // Add your Google Search Console verification token here once you set up GSC
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

// ─── ENRICHED STRUCTURED DATA ───
// SoftwareApplication schema — Google uses this for rich snippets in search

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://zorvis.ai/#organization",
  name: "Zorvis AI Technologies Pvt Ltd",
  alternateName: "Zorvis AI",
  url: "https://zorvis.ai",
  logo: {
    "@type": "ImageObject",
    url: "https://zorvis.ai/og-image.png",
    width: 1200,
    height: 630,
  },
  description:
    "AI-powered hire-to-retire People Intelligence Platform for SMEs in India and UAE.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Zorvis Founders",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "founder@zorvis.ai",
    availableLanguage: ["English", "Hindi", "Arabic"],
  },
  sameAs: [
    "https://www.linkedin.com/company/zorvis-ai",
    "https://twitter.com/zorvisai",
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://zorvis.ai/#software",
  name: "Zorvis AI",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Human Resources Software",
  operatingSystem: "Web, iOS, Android",
  description:
    "AI-powered hire-to-retire People Intelligence Platform. Rank 1,000 CVs in 3 minutes, send aptitude tests on WhatsApp, predict performance at 90 days, and manage employees through a single AI system.",
  url: "https://zorvis.ai",
  publisher: {
    "@id": "https://zorvis.ai/#organization",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Free Forever",
      price: "0",
      priceCurrency: "INR",
      description:
        "Permanent free tier with unlimited CV uploads, AI ranking with score bands, and industry benchmarks. No credit card required.",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "4999",
      priceCurrency: "INR",
      description:
        "Hiring pipeline + Kanban + basic HRMS. 25 employees included. 75 tests/month. ₹99 per additional employee.",
    },
    {
      "@type": "Offer",
      name: "Growth",
      price: "9999",
      priceCurrency: "INR",
      description:
        "Most popular plan. Includes Performance OKRs, Reviews, Team health. 100 employees. 300 tests/month. ₹79 per additional employee.",
    },
    {
      "@type": "Offer",
      name: "Scale",
      price: "19999",
      priceCurrency: "INR",
      description:
        "Full UAE compliance module, Payroll integration, Advanced analytics. 500 employees included. 750 tests/month. ₹59 per additional employee.",
    },
  ],
  featureList: [
    "AI CV ranking — 1,000 CVs in under 3 minutes",
    "Blind-first ranking — strips name, photo, address, graduation year",
    "Composite score bands (e.g., 68-74) not false-precision single numbers",
    "500-question aptitude bank per category",
    "WhatsApp test delivery with email and SMS fallback",
    "Anti-cheat with genuine consent — never auto-rejects",
    "Multi-board posting — Naukri, LinkedIn, Indeed, Bayt, GulfTalent",
    "Digital offer letters with mobile signing",
    "WPS SIF generation for UAE payroll",
    "Bilingual Arabic/English offer letters",
    "Emirates ID OCR",
    "DPDP Act 2023 compliant",
    "UAE PDPL ready",
    "Data residency: Mumbai for India, Bahrain for UAE",
  ],
  aggregateRating: undefined, // Add when you have customer reviews
  inLanguage: ["en", "hi", "ar"],
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
        {/* Performance — preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for Supabase + Vercel CDN */}
        <link rel="dns-prefetch" href="https://supabase.co" />

        {/* Structured data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Structured data — SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

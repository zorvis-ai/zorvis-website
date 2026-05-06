import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Zorvis AI — People Intelligence Platform",
  description:
    "Hire. Manage. Grow. All powered by AI. WhatsApp-native hiring and HR platform for India and UAE SMEs. 400 CVs ranked in 3 minutes. Free to start.",
  metadataBase: new URL("https://zorvis.ai"),
  openGraph: {
    title: "Zorvis AI — People Intelligence Platform",
    description: "Hire. Manage. Grow. All powered by AI.",
    url: "https://zorvis.ai",
    siteName: "Zorvis AI",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorvis AI",
    description: "AI-powered hiring for India & UAE SMEs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0E1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0C0E1A" }}>
        {children}
      </body>
    </html>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permanent 301 redirects for old/typo URLs
  async redirects() {
    return [
      {
        source: "/early-access",
        destination: "/waitlist",
        permanent: true,
      },
      {
        source: "/early-access/:slug*",
        destination: "/waitlist",
        permanent: true,
      },
      // Common typos/legacy URLs
      {
        source: "/signup",
        destination: "/waitlist",
        permanent: true,
      },
      {
        source: "/sign-up",
        destination: "/waitlist",
        permanent: true,
      },
      {
        source: "/get-started",
        destination: "/waitlist",
        permanent: true,
      },
      // Trailing-slash legal page variants
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
    ];
  },

  // Optional: existing config preserved here. If your repo has a current next.config.ts
  // with experimental flags, image domains, etc., MERGE those into this object before
  // overwriting. Do not blindly replace if you have custom settings — this file
  // assumes a vanilla Next.js 16 setup.
};

export default nextConfig;

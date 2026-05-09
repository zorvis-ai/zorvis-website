import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Don't crawl internal API routes or admin
        disallow: [
          "/api/",
          "/admin/",
          "/admin/dashboard",
          "/_next/",
          "/login",
        ],
      },
      // Allow Googlebot full access (it respects the global rules above)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/login"],
      },
      // Allow Bingbot full access
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/login"],
      },
    ],
    sitemap: "https://zorvis.ai/sitemap.xml",
    host: "https://zorvis.ai",
  };
}

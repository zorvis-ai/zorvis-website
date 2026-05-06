import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/api/", "/_next/"],
      },
    ],
    sitemap: "https://zorvis.ai/sitemap.xml",
    host: "https://zorvis.ai",
  };
}

import { MetadataRoute } from "next";
import { ALL_POSTS } from "./resources/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zorvis.ai";
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/product`,               lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/pricing`,               lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/use-cases`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/customers`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`,                 lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/waitlist`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resources`,             lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/resources/blog`,        lastModified: now, changeFrequency: "daily",   priority: 0.8 },
    { url: `${base}/resources/guides`,      lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
  ];

  // Dynamic blog posts
  const blogPages: MetadataRoute.Sitemap = ALL_POSTS.map((post) => ({
    url: `${base}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

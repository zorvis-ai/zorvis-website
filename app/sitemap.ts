import type { MetadataRoute } from "next";

const BASE_URL = "https://zorvis.ai";

// Last-modified date should be the most recent meaningful update across the site.
// Update this when shipping major content changes — Google uses lastModified to prioritise crawl.
const LAST_MAJOR_UPDATE = "2026-05-09";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ─── PRIMARY ACQUISITION PAGES ───
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/roi-calculator`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ─── PRODUCT + SOLUTIONS ───
    {
      url: `${BASE_URL}/product`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/solutions`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/solutions/volume-hiring`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/use-cases`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ─── TRUST + DOC PAGES ───
    {
      url: `${BASE_URL}/faq`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/trust`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ─── COMPANY ───
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/customers`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "weekly",
      priority: 0.65,
    },

    // ─── RESOURCES ───
    {
      url: `${BASE_URL}/resources`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources/blog`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/resources/templates`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/resources/guides`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ─── CONVERSION ───
    {
      url: `${BASE_URL}/waitlist`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ─── INDUSTRY ANCHOR PAGES (deep links to volume-hiring sections) ───
    // These have hash anchors but Google indexes them; helps capture industry-specific search
    {
      url: `${BASE_URL}/solutions/volume-hiring#bpo`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/solutions/volume-hiring#retail`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/solutions/volume-hiring#staffing`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/solutions/volume-hiring#manufacturing`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/solutions/volume-hiring#logistics`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/solutions/volume-hiring#hospitality`,
      lastModified: LAST_MAJOR_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

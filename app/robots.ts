import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://huzayms.vercel.app/sitemap.xml",

    host: "https://huzayms.vercel.app",
  };
}

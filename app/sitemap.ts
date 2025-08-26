import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ktthankiem.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tin-tuc`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/group`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // News articles
  const newsArticles = [
    "hoat-dong-bach-ho-duong",
    "hoat-dong-tieu-dao-coc",
    "hoat-dong-tong-kim",
    "hoat-dong-tan-thuy-hoang",
    "hoat-dong-hoa-ky-lan",
    "hoat-dong-tranh-doat-lanh-tho",
    "hoat-dong-bao-van-dong",
    "hoat-dong-vo-lam-lien-dau",
    "quan-doanh",
    "hoat-dong-san-boss",
    "doan-hoa-dang",
    "thuong-hoi",
    "hoat-dong-mon-phai-loan-phai",
    "hoat-dong-hoang-thanh-tranh-ba",
    "cac-loi-thuong-gap",
    "phuc-loi-nap-the",
  ].map((slug) => ({
    url: `${baseUrl}/tin-tuc/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...newsArticles];
}

const BASE_URL = "https://www.ladwa.com";

const staticRoutes = [
  "",
  "about",
  "solutions",
  "products",
  "projects",
  "contact-us",
  "certifications",
  "blog",
  "terms-privacy",
];

const importantRoutes = new Set(["", "products"]);

export default function sitemap() {
  const now = new Date().toISOString();

  return staticRoutes.map((path) => ({
    url: `${BASE_URL}${path ? `/${path}` : ""}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: importantRoutes.has(path) ? 1.0 : 0.7,
  }));
}

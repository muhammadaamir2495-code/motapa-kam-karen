import { posts } from "@/lib/posts";
import { siteUrl } from "@/lib/siteUrl";

export default function sitemap() {
  const staticRoutes = ["", "/blog", "/about", "/contact", "/privacy-policy", "/disclaimer"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes];
}

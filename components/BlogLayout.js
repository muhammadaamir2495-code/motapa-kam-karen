import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRelatedPosts, posts } from "@/lib/posts";
import { siteUrl } from "@/lib/siteUrl";

export default function BlogLayout({ title, subtitle, slug, children }) {
  const relatedPosts = getRelatedPosts(slug);
  const heroImage = posts.find((post) => post.slug === slug)?.image;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: subtitle,
    url: `${siteUrl}/blog/${slug}`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "MeraSehat",
      url: siteUrl,
    },
  };

  return (
    <main className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <article className="max-w-2xl mx-auto px-5 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">Articles</Link>
          <span>/</span>
          <span className="text-ink/70">{title}</span>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-3">{title}</h1>
        {subtitle && <p className="text-muted text-[17px] mb-6">{subtitle}</p>}
        {heroImage && (
          <Image
            src={heroImage}
            alt={title}
            width={800}
            height={450}
            priority
            className="w-full h-auto rounded-2xl border border-line mb-8"
          />
        )}
        <div className="prose-content space-y-5 text-[16px] leading-relaxed text-ink/90">
          {children}
        </div>

        <div className="mt-12 rounded-2xl bg-primary-light px-6 py-7 text-center">
          <p className="font-display text-xl text-primary-dark mb-2">Apna personal plan chahiye?</p>
          <p className="text-ink/80 text-[15px] mb-4">
            Apni umar, routine aur skin type ke hisaab se free plan 2 minute mein banayen.
          </p>
          <Link
            href="/#tool"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-white hover:bg-primary-dark transition"
          >
            Free Plan Banayen
          </Link>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Continue reading</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-line bg-white px-4 py-4 hover:border-primary transition"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full h-auto rounded-lg mb-3"
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{post.category}</span>
                <h2 className="font-display text-lg text-ink mt-2 leading-snug">{post.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

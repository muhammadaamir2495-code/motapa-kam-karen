import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Articles — MeraSehat",
  description: "Weight loss, diet aur skin care ke tips — Roman Urdu mein.",
};

const categories = [
  { id: "diet", label: "Diet", items: posts.filter((post) => post.category === "Diet") },
  { id: "skin", label: "Skin", items: posts.filter((post) => post.category === "Skin") },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-bg">
      <header className="border-b border-line bg-surface/70 backdrop-blur">
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-lg text-ink">MeraSehat</Link>
          <Link href="/#tool" className="text-sm font-medium text-primary hover:text-primary-dark">
            Free Plan Banayen
          </Link>
        </div>
      </header>

      <section className="max-w-2xl mx-auto px-5 py-12">
        <h1 className="font-display text-3xl sm:text-4xl text-ink mb-5">Sab Articles</h1>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:border-primary transition"
            >
              {category.label}
            </Link>
          ))}
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="space-y-4">
              <h2 className="font-display text-2xl text-ink">{category.label}</h2>
              <div className="space-y-5">
                {category.items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block rounded-xl border border-line bg-white px-5 py-5 hover:border-primary transition"
                  >
                    <span className="text-xs font-semibold tracking-wide text-primary uppercase">{p.category}</span>
                    <h3 className="font-display text-xl text-ink mt-1 mb-1.5">{p.title}</h3>
                    <p className="text-[15px] text-muted">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <p className="text-center text-xs text-muted">MeraSehat — general guidance only, medical advice nahi.</p>
      </footer>
    </main>
  );
}

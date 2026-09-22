import Link from "next/link";

export const metadata = {
  title: "Articles — MeraSehat",
  description: "Weight loss, diet aur skin care ke tips — Roman Urdu mein.",
};

const posts = [
  {
    slug: "pet-ki-charbi-kaise-kam-kare",
    title: "Pet Ki Charbi Kaise Kam Kare",
    excerpt: "Sirf crunches se nahi — pet ki charbi kam karne ka asli, step-by-step tarika.",
    category: "Diet",
  },
  {
    slug: "motapa-kaise-kam-kare",
    title: "Motapa Kaise Kam Kare",
    excerpt: "Crash diet ke bina, sustainable tarike se wazan kam karen.",
    category: "Diet",
  },
  {
    slug: "weight-loss-diet-plan",
    title: "Weight Loss Diet Plan",
    excerpt: "Ek din ka sample chart jo follow karna asaan ho.",
    category: "Diet",
  },
  {
    slug: "hand-cream-dry-skin-ke-liye",
    title: "Dry Hands Ke Liye Sahi Hand Cream Routine",
    excerpt: "Baar baar hath dhone se hone wali dryness ka ilaj.",
    category: "Skin",
  },
  {
    slug: "combination-skin-care-routine",
    title: "Combination Skin Care Routine",
    excerpt: "Jab T-zone oily ho lekin gaal dry — zone-based routine.",
    category: "Skin",
  },
  {
    slug: "facewash-dry-skin-ke-liye",
    title: "Dry Skin Ke Liye Sahi Facewash",
    excerpt: "Galat facewash dryness ko aur barha sakta hai — kya dekhna chahiye.",
    category: "Skin",
  },
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
        <h1 className="font-display text-3xl sm:text-4xl text-ink mb-8">Sab Articles</h1>
        <div className="space-y-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block rounded-xl border border-line bg-white px-5 py-5 hover:border-primary transition"
            >
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">{p.category}</span>
              <h2 className="font-display text-xl text-ink mt-1 mb-1.5">{p.title}</h2>
              <p className="text-[15px] text-muted">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <p className="text-center text-xs text-muted">MeraSehat — general guidance only, medical advice nahi.</p>
      </footer>
    </main>
  );
}

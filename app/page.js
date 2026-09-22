"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import PlanForm from "@/components/PlanForm";
import PlanResult from "@/components/PlanResult";
import { generatePlan } from "@/lib/generatePlan";

const featuredPosts = [
  { slug: "pet-ki-charbi-kaise-kam-kare", title: "Pet Ki Charbi Kaise Kam Kare" },
  { slug: "motapa-kaise-kam-kare", title: "Motapa Kaise Kam Kare" },
  { slug: "hand-cream-dry-skin-ke-liye", title: "Dry Hands Ke Liye Sahi Hand Cream Routine" },
];

export default function Home() {
  const [plan, setPlan] = useState(null);
  const resultRef = useRef(null);

  function handleGenerate(formValues) {
    const result = generatePlan(formValues);
    setPlan(result);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <main className="min-h-screen bg-bg">
      <header className="no-print border-b border-line bg-surface/70 backdrop-blur">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <span className="font-display text-lg text-ink">MeraSehat</span>
          <Link href="/blog" className="text-sm font-medium text-primary hover:text-primary-dark">
            Articles
          </Link>
        </div>
      </header>

      <section className="no-print max-w-3xl mx-auto px-5 pt-14 pb-10">
        <p className="text-accent font-semibold text-sm tracking-wide mb-3">
          Free diet &amp; skin care planner
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-5">
          Motapa kam karen, skin ka khayal rakhen — sab ek jagah.
        </h1>
        <p className="text-ink/70 text-[17px] leading-relaxed max-w-xl">
          Apni umar, routine, sone jagne ka waqt aur skin type bharen — plan foran ban kar niche aa
          jayega. Print ya PDF ke tor pe save bhi kar sakte hain.
        </p>
      </section>

      <section id="tool" className="no-print max-w-3xl mx-auto px-5 pb-16">
        <div className="rounded-2xl border border-line bg-white shadow-sm px-6 py-7 sm:px-10 sm:py-9">
          <PlanForm onGenerate={handleGenerate} />
        </div>
      </section>

      {plan && (
        <section ref={resultRef} className="max-w-3xl mx-auto px-5 pb-20">
          <div className="no-print flex justify-end mb-4">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-primary hover:text-primary transition"
            >
              PDF ke tor pe save / print karen
            </button>
          </div>
          <PlanResult plan={plan} />
        </section>
      )}

      <section className="no-print max-w-3xl mx-auto px-5 pb-20">
        <h2 className="font-display text-2xl text-ink mb-5">Latest Articles</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {featuredPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block rounded-xl border border-line bg-white px-5 py-5 hover:border-primary transition"
            >
              <p className="font-display text-[17px] text-ink leading-snug">{p.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <Link href="/blog" className="text-sm font-medium text-primary hover:text-primary-dark">
            Sab articles dekhen →
          </Link>
        </div>
      </section>

      <footer className="no-print border-t border-line py-8">
        <p className="text-center text-xs text-muted">
          MeraSehat — general guidance only, medical advice nahi.
        </p>
      </footer>
    </main>
  );
}

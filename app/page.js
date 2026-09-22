"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PlanForm from "@/components/PlanForm";
import PlanResult from "@/components/PlanResult";
import InchesToCmConverter from "@/components/InchesToCmConverter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generatePlan } from "@/lib/generatePlan";
import { posts } from "@/lib/posts";

const featuredPosts = posts.slice(0, 3);

export default function Home() {
  const [plan, setPlan] = useState(null);
  const [presetHeightCm, setPresetHeightCm] = useState(null);
  const resultRef = useRef(null);

  function handleConvertedHeight(cm) {
    setPresetHeightCm(cm);
    document.getElementById("heightCm")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function handleGenerate(formValues) {
    const result = generatePlan(formValues);
    setPlan(result);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <main className="min-h-screen bg-bg">
      <Header />

      <section className="no-print max-w-3xl mx-auto px-5 pt-14 pb-10 grid sm:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
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
        </div>
        <Image
          src="/images/hero-plan.webp"
          alt="MeraSehat free diet and skin care plan tool"
          width={800}
          height={450}
          priority
          className="hidden sm:block w-56 h-auto rounded-2xl border border-line"
        />
      </section>

      <section id="tool" className="no-print max-w-3xl mx-auto px-5 pb-16">
        <InchesToCmConverter onConvert={handleConvertedHeight} />
        <div className="rounded-2xl border border-line bg-white shadow-sm px-6 py-7 sm:px-10 sm:py-9">
          <PlanForm onGenerate={handleGenerate} presetHeightCm={presetHeightCm} />
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <h2 className="font-display text-2xl text-ink">Latest Articles</h2>
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            <Link href="/blog#diet" className="rounded-full border border-line bg-white px-3 py-1.5 text-primary hover:border-primary transition">
              Diet
            </Link>
            <Link href="/blog#skin" className="rounded-full border border-line bg-white px-3 py-1.5 text-primary hover:border-primary transition">
              Skin
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {featuredPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block rounded-xl border border-line bg-white px-5 py-5 hover:border-primary transition"
            >
              <Image
                src={p.image}
                alt={p.title}
                width={400}
                height={225}
                className="w-full h-auto rounded-lg mb-3"
              />
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{p.category}</p>
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

      <Footer />
    </main>
  );
}

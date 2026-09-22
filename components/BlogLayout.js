import Link from "next/link";

export default function BlogLayout({ title, subtitle, children }) {
  return (
    <main className="min-h-screen bg-bg">
      <header className="border-b border-line bg-surface/70 backdrop-blur">
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-lg text-ink">MeraSehat</Link>
          <Link href="/blog" className="text-sm font-medium text-primary hover:text-primary-dark">
            Sab Articles
          </Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-5 py-12">
        <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-3">{title}</h1>
        {subtitle && <p className="text-muted text-[17px] mb-8">{subtitle}</p>}
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
      </article>

      <footer className="border-t border-line py-8">
        <p className="text-center text-xs text-muted">
          MeraSehat — general guidance only, medical advice nahi.
        </p>
      </footer>
    </main>
  );
}

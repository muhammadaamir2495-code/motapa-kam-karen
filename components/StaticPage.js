import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StaticPage({ title, subtitle, children }) {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <article className="max-w-2xl mx-auto px-5 py-12">
        <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-3">{title}</h1>
        {subtitle && <p className="text-muted text-[17px] mb-8">{subtitle}</p>}
        <div className="prose-content space-y-5 text-[16px] leading-relaxed text-ink/90">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="no-print border-b border-line bg-surface/70 backdrop-blur">
      <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-lg text-ink">MeraSehat</Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/blog" className="text-ink/70 hover:text-primary transition">
            Articles
          </Link>
          <Link href="/about" className="hidden sm:inline text-ink/70 hover:text-primary transition">
            About
          </Link>
          <Link href="/#tool" className="text-primary hover:text-primary-dark transition">
            Free Plan
          </Link>
        </nav>
      </div>
    </header>
  );
}

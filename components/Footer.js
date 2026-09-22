import Link from "next/link";

export default function Footer() {
  return (
    <footer className="no-print border-t border-line py-10">
      <div className="max-w-3xl mx-auto px-5">
        <p className="text-center text-xs text-muted max-w-xl mx-auto mb-5 leading-relaxed">
          MeraSehat sirf general information ke liye hai, medical advice nahi — is content ko
          serious treatment ka replacement na samjhein. Koi bhi health se juda masla ho to
          qualified doctor ya dermatologist se rabta karen.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted mb-4">
          <Link href="/about" className="hover:text-primary transition">About Us</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact Us</Link>
          <Link href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-primary transition">Disclaimer</Link>
        </div>
        <p className="text-center text-[11px] text-muted/70">
          © {new Date().getFullYear()} MeraSehat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

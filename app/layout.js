import Script from "next/script";
import { Poppins, Inter } from "next/font/google";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "MeraSehat — Weight Loss, Diet Plan & Skin Care Tips",
  description:
    "Motapa kam karne, pet ki charbi ghatane aur skin care ke liye free tips, diet plans aur apna personal sehat plan banane ka tool — Roman Urdu mein.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MeraSehat",
    title: "MeraSehat — Weight Loss, Diet Plan & Skin Care Tips",
    description:
      "Motapa kam karne, pet ki charbi ghatane aur skin care ke liye free tips, diet plans aur apna personal sehat plan banane ka tool — Roman Urdu mein.",
  },
  twitter: {
    card: "summary",
    title: "MeraSehat — Weight Loss, Diet Plan & Skin Care Tips",
    description:
      "Motapa kam karne, pet ki charbi ghatane aur skin care ke liye free tips, diet plans aur apna personal sehat plan banane ka tool — Roman Urdu mein.",
  },
  verification: {
    google: "k5D17dwAHpaXUjlB20XPV5jXvFEsrlpGFt-R-HNAUAk",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MeraSehat",
  url: siteUrl,
  description:
    "Free Roman Urdu diet, weight-loss aur skin-care planner tool aur guides for Pakistani/Indian users.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MeraSehat",
  url: siteUrl,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body">
        <Script id="organization-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="website-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
        {children}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

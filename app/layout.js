import { Poppins, Inter } from "next/font/google";
import "./globals.css";

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
  title: "MeraSehat — Weight Loss, Diet Plan & Skin Care Tips",
  description:
    "Motapa kam karne, pet ki charbi ghatane aur skin care ke liye free tips, diet plans aur apna personal sehat plan banane ka tool — Roman Urdu mein.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}

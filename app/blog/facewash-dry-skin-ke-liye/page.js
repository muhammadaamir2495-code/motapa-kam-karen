import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "Dry Skin Ke Liye Sahi Facewash Kaise Chunein | MeraSehat",
  description:
    "Galat facewash dry skin ko aur kharab kar deta hai. Kya dekhna chahiye aur kya avoid karna chahiye.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Dry Skin Ke Liye Sahi Facewash"
      subtitle="Galat facewash dryness ko aur barha sakta hai"
    >
      <p>
        Agar mooh dhone ke foran baad skin tight ya khinchti hui feel ho, ye sign hai ke facewash
        zaroorat se zyada strip kar raha hai. Dry skin ke liye ye galat choice hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Kya dekhna chahiye</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>Cream-based ya hydrating cleanser</strong> — foaming/gel cleansers usually zyada strip karte hain</li>
        <li>Ingredients mein glycerin, hyaluronic acid, ya ceramide</li>
        <li>"Soap-free" label — regular soap ka pH skin ke liye harsh hota hai</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-2">Kya avoid karein</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Strong foaming facewash jo bohat zyada jhaag bnaye</li>
        <li>Alcohol-based products</li>
        <li>Bohat garam paani se mooh dhona</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-2">Use karne ka sahi tareeqa</h2>
      <ol className="list-decimal pl-5 space-y-1.5">
        <li>Gunguna paani se mooh geela karen</li>
        <li>Thori si quantity use karen, halke hathon se massage karen — rgarna nahi</li>
        <li>Achi tarah dho lein aur turant (1-2 minute ke andar) moisturizer lagayen</li>
      </ol>

      <h2 className="font-display text-xl text-ink pt-2">Din mein kitni baar dhoyen</h2>
      <p>
        Dry skin ke liye din mein sirf 1-2 baar (subah aur raat) kafi hai. Baar baar dhona
        natural oils ko aur kam kar deta hai.
      </p>
    </BlogLayout>
  );
}

import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "Combination Skin Care Routine — Step by Step | MeraSehat",
  description:
    "T-zone oily aur gaal dry — combination skin ka sahi routine kya hona chahiye, step by step.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Combination Skin Care Routine"
      subtitle="Jab T-zone oily ho lekin gaal dry — ye sabse confusing skin type hai"
    >
      <p>
        Combination skin ka matlab hai forehead, naak aur thori (T-zone) oily rehti hai, jabke
        gaal (cheeks) normal ya dry rehte hain. Iski wajah se ek hi product poori face ke liye
        kabhi kaam nahi karta — isi liye zone-based approach chahiye.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Cleansing</h2>
      <p>
        Din mein 2 baar (subah, raat) mild, gel-based cleanser use karen. Bohat harsh ya bohat
        oily cleanser dono avoid karen — dono extremes skin ko aur imbalance kar dete hain.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Moisturizer: Zone se zone alag</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>T-zone (forehead, naak, thori):</strong> halka, oil-free gel moisturizer</li>
        <li><strong>Gaal:</strong> thora zyada rich cream, khaas kar sardiyon mein</li>
      </ul>
      <p>Ye alag alag apply karna thora time leta hai lekin farq clearly dikhta hai.</p>

      <h2 className="font-display text-xl text-ink pt-2">Sunscreen kabhi skip na karen</h2>
      <p>
        Combination skin ke liye gel-based ya matte-finish sunscreen behtar rehta hai — ye T-zone
        ko extra oily nahi banata.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Hafte mein ek baar</h2>
      <p>
        Halka exfoliation (scrub ya mild chemical exfoliant) hafte mein sirf 1 baar kafi hai. Zyada
        exfoliate karna skin ka barrier kamzor kar deta hai, jisse T-zone aur zyada oil banane lagta
        hai.
      </p>
    </BlogLayout>
  );
}

import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "High Protein Vegetarian Diet — Muscle Gain Ke Liye | MeraSehat",
  description:
    "Bina meat ke bhi muscle gain mumkin hai — vegetarian aur vegan protein sources aur ek din ka sample high-protein diet plan.",
  alternates: { canonical: "/blog/high-protein-vegetarian-diet-muscle-gain" },
};

export default function Page() {
  return (
    <BlogLayout
      slug="high-protein-vegetarian-diet-muscle-gain"
      title="High Protein Vegetarian Diet — Muscle Gain Ke Liye"
      subtitle="Non-veg na khayen to bhi protein target pura ho sakta hai"
    >
      <p>
        Sabse aam galat fehmi ye hai ke bina chicken ya anday ke muscle gain nahi ho sakta.
        Haqeeqat mein vegetarian aur vegan dono diets mein kaafi protein sources maujood hain —
        bas thora planning chahiye.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Vegetarian protein sources</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Paneer — 100g mein taqreeban 18g protein</li>
        <li>Dal (masoor, chana, moong) — roz ki diet ka base bana sakte hain</li>
        <li>Dahi / Greek yogurt — protein ke sath gut health ke liye bhi acha</li>
        <li>Soya chunks — sabse zyada protein-dense vegetarian options mein se ek</li>
        <li>Sprouts — halka lekin roz add karne layak</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-2">Vegan protein sources (bina dairy)</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Tofu</li>
        <li>Dal aur chana</li>
        <li>Soya chunks aur soya doodh</li>
        <li>Badaam, mumphali, aur mewa (thori matra mein, calorie-dense hote hain)</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-2">Ek din ka sample high-protein plate</h2>
      <p>
        Nashta: oats + mewa (ya vegan ke liye soya doodh ke sath). Lunch: dal/paneer + roti + sabzi
        + salad. Shaam: sprouts chaat ya bhuna chana. Dinner: grilled paneer/tofu + dal + sabzi,
        halka rakhen.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Diet ke sath exercise zaroori</h2>
      <p>
        Sirf protein khane se muscle nahi banta — halki strength training (bodyweight exercises ya
        light weights) hafte mein 3-4 din zaroori hai. Diet aur exercise dono sath chalne chahiye.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Apna exact target kaise pata karen?</h2>
      <p>
        Protein ki zaroorat aap ke wazan aur goal pe depend karti hai. Neeche diye tool mein apni
        details aur "Muscle tone banana" goal chun kar apna personalized calorie aur meal timing
        plan bana sakte hain — veg, vegan ya jain, jo bhi aap ki pasand ho.
      </p>
    </BlogLayout>
  );
}

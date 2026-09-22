import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "Weight Loss Diet Plan — Ek Din Ka Sample Chart | MeraSehat",
  description:
    "Ek simple, follow karne mein asaan weight loss diet plan — nashta, lunch, dinner aur snacks ka poora breakdown.",
  alternates: { canonical: "/blog/weight-loss-diet-plan" },
};

export default function Page() {
  return (
    <BlogLayout
      slug="weight-loss-diet-plan"
      title="Weight Loss Diet Plan"
      subtitle="Ek din ka sample chart jo follow karna asaan ho"
    >
      <p>
        Har insaan ki umar, routine aur activity level alag hoti hai, is liye ek hi diet plan sab
        ke liye kaam nahi karta. Lekin ek general structure sabke liye kaam ka hai — yahan ek
        sample din ka breakdown hai jise aap apni zaroorat ke hisaab se adjust kar sakte hain.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Nashta</h2>
      <p>2 ubay anday ya 1 katori oats, sath 1 fruit. Protein subah lena pait ko der tak bhara rakhta hai.</p>

      <h2 className="font-display text-xl text-ink pt-2">Mid-morning snack</h2>
      <p>Mutthi bhar badaam ya bhuna chana — bhook control mein rehti hai, agla meal overeat nahi hota.</p>

      <h2 className="font-display text-xl text-ink pt-2">Lunch</h2>
      <p>
        1-2 roti ya 1 katori chawal, sath dal/chicken/paneer, aur zyada matra mein salad. Plate ka
        aadha hissa sabzi/salad, chothai protein, chothai carbs — ye ratio yaad rakhna kafi hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Shaam ka snack</h2>
      <p>Sprouts chaat ya green tea ke sath makhana — fried snacks ki jagah ye lein.</p>

      <h2 className="font-display text-xl text-ink pt-2">Dinner</h2>
      <p>
        Halka rakhen — grilled chicken/paneer/dal + sabzi, roti 1 se zyada nahi, chawal avoid. Jald
        khayen, sotay se 3 ghante pehle.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Ye plan personalize kaise karen?</h2>
      <p>
        Upar diya gaya chart ek general template hai. Actual calorie zaroorat aap ki umar, wazan,
        qad aur daily routine (desk job ho ya khari duty) pe depend karti hai — neeche diye tool se
        apni details daal kar apna khaas plan bana sakte hain.
      </p>
    </BlogLayout>
  );
}

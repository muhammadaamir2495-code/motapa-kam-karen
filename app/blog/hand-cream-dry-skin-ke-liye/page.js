import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "Dry Hands Ke Liye Sahi Hand Cream Routine | MeraSehat",
  description:
    "Baar baar hath dhone se hone wali dryness ka ilaj — sahi hand cream aur routine jo waqai kaam karta hai.",
  alternates: { canonical: "/blog/hand-cream-dry-skin-ke-liye" },
};

export default function Page() {
  return (
    <BlogLayout
      slug="hand-cream-dry-skin-ke-liye"
      title="Dry Hands Ke Liye Sahi Hand Cream Routine"
      subtitle="Khaas un logon ke liye jo din mein baar baar hath dhote hain"
    >
      <p>
        Nurses, doctors, ghar ka kaam karne wali khawateen, ya koi bhi jo din mein bohat baar hath
        dhota hai — sabko yeh masla pata hai: hath dry ho jate hain, skin phatne lagti hai, kabhi
        kabhi khujli bhi hoti hai. Wajah simple hai: baar baar paani aur soap lagne se hath ka
        natural oil khatam ho jata hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Sahi hand cream kaise chunein</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Lotion se zyada <strong>cream ya balm-based</strong> product behtar hai — thicker formula zyada der tak protect karta hai</li>
        <li>Ingredients mein shea butter, glycerin, ya ceramide dekhen</li>
        <li>Fragrance-free version behtar hai agar skin sensitive ho</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-2">Routine jo asal mein farq dalta hai</h2>
      <ol className="list-decimal pl-5 space-y-1.5">
        <li>Har hath dhone ke <strong>foran baad</strong> cream lagayen — jitni jaldi lagayenge utna behtar seal hoga</li>
        <li>Chota travel-size cream apne bag ya pocket mein rakhen taake baar baar lagana mumkin ho</li>
        <li>Raat ko sonay se pehle heavy cream lagayen aur chahen to cotton gloves pehen kar sonay se overnight repair aur behtar hoti hai</li>
        <li>Gunguna paani use karen hath dhone ke liye, zyada garam paani avoid karen</li>
      </ol>

      <h2 className="font-display text-xl text-ink pt-2">Agar sirf cream se farq na pare</h2>
      <p>
        Agar dryness ke sath skin phat rahi ho, khoon nikal raha ho, ya khujli bohat zyada ho, to
        ye sirf normal dryness nahi ho sakti — kisi skin specialist se ek baar check karwana behtar
        hoga.
      </p>
    </BlogLayout>
  );
}

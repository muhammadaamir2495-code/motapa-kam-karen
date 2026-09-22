import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "Acne-Prone Skin Ke Liye Sahi Routine | MeraSehat",
  description:
    "Pimples baar baar ho rahe hain? Acne-prone skin ke liye kya use karen, kya avoid karen — simple routine.",
};

export default function Page() {
  return (
    <BlogLayout
      slug="acne-prone-skin-care-routine"
      title="Acne-Prone Skin Ke Liye Sahi Routine"
      subtitle="Sahi products aur aadatein — jaldi results ke chakkar mein skin kharab na karen"
    >
      <p>
        Acne-prone skin ka matlab hai ke pimples baar baar hotay hain, khaas kar forehead, naak
        aur thori pe. Jaldi result chahne mein log aksar aise products use karte hain jo skin ko
        aur irritate kar dete hain — routine slow lekin consistent hona chahiye.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Cleansing</h2>
      <p>
        Din mein sirf 2 baar (subah, raat) mooh dhoyen. Zyada baar dhona natural oil khatam karta
        hai, jisse skin aur zyada oil banane lagti hai — ulta effect hota hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Moisturizer skip na karen</h2>
      <p>
        Bohat se log sochte hain moisturizer acne barhata hai — ulta, moisturizer skip karna skin
        ko dry kar deta hai jo acne ko aur trigger karta hai. Non-comedogenic (pores block na
        karne wala) label wala light, gel-based moisturizer use karen.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Active ingredients: ek waqt mein ek</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Salicylic acid — pores clean karta hai, blackheads/whiteheads ke liye acha</li>
        <li>Benzoyl peroxide — acne-causing bacteria kam karta hai</li>
      </ul>
      <p>
        Dono ek sath, ek hi din use na karen — isse skin irritate ho sakti hai. Ek se start karen,
        dekhen skin kaise react karti hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Sabse zaroori aadat: haath na lagayen</h2>
      <p>
        Pimple ko dabana, cheelna ya baar baar chhoona scarring aur naye breakouts ka sabse bara
        sabab hai. Jitna kam touch karenge, utni jaldi theek hoga.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Diet ka bhi asar hota hai</h2>
      <p>
        Zyada cheeni aur fried khana kuch logon mein acne trigger karta hai. Agar pattern notice ho
        to apna diet bhi review karen — neeche diye tool se apna plan bana sakte hain.
      </p>

      <p className="text-muted text-[14px] pt-2">
        Agar acne severe ho ya scarring ho rahi ho, to home routine se pehle ek dermatologist se
        consult karna behtar hoga.
      </p>
    </BlogLayout>
  );
}

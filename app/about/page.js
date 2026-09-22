import StaticPage from "@/components/StaticPage";

export const metadata = {
  title: "About Us — MeraSehat",
  description: "MeraSehat kya hai aur kyun banaya gaya — humara maqsad aur is site ki limits.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <StaticPage title="About Us" subtitle="MeraSehat ke baare mein">
      <p>
        MeraSehat ek free, independent website hai jo Pakistan aur India ke logon ke liye Roman
        Urdu mein practical diet aur skin care guidance deti hai. Is site ka maqsad simple hai:
        wazan kam karna, pet ki charbi ghatana aur skin ka khayal rakhna — bina confusing jargon
        ya expensive consultations ke.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Humara maqsad</h2>
      <p>
        Zyada tar health websites ya English mein hoti hain ya bohat technical zaban istemal
        karti hain. MeraSehat un logon ke liye banayi gayi hai jo apni rozmarra ki zaban (Roman
        Urdu) mein seedhi, samajhne mein asaan guidance chahte hain — chahe woh belly fat kam
        karna ho ya dry skin ka masla hal karna.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Free Plan Tool</h2>
      <p>
        Homepage par diya gaya planner tool aapki umar, routine, sone-jagne ka waqt aur skin
        type ke hisaab se ek personalized diet aur skincare plan banata hai. Yeh tool poora
        aapke browser mein hi chalta hai — koi data kisi server par save nahi hota.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Yeh site kya nahi hai</h2>
      <p>
        MeraSehat kisi doctor, dietitian ya clinic ki jagah nahi leta. Yahan diya gaya content
        general lifestyle information hai, medical diagnosis ya treatment nahi. Zyada details ke
        liye humara <a href="/disclaimer" className="text-primary hover:text-primary-dark underline">Disclaimer</a> zaroor
        parhein.
      </p>

      <p>
        Koi sawal ya suggestion ho to <a href="/contact" className="text-primary hover:text-primary-dark underline">Contact Us</a> page
        se humein bata sakte hain.
      </p>
    </StaticPage>
  );
}

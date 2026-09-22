import StaticPage from "@/components/StaticPage";

export const metadata = {
  title: "Privacy Policy — MeraSehat",
  description: "MeraSehat aapki information ke saath kya karta hai — poori transparency ke saath.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPage title="Privacy Policy" subtitle="Last updated: 2026">
      <p>
        Yeh Privacy Policy batati hai ke MeraSehat (&quot;yeh website&quot;) aapki information ke
        saath kya karta hai jab aap is site ko istemal karte hain.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Planner tool ka data</h2>
      <p>
        Homepage par diya gaya diet &amp; skin care planner tool poora aapke browser (device) mein
        hi chalta hai. Jo bhi umar, qad, wazan ya routine aap is form mein bharte hain, woh kisi
        server ko bheja ya save nahi kiya jata — plan turant aapke browser mein hi generate hota
        hai. Koi account, login ya signup zaroori nahi hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Analytics</h2>
      <p>
        Website ko behtar banane ke liye hum Google Analytics (GA4) istemal kar sakte hain, jo
        anonymized usage data — jaise ke kaunse pages visit hue, device/browser type, aur
        approximate location — cookies ke zariye collect karta hai. Yeh data sirf yeh samajhne ke
        liye istemal hota hai ke site kaise use ho rahi hai; ismein aapki koi personally
        identifiable ya health-related information shamil nahi hoti. Zyada details ke liye{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark underline"
        >
          Google&apos;s Privacy Policy
        </a>{" "}
        dekhein.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Ads aur affiliate links</h2>
      <p>
        MeraSehat is free tool ko maintain rakhne ke liye future mein Google AdSense jaisi ad
        services ya affiliate links istemal kar sakta hai. Agar aisa hota hai, to third-party ad
        providers apne cookies ke zariye interest-based ads dikhane ke liye data collect kar
        sakte hain — is soorat mein yeh policy update ki jayegi.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Third-party links</h2>
      <p>
        Is site ke articles mein diye gaye kisi bhi third-party link ki content ya privacy
        practices ke liye MeraSehat zimmedar nahi hai — un sites ki apni privacy policies parhein.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Bachon ki privacy</h2>
      <p>
        Yeh website 13 saal se kam umar ke bachon ke liye nahi banayi gayi, aur hum jaante hue
        aise kisi bachon ka data collect nahi karte.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Policy mein tabdeeli</h2>
      <p>
        Yeh Privacy Policy waqt ke saath update ho sakti hai. Koi bhi badi tabdeeli is page par
        reflect kar di jayegi.
      </p>

      <p>
        Privacy se juda koi sawal ho to{" "}
        <a href="/contact" className="text-primary hover:text-primary-dark underline">Contact Us</a> page
        ke zariye humse rabta karen.
      </p>
    </StaticPage>
  );
}

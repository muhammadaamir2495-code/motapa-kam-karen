import StaticPage from "@/components/StaticPage";

export const metadata = {
  title: "Disclaimer — MeraSehat",
  description: "MeraSehat par diya gaya content sirf general information ke liye hai, medical advice nahi.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <StaticPage title="Disclaimer" subtitle="Please is page ko dhyan se parhein">
      <p>
        MeraSehat (is website) par maujood tamam content — articles, tips aur planner tool ka
        output — sirf general information aur awareness ke maqsad se diya gaya hai. Ise{" "}
        <strong>medical advice, diagnosis ya treatment</strong> na samjhein.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Yeh professional advice ka replacement nahi</h2>
      <p>
        Is site ka koi bhi content — diet tips, skin care routines ya planner tool ka
        calculation — kisi qualified doctor, dermatologist ya registered dietitian ki advice ka
        replacement nahi hai. Har insaan ka jism, health history aur zaroorat alag hoti hai, is
        liye yahan diya gaya general advice sab ke liye equally applicable nahi ho sakta.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Agar koi masla ho to doctor se milen</h2>
      <p>
        Agar aapko koi health se juda masla, mojooda medical condition, ya koi bhi symptom hai
        jo aapko pareshan kar raha hai, to is site ki information par amal karne se pehle ek
        qualified doctor ya dermatologist se rabta karen. Pregnancy, diabetes, thyroid, PCOS,
        dil ki bimari ya kisi bhi chronic condition ki soorat mein khud se koi diet ya skin care
        change karne se pehle apne doctor se mashwara zaroor karen.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Results vary karte hain</h2>
      <p>
        Weight loss, belly fat reduction ya skin improvement ke results har insaan mein alag
        hote hain, aur genetics, lifestyle, consistency aur underlying health conditions par
        depend karte hain. MeraSehat kisi specific result ki guarantee nahi deta.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Emergency ki soorat mein</h2>
      <p>
        Agar koi medical emergency ho, to foran apne nazdeeki hospital ya emergency services se
        rabta karen — is website ka istemal na karen.
      </p>

      <p>
        Is site ko istemal karke aap is disclaimer se agree karte hain. Sawalat ke liye{" "}
        <a href="/contact" className="text-primary hover:text-primary-dark underline">Contact Us</a> page
        dekhein.
      </p>
    </StaticPage>
  );
}

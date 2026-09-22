import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "Motapa Kaise Kam Kare — Bina Crash Diet Ke | MeraSehat",
  description:
    "Motapa kam karne ka sustainable tarika — diet, roz ki activity aur aadaton mein simple changes, bina bhooka rahe.",
};

export default function Page() {
  return (
    <BlogLayout
      slug="motapa-kaise-kam-kare"
      title="Motapa Kaise Kam Kare"
      subtitle="Crash diet ke bina, sustainable tarike se wazan kam karen"
    >
      <p>
        Motapa kam karne ke liye internet pe hazaron "quick fix" mil jayenge — lekin zyada tar
        crash diets 2-4 hafte mein wazan wapis barha dete hain. Asal tarika slow lekin steady hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Calorie deficit ka matlab</h2>
      <p>
        Wazan kam karne ka basic usool simple hai: jitni calories aap use karte hain usse thori kam
        lein. Isay bohat zyada kam karna (crash diet) body ko slow kar deta hai aur muscle bhi kam
        karta hai — jo aap nahi chahte. Halka deficit (roz ki zaroorat se ~400-500 calories kam)
        behtar aur sustainable hota hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Roz ki 5 simple aadatein</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Subah khali pet 1 glass paani (neembo ke sath ho to behtar)</li>
        <li>Har meal mein protein aur sabzi ko priority den, phir carbs</li>
        <li>Raat ka khana jald khayen — sotay se kam az kam 3 ghante pehle</li>
        <li>Din mein 8-10 glass paani, khaas kar meals se pehle</li>
        <li>Hafte mein sirf ek din, usi time pe wazan check karen — roz ka farq paani ki wajah se hota hai, usse pareshan na hon</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-2">Exercise zaroori hai, lekin diet zyada matter karti hai</h2>
      <p>
        Agar time kam hai to bhi 20-30 minute walk roz karen. Exercise fat burn mein madad karta
        hai lekin agar diet control nahi hai to akela exercise zyada farq nahi dalega. Dono sath
        chalne chahiye.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Patience rakhein</h2>
      <p>
        Healthy rate se wazan kam hona 0.5-1 kg per week ke around hota hai. Isse zyada tez wazan
        kam hona usually muscle loss ya water loss hota hai, fat loss nahi — aur wapis aa jata hai.
      </p>
    </BlogLayout>
  );
}

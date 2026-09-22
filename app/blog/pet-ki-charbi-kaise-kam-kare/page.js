import BlogLayout from "@/components/BlogLayout";

export const metadata = {
  title: "Pet Ki Charbi Kaise Kam Kare — Asaan Tarike | MeraSehat",
  description:
    "Pet ki charbi kam karne ke liye diet, exercise aur roz ki aadaton mein kya change karen — practical, step-by-step tarika.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Pet Ki Charbi Kaise Kam Kare"
      subtitle="Sirf crunches se nahi — pet ki charbi kam karne ka asli tarika samjhen"
    >
      <p>
        Pet ki charbi (belly fat) sabse zyada pucha jane wala sawal hai, aur sabse zyada galat
        samjha jane wala bhi. Log sochte hain ke roz 100 crunches karne se pet andar ho jayega —
        lekin haqeeqat ye hai ke koi bhi exercise sirf ek jagah se fat kam nahi kar sakti. Poori
        body ka fat pehle kam hota hai, aur usi process mein pet bhi kam hota hai.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Diet: Sabse zaroori hissa</h2>
      <p>
        Pet ki charbi kam karne ke liye halka calorie deficit chahiye — yani jitna body use karti
        hai usse thori kam calories lena. Iska matlab bhooka rehna nahi hai. Bas kuch simple
        changes:
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Raat ko chawal avoid karen, roti bhi 1 se zyada na lein</li>
        <li>Cheeni aur cold drinks completely hata dein</li>
        <li>Har meal mein protein shamil karen (anday, dal, chicken, paneer) — ye pait bhara rakhta hai</li>
        <li>Salad aur sabzi ki matra barhayen — ye fiber deta hai, kam calorie mein pet bhar jata hai</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-2">Exercise: Cardio + core dono</h2>
      <p>
        Sirf crunches kafi nahi. Roz 20-30 minute walk ya koi cardio (fat burn ke liye) aur sath
        mein plank, crunches jaisi core exercises (muscle tone ke liye) dono zaroori hain:
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Plank — 30 second, 3 sets</li>
        <li>Crunches — 15-20 reps, 2-3 sets</li>
        <li>Tez walk ya jogging — 20-30 minute roz</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-2">Neend aur stress bhi asar karte hain</h2>
      <p>
        Kam neend aur zyada stress cortisol hormone barhate hain, jo khaas taur pe pet ke around
        fat jama karne mein madad karta hai. 7-8 ghante ki neend aur regular routine bhi utna hi
        zaroori hai jitna diet aur exercise.
      </p>

      <h2 className="font-display text-xl text-ink pt-2">Result mein kitna time lagta hai?</h2>
      <p>
        Realistically 3-4 hafte lagte hain jab tak farq nazar aana shuru ho. Isse pehle judge na
        karen — consistency sabse zyada matter karti hai, intensity nahi.
      </p>
    </BlogLayout>
  );
}

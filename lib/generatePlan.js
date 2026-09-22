// lib/generatePlan.js
// Pure function: takes form input, returns a structured plan object.
// Roman Urdu only, metric units only — built for the India/Pakistan audience.

const ACTIVITY_MULTIPLIER = {
  desk: 1.3,
  onfeet: 1.55,
  manual: 1.75,
  student: 1.4,
  home: 1.45,
};

const ROUTINE_LABEL = {
  desk: "Desk job",
  onfeet: "Khari duty wala kaam (nurse, teacher, retail, etc.)",
  manual: "Mehnat wala kaam",
  student: "Student",
  home: "Ghar sambhalne wali",
};

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(mins) {
  let m = ((mins % 1440) + 1440) % 1440;
  let h = Math.floor(m / 60);
  const min = m % 60;
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${String(min).padStart(2, "0")} ${ampm}`;
}

function proteinSources(dietPref) {
  const bank = {
    veg: ["paneer", "dal", "chana", "sprouts", "soya chunks", "dahi", "tofu"],
    egg: ["anday", "paneer", "dal", "chana", "dahi"],
    nonveg: ["chicken", "machli (fish)", "anday", "dal", "dahi"],
  };
  return bank[dietPref];
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return "Kam wazan";
  if (bmi < 25) return "Normal range";
  if (bmi < 30) return "Normal se thora zyada";
  return "Normal se kaafi zyada";
}

export function generatePlan(input) {
  const {
    name,
    age,
    gender,
    heightCm,
    weightKg,
    routine,
    wakeTime,
    sleepTime,
    dietPref,
    skinType,
    goal,
    offDay,
  } = input;

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const bmiRounded = Math.round(bmi * 10) / 10;

  const sexConstant = gender === "male" ? 5 : gender === "female" ? -161 : -78;
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + sexConstant;

  const multiplier = ACTIVITY_MULTIPLIER[routine] || 1.4;
  let tdee = bmr * multiplier;

  let calorieTarget = tdee;
  if (goal === "belly" || goal === "weightloss") calorieTarget = tdee - 400;
  if (goal === "weightgain") calorieTarget = tdee + 400;
  calorieTarget = Math.round(calorieTarget / 50) * 50;

  const wake = toMinutes(wakeTime);
  const sleep = toMinutes(sleepTime) + (toMinutes(sleepTime) < wake ? 1440 : 0);
  const awakeSpan = sleep - wake;

  const t = {
    riseHydrate: wake,
    breakfast: wake + 45,
    midMorning: wake + Math.round(awakeSpan * 0.28),
    lunch: wake + Math.round(awakeSpan * 0.42),
    eveningSnack: sleep - Math.round(awakeSpan * 0.28),
    dinner: sleep - 180,
    exercise: sleep - 135,
    nightSkin: sleep - 30,
  };

  const proteins = proteinSources(dietPref);
  const category = bmiCategory(bmiRounded);

  const timeline = [
    {
      time: formatTime(t.riseHydrate),
      title: "Utho",
      items: [
        {
          text: "1 glass gunguna paani, chahen to neembo ke sath",
          reason: "Metabolism start karta hai",
        },
      ],
    },
    {
      time: formatTime(t.breakfast),
      title: "Nashta",
      items: [
        {
          text: `2 ubay anday ya 1 katori oats${dietPref === "veg" ? " (anday skip karen, oats + mutthi bhar mewa lein)" : ""}`,
          reason: "Protein - pait der tak bhara rahega",
        },
        { text: "1 fruit (seb/kela)", reason: "Fiber, junk cravings kam" },
      ],
    },
    {
      time: formatTime(t.midMorning),
      title: "Din ka halka snack",
      items: [
        { text: "Mutthi bhar badaam ya bhuna chana", reason: "Energy steady rahegi" },
        { text: "Paani peetay rahen", reason: "Skin aur metabolism dono ke liye zaroori" },
      ],
    },
    {
      time: formatTime(t.lunch),
      title: "Dopahar ka khana",
      items: [
        { text: "1-2 roti ya 1 katori chawal", reason: "Limited carbs" },
        { text: `${proteins[0]} ya ${proteins[1]} + sabzi`, reason: "Protein - goal ke liye zaroori" },
        { text: "Salad (kheera, tamatar) zyada", reason: "Fiber, kam calorie mein pet bhara lagta hai" },
      ],
    },
    {
      time: formatTime(t.eveningSnack),
      title: "Shaam ka snack",
      items: [
        { text: "Sprouts chaat ya green tea + makhana", reason: "Fried cheezon se bachne mein madad" },
      ],
    },
    {
      time: formatTime(t.dinner),
      title: "Raat ka khana (jald kha lein)",
      items: [
        { text: `Halka khana - grilled ${proteins[0]} ya dal + sabzi`, reason: "Raat ko heavy khana fat store karta hai" },
        { text: "Roti 1 se zyada nahi, chawal avoid", reason: "Belly fat ke liye zaroori" },
        { text: "1 chamach flaxseed/til", reason: "Skin ke liye omega-3" },
      ],
    },
    {
      time: formatTime(t.exercise),
      title: "Exercise",
      items: [
        { text: "20 min walk", reason: "Fat burn" },
        { text: "Plank 30 sec x 3, crunches 15-20 x 2-3 sets", reason: "Belly fat target" },
      ],
    },
    {
      time: formatTime(t.nightSkin),
      title: "Sonay se pehle",
      items: [
        { text: "Poori body pe moisturizer, skin halki nam ho tab", reason: "Raat bhar skin repair hoti hai" },
        { text: "Lip balm", reason: "" },
      ],
    },
  ];

  const goalNotes = {
    belly: [
      "Halka calorie deficit rakha gaya hai — belly fat consistency se kam hota hai, sirf mehnat se nahi.",
      "Poori body ka fat pehle kam hota hai, phir belly pe nazar aata hai — 3-4 hafte de kar judge karen.",
    ],
    weightloss: [
      "Steady deficit rakha gaya hai — crash diet aam taur pe wapis wazan barha deti hai.",
      "Hafte mein ek din, usi time pe wazan check karen — roz ka farq zyada tar paani ki wajah se hota hai.",
    ],
    weightgain: [
      "Calorie surplus rakha gaya hai — sath thori strength training karen taake wazan muscle mein jaye, sirf fat mein nahi.",
      "Bhook lage to kela + peanut butter ya doodh wala shake beech mein le sakti hain.",
    ],
    maintain: [
      "Calories aap ke routine ke hisaab se set hain — yahan focus consistency aur tone pe hai, bade change pe nahi.",
    ],
    skinglow: [
      "Calories maintenance ke liye set hain — diet mein hydration, healthy fats aur Vitamin C/E wali cheezein zyada hain.",
      "Chai/coffee aur cheeni kam karen — dono dull skin ki aam wajah hain.",
    ],
  };

  const skinNotes = {
    normal: ["Simple routine kaafi hai: mild cleanser, subah-raat halka moisturizer, din mein sunscreen."],
    dry: [
      "Gunguna paani use karen, garam paani bilkul nahi — ye natural oil khatam karta hai.",
      "Nahane ke 3 minute ke andar thick cream lagayen, jab skin halki nam ho.",
      "Agar hath baar baar dhone parte hain to hand cream sath rakhen, har wash ke baad lagayen.",
    ],
    oily: [
      "Gel-based, oil-free moisturizer use karen — moisturizer bilkul skip karna oily skin ko aur kharab karta hai.",
      "Halka salicylic-acid cleanser shine control karta hai; zyada baar mooh na dhoyen, isse oil aur barhta hai.",
    ],
    combination: [
      "T-zone (forehead, naak, thori) aur gaalon ko alag treat karen — T-zone pe halka gel, gaalon pe zyada rich cream.",
    ],
    sensitive: [
      "Fragrance-free, kam ingredients wale products use karen, koi nayi cheez pehle bazoo pe patch test karen.",
      "Strong actives (retinol, strong acids) avoid karen jab tak dermatologist na kahe.",
    ],
  };

  const avoid = [
    "Cheeni, cold drinks, packaged juices",
    "Fried aur zyada tel wala khana",
    "Nahane ke liye zyada garam paani",
    "Raat ko der se heavy khana",
  ];

  const checklist = [
    "8-10 glass paani",
    "Nahane ke foran baad moisturizer",
    "Har hath dhonay ke baad hand cream",
    "Raat ko carbs kam",
    "20-30 min exercise",
    "7-8 ghante neend",
  ];

  const offDayLabel = offDay === "varies" ? "Varies / rotating" : offDay || "";

  return {
    name: name || "",
    generatedFor: `${age} saal, ${ROUTINE_LABEL[routine]}`,
    bmi: bmiRounded,
    bmiCategory: category,
    calorieTarget,
    offDay: offDayLabel,
    timeline,
    goalNotes: goalNotes[goal] || [],
    skinNotes: skinNotes[skinType] || [],
    avoid,
    checklist,
  };
}

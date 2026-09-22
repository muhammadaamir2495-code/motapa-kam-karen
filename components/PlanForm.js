"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

const labelClass = "block text-sm font-medium text-ink/80 mb-1.5";

export default function PlanForm({ onGenerate }) {
  const [form, setForm] = useState({
    name: "",
    age: 25,
    gender: "female",
    heightCm: 163,
    weightKg: 65,
    routine: "desk",
    wakeTime: "07:00",
    sleepTime: "23:00",
    dietPref: "nonveg",
    skinType: "normal",
    goal: "belly",
    offDay: "Sunday",
  });

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onGenerate(form);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div>
        <label className={labelClass}>Naam (optional)</label>
        <input
          className={inputClass}
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Optional"
        />
      </div>

      <div>
        <label className={labelClass}>Umar</label>
        <input
          className={inputClass}
          type="number"
          min="14"
          max="80"
          required
          value={form.age}
          onChange={(e) => update("age", Number(e.target.value))}
        />
      </div>

      <div>
        <label className={labelClass}>Gender</label>
        <select className={inputClass} value={form.gender} onChange={(e) => update("gender", e.target.value)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Nahi batana</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Off wala din</label>
        <select className={inputClass} value={form.offDay} onChange={(e) => update("offDay", e.target.value)}>
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
          <option value="varies">Varies / rotating</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Qad (cm)</label>
        <input
          className={inputClass}
          type="number"
          min="120"
          max="220"
          required
          value={form.heightCm}
          onChange={(e) => update("heightCm", Number(e.target.value))}
        />
      </div>

      <div>
        <label className={labelClass}>Wazan (kg)</label>
        <input
          className={inputClass}
          type="number"
          min="30"
          max="200"
          required
          value={form.weightKg}
          onChange={(e) => update("weightKg", Number(e.target.value))}
        />
      </div>

      <div>
        <label className={labelClass}>Uthne ka time</label>
        <input
          className={inputClass}
          type="time"
          value={form.wakeTime}
          onChange={(e) => update("wakeTime", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass}>Sonay ka time</label>
        <input
          className={inputClass}
          type="time"
          value={form.sleepTime}
          onChange={(e) => update("sleepTime", e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>Rozana ka routine</label>
        <select className={inputClass} value={form.routine} onChange={(e) => update("routine", e.target.value)}>
          <option value="desk">Desk job</option>
          <option value="onfeet">Khari duty (nurse, teacher, retail...)</option>
          <option value="manual">Mehnat wala kaam</option>
          <option value="student">Student</option>
          <option value="home">Ghar sambhalne wali</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Khane ki pasand</label>
        <select className={inputClass} value={form.dietPref} onChange={(e) => update("dietPref", e.target.value)}>
          <option value="nonveg">Non-veg</option>
          <option value="egg">Egg tak</option>
          <option value="veg">Veg</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Skin type</label>
        <select className={inputClass} value={form.skinType} onChange={(e) => update("skinType", e.target.value)}>
          <option value="dry">Dry</option>
          <option value="oily">Oily</option>
          <option value="combination">Combination</option>
          <option value="sensitive">Sensitive</option>
          <option value="normal">Normal</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>Asal maqsad</label>
        <select className={inputClass} value={form.goal} onChange={(e) => update("goal", e.target.value)}>
          <option value="belly">Belly fat kam karna</option>
          <option value="weightloss">Overall wazan kam karna</option>
          <option value="weightgain">Wazan barhana</option>
          <option value="maintain">Maintain karna</option>
          <option value="skinglow">Skin glow pe focus</option>
        </select>
      </div>

      <div className="sm:col-span-2 pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-[15px] font-semibold text-white hover:bg-primary-dark transition shadow-sm"
        >
          Apna Plan Banayen
        </button>
      </div>
    </form>
  );
}

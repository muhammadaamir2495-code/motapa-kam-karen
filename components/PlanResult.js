"use client";

export default function PlanResult({ plan }) {
  return (
    <div className="rounded-2xl border border-line bg-white shadow-sm overflow-hidden">
      <div className="bg-primary px-6 py-7 sm:px-10 sm:py-9 text-white">
        <p className="text-sm uppercase tracking-wide text-white/70 font-medium">Aap ka plan</p>
        <h2 className="font-display text-3xl sm:text-4xl mt-1">
          {plan.name ? `${plan.name} ke liye` : "Aap ka plan"}
        </h2>
        <p className="text-white/80 mt-2 text-[15px]">{plan.generatedFor}</p>
      </div>

      <div className="px-6 py-7 sm:px-10 sm:py-9">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <Stat label="BMI" value={plan.bmi} />
          <Stat label="Category" value={plan.bmiCategory} small />
          <Stat label="Rozana calories" value={`~${plan.calorieTarget}`} />
          <Stat label="Off day" value={plan.offDay || "—"} small />
        </div>

        <h3 className="font-display text-2xl text-ink mb-4">Din ka schedule</h3>
        <ol className="relative border-l border-line ml-2 mb-10">
          {plan.timeline.map((block, i) => (
            <li key={i} className="mb-7 ml-6 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent" />
              <p className="text-xs font-semibold tracking-wide text-accent mb-0.5">{block.time}</p>
              <p className="font-display text-lg text-ink mb-1.5">{block.title}</p>
              <ul className="space-y-1.5">
                {block.items.map((item, j) => (
                  <li key={j} className="text-[15px] text-ink/90 leading-snug">
                    <span>{item.text}</span>
                    {item.reason && <span className="text-muted text-[13px]"> — {item.reason}</span>}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-display text-xl text-ink mb-3">Aap ke goal ke baray mein</h3>
            <ul className="space-y-2">
              {plan.goalNotes.map((n, i) => (
                <li key={i} className="text-[14.5px] text-ink/85 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl text-ink mb-3">Aap ki skin ke baray mein</h3>
            <ul className="space-y-2">
              {plan.skinNotes.map((n, i) => (
                <li key={i} className="text-[14.5px] text-ink/85 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className="rounded-xl bg-primary-light px-5 py-5">
            <h4 className="font-semibold text-primary-dark mb-3 text-[15px]">Daily checklist</h4>
            <ul className="space-y-1.5">
              {plan.checklist.map((c, i) => (
                <li key={i} className="text-[14px] text-ink/85 flex items-start gap-2">
                  <span className="mt-0.5">☐</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-accent-light px-5 py-5">
            <h4 className="font-semibold text-ink mb-3 text-[15px]">Avoid karein</h4>
            <ul className="space-y-1.5">
              {plan.avoid.map((c, i) => (
                <li key={i} className="text-[14px] text-ink/85 flex items-start gap-2">
                  <span className="mt-0.5">✕</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-[12.5px] text-muted border-t border-line pt-5">
          Ye general guidance hai, medical advice nahi. Kisi bhi health condition (jaise PCOD, diabetes, thyroid)
          ke liye doctor ya dietitian se zaroor consult karen.
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value, small }) {
  return (
    <div className="rounded-xl border border-line px-4 py-3.5">
      <p className="text-[11px] uppercase tracking-wide text-muted font-medium mb-1">{label}</p>
      <p className={small ? "text-[15px] font-semibold text-ink" : "text-2xl font-display text-ink"}>{value}</p>
    </div>
  );
}

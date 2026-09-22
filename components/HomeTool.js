"use client";

import { useRef, useState } from "react";
import PlanForm from "@/components/PlanForm";
import PlanResult from "@/components/PlanResult";
import InchesToCmConverter from "@/components/InchesToCmConverter";
import { generatePlan } from "@/lib/generatePlan";

export default function HomeTool() {
  const [plan, setPlan] = useState(null);
  const [presetHeightCm, setPresetHeightCm] = useState(null);
  const resultRef = useRef(null);

  function handleConvertedHeight(cm) {
    setPresetHeightCm(cm);
    document.getElementById("heightCm")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function handleGenerate(formValues) {
    const result = generatePlan(formValues);
    setPlan(result);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <>
      <section id="tool" className="no-print max-w-3xl mx-auto px-5 pb-16">
        <InchesToCmConverter onConvert={handleConvertedHeight} />
        <div className="rounded-2xl border border-line bg-white shadow-sm px-6 py-7 sm:px-10 sm:py-9">
          <PlanForm onGenerate={handleGenerate} presetHeightCm={presetHeightCm} />
        </div>
      </section>

      {plan && (
        <section ref={resultRef} className="max-w-3xl mx-auto px-5 pb-20">
          <div className="no-print flex justify-end mb-4">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-primary hover:text-primary transition"
            >
              PDF ke tor pe save / print karen
            </button>
          </div>
          <PlanResult plan={plan} />
        </section>
      )}
    </>
  );
}

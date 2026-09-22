"use client";

import { useState } from "react";

const quickReference = [
  { feet: 4, inches: 10 },
  { feet: 5, inches: 0 },
  { feet: 5, inches: 2 },
  { feet: 5, inches: 4 },
  { feet: 5, inches: 6 },
  { feet: 5, inches: 8 },
  { feet: 5, inches: 10 },
  { feet: 6, inches: 0 },
  { feet: 6, inches: 2 },
];

export default function InchesToCmConverter({ onConvert }) {
  const [inchesInput, setInchesInput] = useState("");

  const totalInches = Number(inchesInput);
  const cmValue = totalInches > 0 ? totalInches * 2.54 : null;

  return (
    <div id="inches-to-cm" className="rounded-2xl border border-line bg-white shadow-sm px-6 py-6 sm:px-8 sm:py-7 mb-6">
      <h2 className="font-display text-xl text-ink mb-1">Inches to CM Converter</h2>
      <p className="text-[14px] text-muted mb-4">
        Zyada tar log apna qad inches ya feet mein jaante hain — yahan foran cm mein convert karen.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-end gap-3">
        <div className="flex-1">
          <label className="block text-sm font-medium text-ink/80 mb-1.5">Height (inches)</label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            inputMode="decimal"
            placeholder="Misal ke tor pe 65"
            value={inchesInput}
            onChange={(e) => setInchesInput(e.target.value)}
            className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          />
        </div>

        <div className="flex-1">
          <div className="rounded-lg border border-line bg-bg px-3.5 py-2.5 text-[15px] text-ink min-h-[44px] flex items-center">
            {cmValue ? `${cmValue.toFixed(2)} cm` : "= cm yahan aayega"}
          </div>
        </div>

        {onConvert && (
          <button
            type="button"
            disabled={!cmValue}
            onClick={() => onConvert(Math.round(cmValue))}
            className="rounded-lg bg-primary px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-primary-dark transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Plan mein istemal karen
          </button>
        )}
      </div>

      <p className="text-xs text-muted mt-3">1 inch = 2.54 cm</p>

      <details className="mt-4">
        <summary className="text-sm font-medium text-primary cursor-pointer">
          Common feet &amp; inches to cm chart dekhen
        </summary>
        <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 gap-2 text-[13px] text-ink/80">
          {quickReference.map(({ feet, inches }) => {
            const cm = (feet * 12 + inches) * 2.54;
            return (
              <div key={`${feet}-${inches}`} className="rounded-md border border-line px-2.5 py-1.5 flex justify-between">
                <span>{feet}′{inches}″</span>
                <span className="text-muted">{cm.toFixed(1)} cm</span>
              </div>
            );
          })}
        </div>
      </details>
    </div>
  );
}

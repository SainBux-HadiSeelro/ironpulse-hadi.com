"use client";

import React, { useState } from "react";
import { Calculator, Flame, Dumbbell, Sparkles, ArrowRight } from "lucide-react";

export default function BmiCalculator() {
  const [height, setHeight] = useState<string>("178");
  const [weight, setWeight] = useState<string>("75");
  const [age, setAge] = useState<string>("25");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [bmiResult, setBmiResult] = useState<{
    bmi: number;
    status: string;
    advice: string;
    color: string;
  } | null>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const val = parseFloat((w / (h * h)).toFixed(1));
      let status = "";
      let advice = "";
      let color = "text-primary";

      if (val < 18.5) {
        status = "Underweight";
        color = "text-sky-400";
        advice = "Focus on heavy compound lifts (Power Lift class) and progressive caloric surplus (+500 kcal).";
      } else if (val >= 18.5 && val <= 24.9) {
        status = "Optimal Athletic Range";
        color = "text-primary";
        advice = "Ideal baseline! Focus on body recomposition, Iron Core stabilization, and HIIT conditioning.";
      } else if (val >= 25 && val <= 29.9) {
        status = "Overweight / High Mass";
        color = "text-amber-400";
        advice = "Incorporate HIIT Burn 3x weekly paired with progressive resistance training and lean protein.";
      } else {
        status = "Elevated Range";
        color = "text-rose-400";
        advice = "Prioritize structured cardio, metabolic conditioning, and personal coaching for rapid fat loss.";
      }

      setBmiResult({ bmi: val, status, advice, color });
    }
  };

  return (
    <section className="py-20 bg-zinc-950/80 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full mb-4">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">BIOMETRIC ASSESSMENT</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white">
              CALCULATE YOUR <span className="text-primary">BMI & METRICS</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4 leading-relaxed">
              Gauge your baseline body mass index and receive personalized IronPulse training recommendations tailored to your physiology.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="text-xs font-bold text-zinc-500 uppercase">Underweight</div>
                <div className="text-lg font-black text-sky-400 mt-1">&lt; 18.5</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-primary/20 bg-primary/5">
                <div className="text-xs font-bold text-zinc-400 uppercase">Optimal</div>
                <div className="text-lg font-black text-primary mt-1">18.5 – 24.9</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="text-xs font-bold text-zinc-500 uppercase">Overweight</div>
                <div className="text-lg font-black text-amber-400 mt-1">25.0 – 29.9</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="text-xs font-bold text-zinc-500 uppercase">Elevated</div>
                <div className="text-lg font-black text-rose-400 mt-1">30.0+</div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative shadow-2xl">
            <form onSubmit={calculateBmi} className="space-y-5">
              {/* Gender toggle */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    gender === "male"
                      ? "bg-primary text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                      : "bg-black/50 text-zinc-400 border border-white/10"
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    gender === "female"
                      ? "bg-primary text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                      : "bg-black/50 text-zinc-400 border border-white/10"
                  }`}
                >
                  Female
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-400 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    required
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-400 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-zinc-400 mb-1">Age</label>
                  <input
                    type="number"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#b8e600] text-black font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-all hover:scale-[1.01] shadow-[0_0_20px_rgba(204,255,0,0.25)]"
              >
                CALCULATE METRICS →
              </button>
            </form>

            {/* Results Display */}
            {bmiResult && (
              <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">YOUR RESULT</span>
                    <div className="text-3xl font-black italic text-white">
                      {bmiResult.bmi} <span className="text-xs font-normal text-zinc-500">kg/m²</span>
                    </div>
                  </div>
                  <div className={`text-right font-black italic text-sm ${bmiResult.color}`}>
                    {bmiResult.status}
                  </div>
                </div>

                <div className="mt-3 p-3.5 bg-black/50 border border-white/5 rounded-xl text-xs text-zinc-300 leading-relaxed">
                  <span className="text-primary font-bold">Trainer Prescription: </span>
                  {bmiResult.advice}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

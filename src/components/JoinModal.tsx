"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Dumbbell, Shield, Sparkles, QrCode } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export default function JoinModal({ isOpen, onClose, defaultPlan = "PULSE" }: JoinModalProps) {
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Hypertrophy & Strength"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [passCode, setPassCode] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `IP-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassCode(code);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: "", email: "", phone: "", goal: "Hypertrophy & Strength" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-white/15 rounded-3xl p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Accent Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">MEMBER REGISTRATION</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter text-white">
              JOIN <span className="text-primary">IRONPULSE</span>
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm mt-1 mb-6">
              Lock in your elite access or start with a complimentary 3-day guest pass.
            </p>

            {/* Plan Selector */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {[
                { id: "BASIC", price: "$29/mo" },
                { id: "PULSE", price: "$59/mo", badge: "Popular" },
                { id: "ELITE", price: "$99/mo" },
              ].map((p) => (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setSelectedPlan(p.id)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedPlan === p.id
                      ? "border-primary bg-primary/15 text-white shadow-[0_0_15px_rgba(204,255,0,0.2)]"
                      : "border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <div className="text-xs font-black italic">{p.id}</div>
                  <div className="text-xs text-primary font-bold mt-0.5">{p.price}</div>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Hunter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@fitness.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Primary Fitness Target
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="Hypertrophy & Strength">Hypertrophy & Heavy Lifting</option>
                  <option value="Athletic Conditioning">Athletic & Boxing Conditioning</option>
                  <option value="Rapid Fat Shred">HIIT & Metabolic Conditioning</option>
                  <option value="Mobility & Longevity">Mobility, Sauna & Longevity</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#b8e600] text-black font-black py-3.5 rounded-2xl text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(204,255,0,0.3)] mt-2"
              >
                CONFIRM {selectedPlan} MEMBERSHIP PASS →
              </button>

              <div className="text-center text-[11px] text-zinc-500">
                🔒 24/7 Biometric Check-in • No contracts • Cancel anytime
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-3xl bg-primary/20 border border-primary text-primary flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(204,255,0,0.3)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black italic text-white">ACCESS PASS ACTIVATED!</h3>
            <p className="text-zinc-400 text-xs mt-1 mb-6">
              Welcome to the brotherhood of iron, <span className="text-white font-bold">{formData.name}</span>.
            </p>

            {/* Digital Pass Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-primary/50 p-6 rounded-3xl text-left relative overflow-hidden shadow-2xl mb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary">IRONPULSE VIP MEMBER</div>
                  <div className="text-lg font-black text-white">{selectedPlan} PASS</div>
                </div>
                <div className="p-2 bg-primary/10 rounded-xl border border-primary/20 text-primary">
                  <QrCode className="w-7 h-7" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Pass Holder</span>
                  <span className="text-white font-bold">{formData.name}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Pass Code</span>
                  <span className="text-primary font-mono font-black tracking-wider">{passCode}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Focus</span>
                  <span className="text-zinc-300 font-semibold">{formData.goal}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Status</span>
                  <span className="text-emerald-400 font-bold">Active 24/7 Access</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-2xl text-xs uppercase tracking-wider transition-all"
            >
              DONE & RETURN TO HOMEPAGE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

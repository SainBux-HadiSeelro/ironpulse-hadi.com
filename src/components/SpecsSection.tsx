"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Activity, Wind, Waves, Gauge, Award, Layers } from "lucide-react";

interface SpecCategory {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  specs: {
    label: string;
    value: string;
    desc: string;
    metric?: string;
  }[];
}

export default function SpecsSection() {
  const [activeTab, setActiveTab] = useState<string>("facility");

  const categories: SpecCategory[] = [
    {
      id: "facility",
      name: "FACILITY SPECS",
      tagline: "Industrial-grade architecture built for peak human output",
      icon: <Layers className="w-5 h-5" />,
      specs: [
        { label: "Total Training Floor", value: "15,000+", metric: "SQ FT", desc: "Dual-layer vulcanized Olympic rubber turf designed for shock absorption and heavy drops." },
        { label: "Air Purification", value: "HEPA-14", metric: "MEDICAL GRADE", desc: "Positive pressure hospital-grade air exchange cycling 100% fresh filtered air every 6 minutes." },
        { label: "Dynamic Biometric Lighting", value: "650", metric: "LUX TUNABLE", desc: "Circadian rhythm attuned lighting that ramps up adrenaline during peak workout hours." },
        { label: "Acoustic Engineering", value: "48", metric: "SUBWOOFERS", desc: "Zone-isolated pro audio delivering high-bpm acoustics without cross-zone interference." }
      ]
    },
    {
      id: "strength",
      name: "EQUIPMENT & HARDWARE",
      tagline: "Calibrated competition-grade steel engineered with zero compromise",
      icon: <Gauge className="w-5 h-5" />,
      specs: [
        { label: "Lifting Platforms", value: "Eleiko IPF", metric: "CALIBRATED", desc: "Certified competition bars, friction-free needle bearings, and calibrated steel discs." },
        { label: "Plate-Loaded Arsenal", value: "Hammer Strength", metric: "ISO-LATERAL", desc: "Pure biomechanical divergence matching the natural converging arcs of human movement." },
        { label: "Power Rack Grid", value: "12 Stations", metric: "INTEGRATED", desc: "Heavy-gauge steel modular racks with laser-cut numbering, spotter arms, and band pegs." },
        { label: "Dumbbell Selection", value: "5 - 150", metric: "LBS URETHANE", desc: "Solid steel precision-milled urethane dumbbells with anti-slip knurled chrome handles." }
      ]
    },
    {
      id: "recovery",
      name: "BIO-HACKING & RECOVERY",
      tagline: "Cellular rejuvenation technology to cut soreness and multiply gains",
      icon: <Waves className="w-5 h-5" />,
      specs: [
        { label: "Cryotherapy Chamber", value: "-110°C", metric: "SUB-ZERO", desc: "Whole-body dry cold exposure triggering anti-inflammatory endorphin rushes." },
        { label: "Infrared Sauna", value: "Full Spectrum", metric: "FAR & NEAR", desc: "Deep tissue detoxifying infrared heat promoting collagen repair and heart health." },
        { label: "Cold Plunge Baths", value: "3°C / 37°F", metric: "CHILLED", desc: "Continuous ozone-filtered hydrotherapy for rapid nervous system reset." },
        { label: "Percussive Therapy", value: "Hyperice Pro", metric: "COMPRESSION", desc: "Pneumatic compression boots and percussion massage guns in private recovery suites." }
      ]
    },
    {
      id: "biometrics",
      name: "SMART TECH & TELEMETRY",
      tagline: "Live telemetry and frictionless digital access 24/7",
      icon: <Cpu className="w-5 h-5" />,
      specs: [
        { label: "Biometric Access", value: "24/7/365", metric: "RFID + FACEID", desc: "Seamless contactless turnstile entry with instant automated locker pairing." },
        { label: "PulseBand Telemetry", value: "Real-Time", metric: "HEART-RATE", desc: "Broadcast live exertion zones to floor monitors or sync directly to Apple Health / Strava." },
        { label: "Smart Occupancy Index", value: "Live Cloud", metric: "APP SENSOR", desc: "Check current gym crowd density and machine availability before stepping out your door." },
        { label: "InBody 770 Scanner", value: "Multi-Freq", metric: "BIA SENSORS", desc: "Clinical-grade segmental body composition, muscle-to-fat ratio, and visceral fat tracking." }
      ]
    }
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="specs" className="py-24 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">ENGINEERED FOR ELITE OUTPUT</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white">
              FACILITY & TECH <span className="text-primary">SPECIFICATIONS</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm md:text-base leading-relaxed">
            Every millimeter of IRONPULSE is engineered with competition-grade tolerances, medical-grade air quality, and continuous telemetry.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-white/10 pb-4">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs md:text-sm font-black italic tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-black shadow-[0_0_25px_rgba(204,255,0,0.35)] scale-105"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Tab Subtitle */}
        <p className="text-zinc-500 font-semibold text-xs tracking-widest uppercase mb-8">
          — {currentCategory.tagline}
        </p>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCategory.specs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="group relative bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-primary/50 p-6 rounded-3xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-3xl pointer-events-none group-hover:from-primary/20 transition-all" />

              <div>
                <div className="text-[11px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-primary transition-colors">
                  {item.label}
                </div>
                <div className="flex items-baseline gap-2 my-4">
                  <span className="text-3xl md:text-4xl font-black italic text-white tracking-tight">
                    {item.value}
                  </span>
                  {item.metric && (
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      {item.metric}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed pt-2 border-t border-white/5">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live Facility Telemetry Banner */}
        <div className="mt-12 bg-zinc-900/90 border border-primary/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-[0_0_30px_rgba(204,255,0,0.1)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary flex-shrink-0 animate-pulse">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <h4 className="text-sm font-black italic uppercase text-white tracking-wide">
                  LIVE GYM TELEMETRY INDEX
                </h4>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Current Floor Occupancy: <span className="text-primary font-bold">42% (Optimal Capacity)</span> • Air Quality Index: <span className="text-emerald-400 font-bold">AQI 12 (Pristine)</span> • Temperature: <span className="text-white font-bold">67.4°F</span>
              </p>
            </div>
          </div>

          <a
            href="#join"
            className="whitespace-nowrap bg-primary text-black px-6 py-3 rounded-full text-xs font-black italic tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
          >
            CLAIM PASS & TOUR FACILITY →
          </a>
        </div>
      </div>
    </section>
  );
}

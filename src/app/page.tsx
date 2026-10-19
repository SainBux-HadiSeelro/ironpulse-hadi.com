"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Shield,
  TrendingUp,
  Users,
  Check,
  Star,
  ChevronDown,
  Sparkles,
  Dumbbell,
  Trophy,
  Flame,
  Award,
  X
} from "lucide-react";
import SpecsSection from "@/components/SpecsSection";
import BmiCalculator from "@/components/BmiCalculator";
import JoinModal from "@/components/JoinModal";

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("PULSE");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const stats = [
    { icon: <Shield className="w-5 h-5" />, label: "Elite Training", value: "Expert Coaching" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Personalized", value: "Custom Plans" },
    { icon: <Users className="w-5 h-5" />, label: "Community", value: "500+ Members" },
  ];

  const coaches = [
    {
      name: "Marcus 'Vanguard' Vance",
      role: "Head Strength Coach",
      creds: "Olympic Weightlifting Certified • 12+ Yrs Experience",
      focus: "Hypertrophy & Biomechanics"
    },
    {
      name: "Elena Rostova",
      role: "Lead Combat & HIIT Specialist",
      creds: "Golden Gloves Champion • Tier-1 Conditioning",
      focus: "Metabolic Burn & Boxing"
    },
    {
      name: "David Chen",
      role: "Mobility & Bio-Recovery Director",
      creds: "Doctor of Physical Therapy • CSCS",
      focus: "Spinal Health & Cryo Rehab"
    }
  ];

  const testimonials = [
    {
      quote: "IRONPULSE transformed not just my physique, but my entire mindset. The Eleiko equipment and 24/7 access fit my crazy schedule effortlessly.",
      author: "Jordan Blake",
      achievement: "Lost 28 lbs & added 60 lbs to deadlift",
      rating: 5
    },
    {
      quote: "The facility specs speak for themselves. The HEPA air quality, the chill saunas, and the PulseAI assistant make it lightyears ahead of normal gyms.",
      author: "Samantha Reed",
      achievement: "Elite Member • 1.5 Years",
      rating: 5
    },
    {
      quote: "Best investment I've made in myself. The coaching is world-class and there's never any waiting for squat racks.",
      author: "Tariq Malik",
      achievement: "Competitive Powerlifter",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "How does the 24/7 access work?",
      a: "Active members receive instant contactless biometric RFID / smartphone key access. You can train at 2:00 AM or 2:00 PM with automated lighting, high-fidelity security, and complete facility access 365 days a year."
    },
    {
      q: "Are group fitness and combat classes included in membership?",
      a: "Yes! Our PULSE and ELITE tiers include unlimited access to all signature classes (HIIT BURN, BOXING ELITE, POWER LIFT, ZEN FLEX, and more). BASIC tier includes 1 class per month."
    },
    {
      q: "Can I try out IRONPULSE before committing?",
      a: "Absolutely! We offer a complimentary 3-Day VIP Guest Pass with full gym and recovery spa access. You can claim it instantly via our 24/7 PulseAI Chatbot or by clicking 'Claim Free Pass'."
    },
    {
      q: "What makes your equipment superior to standard gyms?",
      a: "We only install certified Eleiko Olympic bars and calibrated steel plates, Hammer Strength ISO-Lateral machines, Keiser pneumatic resistance racks, and medical-grade recovery suites with sub-zero cryotherapy."
    },
    {
      q: "Is there any cancellation penalty or long-term lock-in?",
      a: "Zero hidden lock-in contracts. You can pause, upgrade, or cancel your membership with 14 days notice right from the member portal or at the front desk."
    }
  ];

  const handleOpenJoin = (plan: string = "PULSE") => {
    setSelectedPlan(plan);
    setIsJoinModalOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary selection:text-black">
      {/* Join & VIP Pass Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        defaultPlan={selectedPlan}
      />

      {/* Video Teaser Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
            <div className="relative w-full max-w-4xl bg-zinc-950 border border-white/20 rounded-3xl p-6 overflow-hidden">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full rounded-2xl bg-zinc-900 flex flex-col items-center justify-center relative overflow-hidden border border-white/10">
                <Image
                  src="/hero-gym.png"
                  alt="IronPulse Film Teaser"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="relative z-10 text-center px-4">
                  <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary text-primary flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Play className="w-8 h-8 fill-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black italic tracking-tight text-white">
                    IRONPULSE : THE MANIFESTO
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto mt-2">
                    "Greatness is not inherited. It is forged in iron, sweat, and unrelenting discipline."
                  </p>
                  <button
                    onClick={() => {
                      setIsVideoModalOpen(false);
                      handleOpenJoin("PULSE");
                    }}
                    className="mt-6 bg-primary text-black font-black text-xs px-6 py-3 rounded-full uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                  >
                    EXPERIENCE IT IN PERSON →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-20">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-gym.png"
            alt="Premium Gym Interior"
            fill
            className="object-cover opacity-40 grayscale-[20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        <div className="section-padding relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-300">
                24/7 ELITE BIOMETRIC GYM & COACHING
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.9]">
              PUSH YOUR <br />
              <span className="text-primary italic">LIMITS</span> FURTHER
            </h1>

            <p className="max-w-md text-base md:text-lg text-zinc-400 leading-relaxed">
              IRONPULSE is where ambition meets pure intensity. Access 15,000+ sq ft of competition-grade Eleiko steel, bio-recovery saunas, and an AI-driven concierge that keeps you accountable 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleOpenJoin("PULSE")}
                className="bg-primary text-black font-black px-10 py-4 rounded-full flex items-center justify-center gap-2 text-base md:text-lg hover:scale-105 active:scale-95 transition-transform hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
              >
                START TRAINING <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="glass px-10 py-4 rounded-full flex items-center justify-center gap-2 text-base md:text-lg font-bold hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                WATCH FILM
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex flex-col items-end"
          >
            <div className="grid grid-cols-1 gap-6 w-full max-w-sm">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-primary/40 transition-colors group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                    <div className="text-lg font-bold">{stat.value}</div>
                  </div>
                </motion.div>
              ))}

              {/* 24/7 AI concierge quick badge */}
              <div className="glass p-5 rounded-2xl border border-primary/20 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                <div className="text-xs text-zinc-300">
                  <span className="text-primary font-bold">24/7 Live PulseAI</span> Concierge Active for Instant Support
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <a href="#about" aria-label="Scroll to about section">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square">
              <Image
                src="/about-gym.png"
                alt="Gym Equipment"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Accent elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/5 italic -z-0 select-none">
              IRON
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-primary font-black italic tracking-widest uppercase">ABOUT IRONPULSE</h2>
            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              WE DON'T JUST TRAIN. <br /> WE <span className="text-zinc-500">EVOLVE.</span>
            </h3>
            <p className="text-lg text-zinc-400">
              Founded on the principles of discipline and raw power, IRONPULSE offers an environment where every rep counts and every drop of sweat is a badge of honor. Our facility is designed for those who refuse to settle for average.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-4xl font-black italic text-primary">24/7</div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1">BIOMETRIC ACCESS</div>
              </div>
              <div>
                <div className="text-4xl font-black italic text-primary">15+</div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1">EXPERT COACHES</div>
              </div>
              <div>
                <div className="text-4xl font-black italic text-primary">100+</div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1">STATIONS</div>
              </div>
              <div>
                <div className="text-4xl font-black italic text-primary">5★</div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1">RATING</div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <a
                href="#specs"
                className="border-2 border-white/10 hover:border-primary px-8 py-3 rounded-full font-bold transition-colors inline-block text-center"
              >
                VIEW FACILITY SPECS
              </a>
              <button
                onClick={() => handleOpenJoin("PULSE")}
                className="bg-primary text-black font-black px-8 py-3 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                CLAIM 3-DAY PASS
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facility & Tech Specs Section */}
      <SpecsSection />

      {/* Classes Section */}
      <section id="classes" className="py-24 bg-zinc-950">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-primary font-black italic tracking-widest uppercase">OUR CLASSES</h2>
              <h3 className="text-4xl md:text-6xl font-black">CHOOSE YOUR <span className="text-gradient">BATTLE</span></h3>
            </div>
            <p className="max-w-md text-zinc-400">
              From metabolic conditioning to Olympic powerlifting, every session is coached by elite athletes to unlock maximum output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "HIIT BURN", level: "Advanced", line: "High Intensity Cardio & Shred", time: "45 Mins" },
              { name: "POWER LIFT", level: "Elite", line: "Heavy Metal & Olympic Lifts", time: "60 Mins" },
              { name: "IRON CORE", level: "Intermediate", line: "Rotational Strength & Power", time: "50 Mins" },
              { name: "BOXING ELITE", level: "Pro", line: "Precision Footwork & Heavy Bags", time: "60 Mins" },
              { name: "ZEN FLEX", level: "All Levels", line: "Mobility, Stretch & Flow", time: "45 Mins" },
              { name: "CARDIO BLAST", level: "Beginner", line: "Non-stop Heart Rate Fuel", time: "40 Mins" },
            ].map((cls, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleOpenJoin("PULSE")}
                className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all p-8 cursor-pointer h-80 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                <div className="flex justify-between items-start">
                  <div className="text-xs font-black tracking-widest uppercase text-zinc-500 group-hover:text-primary transition-colors">
                    {cls.level} • {cls.time}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-primary group-hover:bg-primary group-hover:text-black flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-primary font-bold italic text-sm">{cls.line}</div>
                  <div className="text-3xl font-black italic">{cls.name}</div>
                  <p className="text-zinc-500 text-xs">Click to book a trial slot in this class →</p>
                </div>

                <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-black italic pointer-events-none group-hover:text-primary/10 transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Biometric Assessment & BMI Calculator */}
      <BmiCalculator />

      {/* Elite Coaching Roster */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-white/5">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">CHAMPIONS BREED CHAMPIONS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">
              ELITE COACHING <span className="text-primary">ROSTER</span>
            </h2>
            <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base">
              You won't find generic gym instructors here. Our coaches are former world champions, exercise physiologists, and master trainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-zinc-900/60 border border-white/10 hover:border-primary/40 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 text-primary flex items-center justify-center font-black text-2xl italic mb-6 group-hover:bg-primary group-hover:text-black transition-all">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black italic text-white group-hover:text-primary transition-colors">
                    {coach.name}
                  </h3>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mt-1">
                    {coach.role}
                  </div>
                  <p className="text-zinc-400 text-xs mt-4 leading-relaxed">
                    {coach.creds}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-zinc-500 uppercase">Focus: {coach.focus}</span>
                  <button
                    onClick={() => handleOpenJoin("ELITE")}
                    className="text-xs font-black text-primary hover:underline"
                  >
                    Book Coach →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-zinc-950 overflow-hidden border-t border-white/5">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-primary font-black italic tracking-widest uppercase">PRICING PLANS</h2>
            <h3 className="text-4xl md:text-6xl font-black">INVEST IN <span className="text-zinc-500">YOURSELF</span></h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              All plans include RFID access, zero sign-up fees, and locker amenities. Cancel or change anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              {
                id: "BASIC",
                name: "BASIC",
                price: "29",
                features: ["Standard Gym Access", "Locker Room & Showers", "Free High-Speed WiFi", "1 Class Pass/Month", "Member App Access"],
                popular: false
              },
              {
                id: "PULSE",
                name: "PULSE",
                price: "59",
                features: [
                  "24/7 Unlimited Access",
                  "All Group Classes Included",
                  "1 Personal Training Session/Mo",
                  "IronPulse Telemetry App",
                  "Infrared Sauna Access"
                ],
                popular: true
              },
              {
                id: "ELITE",
                name: "ELITE",
                price: "99",
                features: [
                  "Dedicated 1-on-1 Coach",
                  "Custom Nutrition & Macro Plan",
                  "Unlimited Cryotherapy & Spa",
                  "Monthly Sports Massage",
                  "VIP Lounge & Valet Parking"
                ],
                popular: false
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 md:p-10 rounded-3xl border transition-all duration-300 flex flex-col ${
                  plan.popular
                    ? "border-primary bg-primary/10 lg:scale-105 shadow-[0_0_40px_rgba(204,255,0,0.15)]"
                    : "border-white/10 bg-zinc-900/60"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    ⚡ Most Popular
                  </div>
                )}
                <div className="text-xl font-black italic mb-2 text-white">{plan.name}</div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black italic tracking-tighter text-white">${plan.price}</span>
                  <span className="text-zinc-400 font-bold uppercase text-xs">/month</span>
                </div>

                <ul className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-zinc-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleOpenJoin(plan.id)}
                  className={`w-full py-4 rounded-2xl font-black transition-all ${
                    plan.popular
                      ? "bg-primary text-black hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)]"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  GET STARTED WITH {plan.name} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-primary font-black italic tracking-widest uppercase">TESTIMONIALS</h2>
            <h3 className="text-4xl md:text-6xl font-black">STORIES FROM THE <span className="text-gradient">IRON</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/60 border border-white/10 p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-primary mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary" />
                    ))}
                  </div>
                  <p className="text-zinc-300 italic text-sm leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <div className="font-bold text-white text-sm">{t.author}</div>
                  <div className="text-xs text-primary font-medium mt-0.5">{t.achievement}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-primary font-black italic tracking-widest uppercase">QUESTIONS & ANSWERS</h2>
            <h3 className="text-3xl md:text-5xl font-black">FREQUENTLY ASKED</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-900/70 border border-white/10 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:text-primary transition-colors"
                  >
                    <span className="font-bold text-base md:text-lg text-white">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join & CTA Banner */}
      <section id="join" className="py-20 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border-t border-b border-primary/20 relative">
        <div className="section-padding max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-black tracking-widest text-primary uppercase">READY TO TRANSCEND?</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black italic tracking-tight text-white">
            START YOUR <span className="text-primary">JOURNEY</span> TODAY
          </h2>
          <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base">
            Don't wait for Monday. Claim your 3-day guest pass or jump straight into membership. Our team and 24/7 PulseAI concierge are here for you.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleOpenJoin("PULSE")}
              className="bg-primary text-black font-black px-10 py-4 rounded-full text-base hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(204,255,0,0.4)]"
            >
              CLAIM FREE 3-DAY PASS →
            </button>
            <a
              href="#pricing"
              className="glass px-8 py-4 rounded-full text-base font-bold text-white hover:bg-white/10 transition-colors"
            >
              EXPLORE MEMBERSHIPS
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Dumbbell className="w-8 h-8 text-primary" />
                <span className="text-2xl font-black italic tracking-tighter">IRON<span className="text-primary">PULSE</span></span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                The ultimate fitness powerhouse. 24/7 biometric access, Olympic hardware, and live AI guidance designed for champions.
              </p>
              <div className="text-xs text-zinc-400">
                Created & Crafted by <a href="https://github.com/SainBux-HadiSeelro" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">Sain Bux Hadi</a>
              </div>
            </div>

            <div>
              <h4 className="font-black italic mb-6 text-white tracking-wider">QUICK NAVIGATION</h4>
              <ul className="space-y-4 text-sm text-zinc-400 font-medium">
                <li><a href="#about" className="hover:text-primary transition-colors">About Facility</a></li>
                <li><a href="#specs" className="hover:text-primary transition-colors">Tech & Equipment Specs</a></li>
                <li><a href="#classes" className="hover:text-primary transition-colors">Training Classes</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing Plans</a></li>
                <li><a href="#join" className="hover:text-primary transition-colors">Claim Free VIP Pass</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic mb-6 text-white tracking-wider">LOCATION & HOURS</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="font-bold text-white">📍 104 Iron Way, Metro Pulse Hub</li>
                <li>🕒 Gym Floor: <span className="text-primary font-bold">Open 24/7 / 365</span></li>
                <li>👨‍🏫 Staffed Coaching: 6:00 AM – 10:00 PM</li>
                <li>📞 +1 (800) 555-IRON</li>
                <li>✉️ contact@ironpulse-hadi.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic mb-6 text-white tracking-wider">NEWSLETTER</h4>
              <p className="text-zinc-500 text-sm mb-4">Get training routines, workout science, and exclusive offers.</p>
              {newsletterSubscribed ? (
                <div className="p-3 bg-primary/20 border border-primary/40 rounded-xl text-primary text-xs font-bold">
                  ✓ You are subscribed! Check your inbox for workout guides.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-sm w-full text-white focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-black px-4 py-2 rounded-xl font-black italic hover:scale-105 transition-transform"
                  >
                    GO
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-600 text-xs font-bold tracking-widest">
              © {new Date().getFullYear()} IRONPULSE FITNESS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-zinc-500 text-xs font-bold tracking-widest">
              <span className="hover:text-primary cursor-pointer transition-colors">INSTAGRAM</span>
              <span className="hover:text-primary cursor-pointer transition-colors">TWITTER</span>
              <span className="hover:text-primary cursor-pointer transition-colors">YOUTUBE</span>
              <span className="hover:text-primary cursor-pointer transition-colors">GITHUB</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

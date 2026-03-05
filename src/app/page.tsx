"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, TrendingUp, Users } from "lucide-react";

export default function Home() {
  const stats = [
    { icon: <Shield className="w-5 h-5" />, label: "Elite Training", value: "Expert Coaching" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Personalized", value: "Custom Plans" },
    { icon: <Users className="w-5 h-5" />, label: "Community", value: "500+ Members" },
  ];

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
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
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Join the Elite</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.9]">
              PUSH YOUR <br />
              <span className="text-primary italic">LIMITS</span> FURTHER
            </h1>

            <p className="max-w-md text-lg text-zinc-400 leading-relaxed">
              IRONPULSE is more than just a gym. It's where ambition meets intensity. Get access to elite equipment, world-class coaching, and a community that breeds excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-black font-black px-10 py-4 rounded-full flex items-center justify-center gap-2 text-lg hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]">
                START TRAINING <ArrowRight className="w-5 h-5" />
              </button>
              <button className="glass px-10 py-4 rounded-full flex items-center justify-center gap-2 text-lg font-bold hover:bg-white/10 transition-colors">
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
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
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
            <h3 className="text-4xl md:text-6xl font-black leading-tight">WE DON'T JUST TRAIN. <br /> WE <span className="text-zinc-500">EVOLVE.</span></h3>
            <p className="text-lg text-zinc-400">
              Founded on the principles of discipline and raw power, IRONPULSE offers an environment where every rep counts and every drop of sweat is a badge of honor. Our facility is designed for those who refuse to settle for average.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-4xl font-black italic text-primary">24/7</div>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1">ACCESS</div>
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

            <div className="pt-8">
              <button className="border-2 border-white/10 hover:border-primary px-8 py-3 rounded-full font-bold transition-colors">
                LEARN MORE
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-24 bg-zinc-950">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-primary font-black italic tracking-widest uppercase">OUR CLASSES</h2>
              <h3 className="text-4xl md:text-6xl font-black">CHOOSE YOUR <span className="text-gradient">BATTLE</span></h3>
            </div>
            <p className="max-w-md text-zinc-400">
              From high-intensity interval training to soul-searching yoga, we have a class for every goal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "HIIT BURN", level: "Advanced", line: "High Intensity" },
              { name: "POWER LIFT", level: "Elite", line: "Heavy Metal" },
              { name: "IRON CORE", level: "Intermediate", line: "Absolute Strength" },
              { name: "BOXING ELITE", level: "Pro", line: "Precision Power" },
              { name: "ZEN FLEX", level: "All Levels", line: "Recovery & Flow" },
              { name: "CARDIO BLAST", level: "Beginner", line: "Non-stop Energy" },
            ].map((cls, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all p-8 cursor-pointer h-80 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="text-xs font-black tracking-widest uppercase text-zinc-500 group-hover:text-primary transition-colors">
                    {cls.level}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-primary font-bold italic text-sm">{cls.line}</div>
                  <div className="text-3xl font-black italic">{cls.name}</div>
                </div>

                <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-black italic pointer-events-none group-hover:text-primary/10 transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-primary font-black italic tracking-widest uppercase">PRICING PLANS</h2>
            <h3 className="text-4xl md:text-6xl font-black">INVEST IN <span className="text-zinc-500">YOURSELF</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "BASIC", price: "29", features: ["Standard Gym Access", "Locker Room", "Free WiFi", "1 Class/Month"] },
              { name: "PULSE", price: "59", features: ["24/7 Unlimited Access", "All Classes Included", "Personal Trainer (1 session)", "IronPulse App"], popular: true },
              { name: "ELITE", price: "99", features: ["Dedicated Coach", "Nutrition Plan", "Sauna & Spa Access", "Monthly Massage"] },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-3xl border ${plan.popular ? "border-primary bg-primary/5 scale-105" : "border-white/10 bg-zinc-900/50"} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="text-xl font-black italic mb-2">{plan.name}</div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black italic tracking-tighter">${plan.price}</span>
                  <span className="text-zinc-500 font-bold uppercase text-xs">/month</span>
                </div>

                <ul className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-zinc-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-black transition-all ${plan.popular ? "bg-primary text-black hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]" : "bg-white/10 hover:bg-white/20"}`}>
                  GET STARTED
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 text-primary font-black italic text-2xl">I</div>
                <span className="text-2xl font-black italic tracking-tighter">IRON<span className="text-primary">PULSE</span></span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                The ultimate fitness destination for those who demand excellence. Push your limits and achieve greatness with IRONPULSE.
              </p>
            </div>

            <div>
              <h4 className="font-black italic mb-6">QUICK LINKS</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#classes" className="hover:text-primary transition-colors">Our Classes</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing Plans</a></li>
                <li><a href="#join" className="hover:text-primary transition-colors">Join Now</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic mb-6">SUPPORT</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic mb-6">NEWSLETTER</h4>
              <p className="text-zinc-500 text-sm mb-4">Get training tips and exclusive offers.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary text-black p-2 rounded-lg font-black italic">
                  GO
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-600 text-xs font-bold tracking-widest">
              © 2026 IRONPULSE FITNESS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-zinc-600">
              <span className="text-xs font-bold tracking-widest hover:text-primary cursor-pointer transition-colors">INSTAGRAM</span>
              <span className="text-xs font-bold tracking-widest hover:text-primary cursor-pointer transition-colors">TWITTER</span>
              <span className="text-xs font-bold tracking-widest hover:text-primary cursor-pointer transition-colors">YOUTUBE</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

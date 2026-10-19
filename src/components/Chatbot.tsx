"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronDown, CheckCircle2, Phone, Dumbbell, ShieldCheck, Clock } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  chips?: string[];
  isLeadForm?: boolean;
}

// Complete knowledge base of IronPulse Gym
const KNOWLEDGE_BASE = {
  about: `IRONPULSE is an ultra-premium, high-intensity fitness destination founded on discipline, science, and raw power. We offer 15,000+ sq. ft. of elite training space, world-class coaching, bio-hacking recovery (sauna, cryo), and 24/7 biometric RFID access.`,
  hours: `IRONPULSE is open 24 hours a day, 7 days a week, 365 days a year for active members via biometric RFID check-in! Our certified coaches and staff are on deck daily from 6:00 AM to 10:00 PM.`,
  location: `📍 Main Facility: 104 Iron Way, Metro Pulse District.\n📞 Phone: +1 (800) 555-IRON\n✉️ Email: contact@ironpulse-hadi.com\n🚗 Complimentary valet and member parking available on-site.`,
  plans: `Here are our 3 Membership Tiers:\n\n1. ⚡ **BASIC ($29/month)**: Standard gym floor access, locker room & showers, free high-speed WiFi, 1 complimentary class pass/month.\n2. 🔥 **PULSE ($59/month - MOST POPULAR)**: 24/7 unlimited access, all group classes included, 1 personal training session, IronPulse Member App & bio-tracking.\n3. 👑 **ELITE ($99/month - VIP)**: Dedicated 1-on-1 coach, custom nutrition & macro plan, unlimited Infrared Sauna & Cryo Spa access, monthly sports massage.`,
  classes: `We offer 6 signature high-performance classes:\n\n• **HIIT BURN (Advanced)**: 45-min metabolic conditioning & fat incinerator.\n• **POWER LIFT (Elite)**: Olympic lifting, deadlifts, and raw strength biomechanics.\n• **IRON CORE (Intermediate)**: Rotational power, core stabilization, and posture.\n• **BOXING ELITE (Pro)**: High-speed heavy bag work, footwork, and sparring conditioning.\n• **ZEN FLEX (All Levels)**: Athletic mobility, deep tissue stretch, and recovery flow.\n• **CARDIO BLAST (Beginner friendly)**: High-energy endurance and heart-rate zone training.`,
  specs: `⚡ **IRONPULSE Technical Specifications:**\n• Floor Area: 15,000+ sq ft Olympic-grade rubberized turf.\n• Equipment: Eleiko Olympic calibrated bars & bumpers, Hammer Strength ISO-Lateral, Keiser Pneumatic power racks.\n• Air Quality: Hospital-grade HEPA-14 climate control with 100% fresh air displacement.\n• Recovery Tech: Dual Cryotherapy pods, Infrared Saunas, and Hyperice recovery stations.\n• Access: 24/7 Biometric RFID & FaceID member security.`,
  trial: `🎉 You can claim a **FREE 3-Day VIP Guest Pass**! Just click 'Get Free Pass' below or tell me your name and fitness goal, and I'll generate your access code right here.`
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", phone: "", goal: "Muscle Gain" });
  const [showLeadModal, setShowLeadModal] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Welcome to IRONPULSE! I'm PulseAI, your 24/7 gym concierge & fitness advisor. How can I help you crush your goals today?",
      timestamp: "Just now",
      chips: ["💳 Membership Plans", "🏋️ Class Schedule", "⚡ Gym Tech Specs", "🎟️ Get Free Pass", "📍 Location & Hours"]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleChipClick = (chip: string) => {
    handleUserSend(chip);
  };

  const getBotResponse = (userText: string): { text: string; chips?: string[] } => {
    const q = userText.toLowerCase();

    // Membership / pricing
    if (q.includes("price") || q.includes("plan") || q.includes("membership") || q.includes("cost") || q.includes("fee") || q.includes("package")) {
      return {
        text: KNOWLEDGE_BASE.plans,
        chips: ["🎟️ Get Free Pass", "🏋️ Class Schedule", "⚡ Gym Tech Specs"]
      };
    }

    // Classes / training
    if (q.includes("class") || q.includes("schedule") || q.includes("hiit") || q.includes("boxing") || q.includes("power lift") || q.includes("workout")) {
      return {
        text: KNOWLEDGE_BASE.classes,
        chips: ["💳 Membership Plans", "🎟️ Get Free Pass", "🕒 Gym Hours"]
      };
    }

    // Specs / Equipment
    if (q.includes("spec") || q.includes("equipment") || q.includes("facility") || q.includes("machine") || q.includes("eleiko") || q.includes("sauna")) {
      return {
        text: KNOWLEDGE_BASE.specs,
        chips: ["💳 Membership Plans", "📍 Location & Hours", "🎟️ Get Free Pass"]
      };
    }

    // Location / Timing / Hours
    if (q.includes("hour") || q.includes("time") || q.includes("open") || q.includes("timing") || q.includes("when")) {
      return {
        text: KNOWLEDGE_BASE.hours,
        chips: ["📍 Location", "💳 Membership Plans", "🎟️ Get Free Pass"]
      };
    }

    if (q.includes("location") || q.includes("where") || q.includes("address") || q.includes("contact") || q.includes("phone") || q.includes("call")) {
      return {
        text: KNOWLEDGE_BASE.location,
        chips: ["🕒 Gym Hours", "💳 Membership Plans", "🎟️ Get Free Pass"]
      };
    }

    // Free pass / Trial / Join
    if (q.includes("free") || q.includes("pass") || q.includes("trial") || q.includes("join") || q.includes("register") || q.includes("sign up")) {
      return {
        text: `${KNOWLEDGE_BASE.trial}\n\nWould you like me to reserve your 3-Day Pass right now? Just click 'Book Pass Now' below!`,
        chips: ["⚡ Book Pass Now", "💳 Membership Plans", "🏋️ Class Schedule"]
      };
    }

    if (q.includes("book pass now") || q.includes("claim pass")) {
      setShowLeadModal(true);
      return {
        text: "🎯 Awesome choice! Please fill out the quick pass confirmation card below, and I'll generate your instant VIP access QR code.",
        chips: ["💳 View Plans", "📍 Visit Gym"]
      };
    }

    // About
    if (q.includes("about") || q.includes("who are you") || q.includes("ironpulse") || q.includes("what is")) {
      return {
        text: KNOWLEDGE_BASE.about,
        chips: ["⚡ Gym Tech Specs", "💳 Membership Plans", "🎟️ Get Free Pass"]
      };
    }

    // Greetings
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("salam") || q.includes("aoa")) {
      return {
        text: "Hello! Welcome to IRONPULSE ⚡. I'm ready 24/7 to answer any questions about our gym memberships, personal coaches, classes, or help you claim a free 3-day pass. What's on your mind?",
        chips: ["💳 Membership Plans", "🏋️ Class Schedule", "🎟️ Get Free Pass", "⚡ Gym Tech Specs"]
      };
    }

    // BMI / Diet
    if (q.includes("bmi") || q.includes("diet") || q.includes("nutrition") || q.includes("weight") || q.includes("fat loss") || q.includes("muscle")) {
      return {
        text: `💪 For personalized body transformations:\n\n• **Fat Loss**: Combine our HIIT BURN classes with a moderate caloric deficit (-300 to -500 kcal) and high protein (1.8g/kg body weight).\n• **Muscle Hypertrophy**: Hit our POWER LIFT stations 4-5x weekly with progressive overload.\n• **Coach Guidance**: Our ELITE tier includes weekly custom nutrition consultation.\n\nYou can also check out our interactive BMI calculator on this page!`,
        chips: ["💳 Membership Plans", "🎟️ Get Free Pass", "🏋️ Class Schedule"]
      };
    }

    // Default intelligent fallback
    return {
      text: `Thanks for asking! IRONPULSE offers 24/7 elite fitness access, certified coaches, recovery saunas, and 6 specialized class tracks. You can explore our memberships starting at $29/mo or claim a complimentary 3-day pass to experience the intensity firsthand.`,
      chips: ["💳 Membership Plans", "🏋️ Class Schedule", "⚡ Gym Tech Specs", "🎟️ Get Free Pass", "📍 Location & Hours"]
    };
  };

  const handleUserSend = (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    // Bot response simulation with natural typing delay
    setTimeout(() => {
      const botReply = getBotResponse(text);
      const newBotMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botReply.text,
        timestamp: "Just now",
        chips: botReply.chips
      };
      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.name || !leadData.phone) return;

    setLeadSubmitted(true);
    setShowLeadModal(false);

    const confirmationMsg: Message = {
      id: `lead-success-${Date.now()}`,
      sender: "bot",
      text: `🎉 **Pass Confirmed for ${leadData.name}!**\n\nYour 3-Day VIP Access Code is **#PULSE-${Math.floor(1000 + Math.random() * 9000)}**.\n\nShow this code at our front desk anytime (open 24/7) for instant entry and a complimentary fitness assessment. We look forward to seeing you at IRONPULSE!`,
      timestamp: "Just now",
      chips: ["📍 Get Directions", "🏋️ Explore Classes", "💳 Membership Plans"]
    };
    setMessages((prev) => [...prev, confirmationMsg]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="group relative flex items-center gap-3 bg-primary text-black px-5 py-3.5 rounded-full font-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] border-2 border-primary"
          aria-label="Open 24/7 AI Chatbot"
        >
          <div className="relative">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-black rounded-full border-2 border-primary" />
          </div>
          <span className="text-sm font-extrabold tracking-tight">AI Gym Concierge</span>
          <span className="hidden sm:inline-flex items-center gap-1 bg-black text-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
            24/7 LIVE
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`flex flex-col bg-zinc-950/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden ${
            isMinimized
              ? "w-80 h-16"
              : "w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh]"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-zinc-900 to-black p-4 border-b border-white/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                <Dumbbell className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full border-2 border-black" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black italic tracking-wide text-white">IRON<span className="text-primary">PULSE</span> AI</h3>
                  <span className="text-[9px] font-black uppercase bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">
                    24/7 Online
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">Live Customer Support & Gym Guide</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                title={isMinimized ? "Expand" : "Minimize"}
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${isMinimized ? "rotate-180" : ""}`} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-colors"
                title="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-thin scrollbar-thumb-zinc-800">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div className="flex items-end gap-2 max-w-[85%]">
                      {msg.sender === "bot" && (
                        <div className="w-6 h-6 rounded-lg bg-primary/20 text-primary border border-primary/30 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          IP
                        </div>
                      )}
                      <div
                        className={`p-3.5 rounded-2xl whitespace-pre-line text-[13px] leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-primary text-black font-semibold rounded-br-none shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                            : "bg-zinc-900 border border-white/10 text-zinc-200 rounded-bl-none shadow-md"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>

                    {/* Quick suggestion chips */}
                    {msg.chips && msg.chips.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5 ml-8">
                        {msg.chips.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleChipClick(chip)}
                            className="text-[11px] font-bold bg-white/5 hover:bg-primary hover:text-black text-zinc-300 border border-white/10 hover:border-primary px-2.5 py-1 rounded-full transition-all duration-200"
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-zinc-500 text-xs ml-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                    <span className="italic text-zinc-400">PulseAI is replying...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Instant Lead Pass Form Overlay */}
              {showLeadModal && (
                <div className="p-4 bg-zinc-900/90 border-t border-white/10 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Claim 3-Day VIP Free Pass
                    </span>
                    <button
                      onClick={() => setShowLeadModal(false)}
                      className="text-zinc-500 hover:text-white text-xs"
                    >
                      Cancel
                    </button>
                  </div>
                  <form onSubmit={handleLeadSubmit} className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={leadData.name}
                      onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Phone or WhatsApp Number"
                      required
                      value={leadData.phone}
                      onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary"
                    />
                    <select
                      value={leadData.goal}
                      onChange={(e) => setLeadData({ ...leadData, goal: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary"
                    >
                      <option value="Muscle Gain">Goal: Muscle Hypertrophy & Strength</option>
                      <option value="Fat Loss">Goal: Rapid Fat Loss & Cardio</option>
                      <option value="Athletic Conditioning">Goal: Boxing & Athletic Conditioning</option>
                      <option value="General Health">Goal: General Fitness & Recovery</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-[#b8e600] text-black font-black text-xs py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                    >
                      GET PASS INSTANTLY 🎟️
                    </button>
                  </form>
                </div>
              )}

              {/* Input Bar */}
              <div className="p-3 bg-zinc-900/70 border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask anything about IRONPULSE (e.g. plans, specs, timings)..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUserSend()}
                  className="flex-1 bg-black/80 border border-white/15 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  onClick={() => handleUserSend()}
                  disabled={!inputMessage.trim()}
                  className="w-9 h-9 rounded-2xl bg-primary text-black disabled:opacity-40 disabled:hover:scale-100 hover:scale-105 active:scale-95 transition-all flex items-center justify-center flex-shrink-0 font-bold"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

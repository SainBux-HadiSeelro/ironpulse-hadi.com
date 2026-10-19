# ⚡ IRONPULSE — Ultra-Premium Fitness & 24/7 Performance Hub

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.35-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge)

<p align="center">
  <b>A state-of-the-art gym and fitness web platform featuring a 24/7 Live AI Concierge Agent, interactive facility tech specs, biometric assessment tools, and high-energy luxury aesthetics.</b>
</p>

[Explore Repository](https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com.git) • [Report Bug](https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com/issues) • [Request Feature](https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com/issues)

</div>

---

## 🌟 Overview & Portfolio Highlights

**IRONPULSE** is engineered for high-performance fitness enthusiasts, powerlifters, and athletes. Built with the latest **Next.js 16 (App Router & Turbopack)**, **React 19**, and **Tailwind CSS v4**, this project was designed specifically as a flagship portfolio showcase.

### 🤖 1. Built-in 24/7 Live AI Concierge Agent (`PulseAI`)
- **Zero External Server Downtime**: Runs seamlessly 24/7 right in the application.
- **Deep Knowledge Base**: Trained on complete gym info — membership tiers, 6 class programs, facility hardware, timings, and location.
- **Interactive Lead & VIP Pass Generation**: Users can generate a verifiable digital 3-Day VIP pass with instant confirmation codes (`#PULSE-XXXX`) within the chat.
- **Quick Action Chips**: One-tap queries for rapid answers and seamless user experience.

### ⚡ 2. Interactive Facility & Hardware Tech Specifications
- Dynamic categorized breakdown:
  - 🏗️ **Facility Specs**: 15,000+ sq ft shock-absorbent turf, HEPA-14 medical-grade air filtration, circadian-tuned 650 Lux lighting, and zone-isolated acoustic engineering.
  - 🏋️ **Hardware & Steel**: Certified Eleiko Olympic bars, Hammer Strength ISO-Lateral machines, and 12-station modular power racks.
  - 🧬 **Bio-Hacking Recovery**: Sub-zero -110°C Cryotherapy, full-spectrum infrared saunas, 3°C cold plunge hydrotherapy, and Hyperice percussive lounges.
  - 📱 **Telemetry & Biometrics**: 24/7 RFID & FaceID check-in, PulseBand wearable heart-rate telemetry, and real-time gym crowd density index.

### 📊 3. Biometric BMI & Metabolic Health Calculator
- Interactive client-side biometric calculator.
- Instant categorizations (Underweight, Optimal, Overweight, Elevated) with tailored coaching prescriptions and class suggestions.

### 🎟️ 4. Dynamic Digital Member Pass & Checkout Flow
- Interactive modals for instant membership booking across **BASIC ($29/mo)**, **PULSE ($59/mo)**, and **ELITE ($99/mo)**.
- Generates a futuristic digital member card complete with unique barcode simulation, user name, and tier badge.

### 🎬 5. Interactive Video Teaser Manifesto & FAQ Accordion
- "Watch Film" video manifesto overlay modal.
- Expandable interactive FAQ accordion answering member questions on 24/7 access, class schedules, and cancellations.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.1.6** (App Router & Turbopack) | Fast Server/Client rendering, optimized routing |
| **UI Library** | **React 19.2.3** | Component composition & modern hooks |
| **Language** | **TypeScript 5.x** | End-to-end type safety |
| **Styling** | **Tailwind CSS v4** | Custom theme design, Electric Lime (`#CCFF00`) aesthetic |
| **Animations** | **Framer Motion 12.x** | Smooth layout transitions, entrance effects, and micro-interactions |
| **Icons** | **Lucide React** | Clean, lightweight vector iconography |
| **AI Concierge** | **PulseAI Engine** | Custom natural language matching & 24/7 client-side customer support |

---

## 📁 Project Structure

```bash
ironpulse-hadi.com/
├── public/
│   ├── hero-gym.png          # High-resolution gym hero photography
│   ├── about-gym.png         # Facility equipment showcase
│   └── favicon.ico           # High-energy brand icon
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind CSS v4 theme variables & utilities
│   │   ├── layout.tsx        # Root layout, metadata & global Chatbot mount
│   │   └── page.tsx          # Master landing page (Hero, Specs, Classes, Calculator, Pricing, FAQ)
│   └── components/
│       ├── Chatbot.tsx       # 24/7 Live AI Concierge with knowledge base & pass generator
│       ├── SpecsSection.tsx  # Interactive equipment & facility specifications matrix
│       ├── BmiCalculator.tsx # Interactive BMI health metric assessment tool
│       ├── JoinModal.tsx     # Member registration & digital pass card generator
│       └── Navbar.tsx        # Glassmorphic header with responsive mobile drawer
├── package.json              # Project dependencies & scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run IRONPULSE locally on your machine:

### 1. Prerequisites
- **Node.js**: v18.18 or higher (v20+ recommended)
- **npm** or **yarn** or **pnpm**

### 2. Clone the Repository
```bash
git clone https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com.git
cd ironpulse-hadi.com
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🎨 Design Philosophy & Palette

- **Background**: Absolute Pitch Black (`#000000`) & Deep Zinc (`#121212`)
- **Primary Accent**: Electric Lime (`#CCFF00`) — high octane adrenaline & energy
- **Secondary Accent**: High Energy Orange (`#FF3E00`)
- **Glassmorphism**: Backdrop blur with 1px translucent borders (`rgba(255, 255, 255, 0.1)`)

---

## 👨‍💻 Author & Credits

Designed and Developed by **Sain Bux Hadi Seelro**:
- **GitHub**: [@SainBux-HadiSeelro](https://github.com/SainBux-HadiSeelro)
- **Project Repository**: [ironpulse-hadi.com](https://github.com/SainBux-HadiSeelro/ironpulse-hadi.com.git)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

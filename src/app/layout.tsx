import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#CCFF00",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "IRONPULSE | Ultra-Premium Fitness & 24/7 Performance Hub",
  description:
    "Push your limits with IRONPULSE. 24/7 elite biometric access, Olympic Eleiko platforms, bio-hacking cryo/saunas, and 24/7 PulseAI live concierge. Developed by Sain Bux Hadi.",
  keywords: [
    "gym",
    "fitness",
    "bodybuilding",
    "powerlifting",
    "HIIT",
    "Next.js",
    "React",
    "TypeScript",
    "Sain Bux Hadi",
    "IronPulse",
  ],
  authors: [{ name: "Sain Bux Hadi Seelro", url: "https://github.com/SainBux-HadiSeelro" }],
  openGraph: {
    title: "IRONPULSE | Ultra-Premium Fitness & Performance Hub",
    description:
      "Join the elite. 15,000+ sq ft Olympic-grade gym floor, bio-hacking recovery, and 24/7 AI-guided coaching.",
    type: "website",
    locale: "en_US",
    siteName: "IRONPULSE",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
        {/* 24/7 Live Built-in PulseAI Concierge */}
        <Chatbot />
      </body>
    </html>
  );
}

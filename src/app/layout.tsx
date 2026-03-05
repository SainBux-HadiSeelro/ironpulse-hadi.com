import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IRONPULSE | Premium Fitness Experience",
  description: "Join IRONPULSE for a premium, high-energy fitness experience with expert trainers and state-of-the-art equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* AI Vized Factory Widget Chatbot */}
        <Script
          src="https://ai-vized-chatbot-factory-production-5041.up.railway.app/static/widget.js"
          data-chatbot-id="cb_FHkFDacKhiXv"
          data-api-url="https://ai-vized-chatbot-factory-production-5041.up.railway.app"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

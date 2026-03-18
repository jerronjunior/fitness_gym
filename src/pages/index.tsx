import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrainersSection } from "@/components/TrainersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-zinc-50`}
    >
      <Navbar />
      <main className="bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.12)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(23,23,23,1)_0,_rgba(0,0,0,1)_55%)]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrainersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


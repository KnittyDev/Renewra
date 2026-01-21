import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Header />
      <Hero />
      <LogoStrip />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

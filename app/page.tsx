
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TurkeyCoverage from "@/components/TurkeyCoverage";
import PartnerLogos from "@/components/PartnerLogos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <TurkeyCoverage />
      <PartnerLogos />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

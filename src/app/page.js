import Image from "next/image";
import Hero from "@/section/hero";
import Features from "@/section/features";
import HealthRecords from "@/section/health-records";
import Benefits from "@/section/benefits";
import CTA from "@/section/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HealthRecords />
      <Benefits />
      <CTA />
    </main>
  );
}

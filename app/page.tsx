import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PlansSection } from "@/components/PlansSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ink-900">
      <Hero />
      <PlansSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

import Hero from "@/components/Hero";
import FeatureSection from "@/components/featuresSection/feature-section";
import About from "@/components/About";
import Integration from "@/components/Integration";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import TestimonialsModern from "@/components/Testimonial/TestimonialsModern";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Atendimento de WhatsApp com IA",
  description: "Automatize o atendimento e as vendas no WhatsApp com IA para pequenas empresas, clínicas e profissionais liberais — setup completo feito lado a lado, pronto para rodar.",
  keywords: ["automação whatsapp", "chatbot ia", "atendimento automatizado", "vendas whatsapp", "pequenas empresas", "clínicas", "profissionais liberais"],
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureSection />      
      <LandingAccordionItem />
      <About />      
      <Integration />
      <FAQ />
      <TestimonialsModern />
      <Pricing />
      <Blog />
    </main>
  );
}

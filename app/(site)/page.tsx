import Hero from "@/components/Hero";
import { Brands } from "@/components/Brands";
import FeatureSection from "@/components/featuresSection/feature-section";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Home",
  description: "Automatize o atendimento e as vendas no WhatsApp com IA para pequenas empresas, clínicas e profissionais liberais — setup completo feito lado a lado, pronto para rodar.",
  keywords: ["automação whatsapp", "chatbot ia", "atendimento automatizado", "vendas whatsapp", "pequenas empresas", "clínicas", "profissionais liberais"],
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <FeatureSection />      
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Blog />
    </main>
  );
}

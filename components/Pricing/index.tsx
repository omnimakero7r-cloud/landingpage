"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PricingProps } from "./types";
import { usePricingToggle } from "./hooks/usePricingToggle";
import { PricingHeader } from "./components/PricingHeader";
import { BillingToggle } from "./components/BillingToggle";
import { PlanCard } from "./components/PlanCard";
import { pricingPlans } from "./pricingData";

const plans = pricingPlans;


export default function Pricing({
  plans = pricingPlans, // Valor padrão para evitar o erro
  title = "Preços simples e transparentes",
    description = "Escolha o plano que funciona para você\nTodos os planos incluem acesso à nossa plataforma, ferramentas de geração de leads e suporte dedicado.",
}: PricingProps) {
  const { isMonthly, switchRef, handleToggle } = usePricingToggle();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Adicionar validação
  if (!plans || plans.length === 0) {
    return null; // ou um componente de loading/placeholder
  }

  return (
    <section className="overflow-hidden py-20 lg:py-25 xl:py-30 flex flex-col items-center justify-center">
    <div className="container py-20">
      <PricingHeader title={title} description={description} />
      
      <BillingToggle 
        isMonthly={isMonthly}
        onToggle={handleToggle}
        switchRef={switchRef}
      />

      <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-3 sm:2 px-4 mx-auto gap-4">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            plan={plan}
            index={index}
            isMonthly={isMonthly}
            isDesktop={isDesktop}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

function Hero() {
  return (
    <section className="mx-auto overflow-hidden py-20 md:py-25 xl:py-30">
      <div className="flex flex-col items-center justify-center mx-auto max-w-c-1390 px-8 md:px-10 2xl:px-12">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="success">Seu WhatsApp trabalhando por você 24 horas por dia</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl md:text-6xl font-bold dark:text-white max-w-lg tracking-tighter text-left">
              Agende, venda e atenda clientes automaticamente
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Chega de perder tempo com mensagens repetitivas, clientes que desmarcam na última hora ou leads que somem porque você demorou a responder.
              Com a Omnimaker, você coloca a inteligência artificial para trabalhar no seu lugar e transforma conversas em vendas. 
              </p>
            </div>
            <div className="flex flex-row mt-4 gap-4">
            {/*Botão de ver ao vivo */}
            
              <Button size="lg" className="gap-4 rounded-full h-12 w-50" variant="outline">
                Ver ao vivo <PhoneCall className="w-4 h-12" />
              </Button>
            {/*Botão de criar conta */}       
              <Link href="#" className="gap-4">
                <InteractiveHoverButton text="Criar conta" className="px-3 w-50 h-12" aria-label="signup with email and password" />
              </Link>
            </div>
          </div>
          <div className="w-full text-lg md:text-xl lg:text-2xl flex flex-col items-end justify-center font-Grotesk">
            <VerticalCutReveal
              splitBy="lines"
              staggerDuration={0.025}
              staggerFrom="last"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
              }}
            >
              {`Olá 👋, sou a Maria.`}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="lines"
              staggerDuration={0.025}
              staggerFrom="first"
              reverse={false}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 1,
              }}
            >
              {`Assistente virtual da Omnimaker! 😊`}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="lines"
              staggerDuration={0.025}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 2,
              }}
            >
              {`Como posso te ajudar hoje❓`}
            </VerticalCutReveal>
          </div>          
        </div>
      </div>
    </section>
  );
}

export default Hero;
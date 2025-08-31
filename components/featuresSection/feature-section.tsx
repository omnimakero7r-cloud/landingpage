"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Bell,
  DollarSign,
  Users,
  Share2,
  FileBarChart,
} from "lucide-react";

const tasks = [
  {
    title: "70% de mais eficiência",
    subtitle: "📉 Economize tempo perdido com agendamentos manuais",
    icon: <Bell className="w-4 h-4" />,
  },
  {
    title: "50% menos no-show",
    subtitle: "🗓️ Garanta menos cancelamentos com lembretes automáticos",
    icon: <DollarSign className="w-4 h-4" />,
  },
  {
    title: "Atendimento 24/7",
    subtitle: "🌙 Não deixe seu cliente esperando, atenda em qualquer momento com a IA",
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: "Aumente a retenção",
    subtitle: "🕒 Respostas até 60% mais rápidas para seus clientes",
    icon: <Share2 className="w-4 h-4" />,
  },
  {
    title: "Aumente a conversão",
    subtitle: "⚡ 40% mais conversão de leads em clientes",
    icon: <FileBarChart className="w-4 h-4" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="relative w-full py-40 px-4 text-foreground">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE - Task Loop with Vertical Bar */}
        <div className="relative w-full max-w-md">
          <Card className="overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg">
            <CardContent className="relative h-[450px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-2 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 14,
                    ease: "linear",
                  }}
                >
                  {[...tasks, ...tasks].map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700 relative"
                    >
                      {/* Icon + Content */}
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-2">
                          <div className="bg-lime-300 text-black w-10 h-10 rounded-xl shadow-md flex items-center justify-center min-w-[40px]">{task.icon}</div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                            <p className="text-xs text-gray-500">{task.subtitle}</p>
                          </div>
                        </div>                        
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Fade effect only inside card */}
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <Badge variant="success" className="px-3 py-1 text-sm">
            Automação de Fluxos
          </Badge>
          <h3 className="text-lg sm:text-md lg:text-2xl font-normal text-gray-900 dark:text-white leading-relaxed">
            Automatize tarefas repetitivas {" "}
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-2xl"> com Omnimaker. 
              Otimize seus atendimentos com automação orientada por IA — desde agendamento, suporte e vendas — ajudando a sua equipe de funcionários com notificações inteligentes. Você foca no que realmente importa e economize tempo com soluções prontas para suas necessidades de negócios.</span>
          </h3>

          <div className="flex gap-3 flex-wrap">
            <Badge variant="outline" className="px-2 py-1 text-xs">Bots IA</Badge>
            <Badge variant="outline" className="px-2 py-1 text-xs">100+ Automações</Badge>
            <Badge variant="outline" className="px-2 py-1 text-xs">Prontas para Empresas</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

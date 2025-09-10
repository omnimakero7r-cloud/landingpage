import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [];

// Dados para o novo componente FaqAccordion
export const faqChatData = [
  {
    id: 1,
    question: "Como funciona a automação do WhatsApp?",
    answer: "Nossa IA monitora as mensagens do seu WhatsApp 24/7 e responde automaticamente seguindo o roteiro personalizado que criamos junto com você.",
    icon: "🤖",
    iconPosition: "right" as const,
  },
  {
    id: 2,
    question: "Quanto tempo leva para configurar?",
    answer: "O setup completo é feito em até 48 horas. Fazemos tudo lado a lado com você: configuração técnica, treinamento da IA e testes.",
    icon: "⚡",
    iconPosition: "left" as const,
  },
  {
    id: 3,
    question: "A IA consegue agendar consultas?",
    answer: "Sim! A IA pode verificar sua agenda, oferecer horários disponíveis e confirmar agendamentos automaticamente, integrando com sua agenda.",
    icon: "📅",
    iconPosition: "right" as const,
  },
  {
    id: 4,
    question: "Funciona para qualquer tipo de negócio?",
    answer: "Sim, adaptamos para pequenas empresas, clínicas, consultórios, salões, academias, escritórios e profissionais liberais.",
    icon: "🏢",
    iconPosition: "left" as const,
  },
  {
    id: 5,
    question: "E se a IA não souber responder algo?",
    answer: "A IA identifica quando não consegue resolver e transfere automaticamente para você, notificando sobre a situação.",
    icon: "🔄",
    iconPosition: "right" as const,
  },
  {
    id: 6,
    question: "Preciso ter conhecimento técnico para usar?",
    answer: "Não! Nós cuidamos de toda a parte técnica. Você só precisa nos passar informações sobre seu negócio e a IA já começa a atender.",
    icon: "🙌",
    iconPosition: "left" as const,
  },
  {
    id: 7,
    question: "Posso personalizar as respostas da IA?",
    answer: "Sim, todas as respostas seguem um roteiro criado especialmente para seu negócio. Você pode ajustar a linguagem, tom e até incluir promoções.",
    icon: "🎯",
    iconPosition: "right" as const,
  },
  {
    id: 8,
    question: "Funciona também no Instagram Direct?",
    answer: "Sim! Além do WhatsApp, integramos com Instagram Direct para que você centralize todo o atendimento no mesmo lugar.",
    icon: "📲",
    iconPosition: "left" as const,
  },
  {
    id: 9,
    question: "Preciso deixar o computador ligado?",
    answer: "Não. A automação roda em nuvem, 24/7, sem depender do seu celular ou computador estarem ativos.",
    icon: "☁️",
    iconPosition: "right" as const,
  },
  {
    id: 10,
    question: "E se eu quiser parar de usar?",
    answer: "Você pode cancelar quando quiser, sem multas ou taxas escondidas. O controle é totalmente seu.",
    icon: "🚪",
    iconPosition: "left" as const,
  },
];

export default faqData;

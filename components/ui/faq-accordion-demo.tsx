import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const defaultData = [
  {
    answer: "A internet não fecha. Está disponível 24/7.",
    icon: "❤️",
    iconPosition: "right" as const,
    id: 1,
    question: "Até que horas a internet funciona?",
  },
  {
    answer: "Não, você não precisa de licença para navegar neste site.",
    id: 2,
    question: "Preciso de licença para usar este site?",
  },
  {
    answer: "Nossos cookies são digitais, não comestíveis. São usados para funcionalidade do site.",
    id: 3,
    question: "Que sabor têm os cookies?",
  },
  {
    answer: "Sim, mas temos uma política de devolução",
    icon: "⭐",
    iconPosition: "left" as const,
    id: 4,
    question: "Posso me perder aqui?",
  },
  {
    answer: "Não se preocupe, você sempre pode voltar ou recarregar a página.",
    id: 5,
    question: "E se eu clicar no botão errado?",
  },
];

function DefaultDemo() {
  return (
    <FaqAccordion 
      data={defaultData}
      className="max-w-[700px]"
    />
  );
}

function CustomStyleDemo() {
  return (
    <FaqAccordion 
      data={defaultData}
      className="max-w-[700px]"
      questionClassName="bg-secondary hover:bg-secondary/80"
      answerClassName="bg-secondary text-secondary-foreground"
      timestamp="Atualizado diariamente às 12:00"
    />
  );
}

export { DefaultDemo, CustomStyleDemo };

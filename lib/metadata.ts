import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = "/images/og-image.png",
  path = "",
  noIndex = false,
  type = "website",
}: SEOProps): Metadata {
  const siteTitle = "Omnimaker - Automação de WhatsApp com IA";
  const fullTitle = title === "Home" ? siteTitle : `${title} | Omnimaker`;

  // Palavras-chave base da Omnimaker
  const baseKeywords = [
    "WhatsApp automação",
    "IA conversacional",
    "atendimento automatizado",
    "chatbot WhatsApp",
    "automação vendas",
    "inteligência artificial",
    "atendimento 24h",
    "lead scoring",
    "agendamento automático",
    "omnimaker"
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    authors: [{ name: "Omnimaker", url: "https://omnimaker.io" }],
    creator: "Omnimaker",
    publisher: "Omnimaker",
    
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Open Graph
    openGraph: {
      type,
      locale: "pt_BR",
      url: path,
      title: fullTitle,
      description,
      siteName: siteTitle,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@omnimaker",
      site: "@omnimaker",
    },
    
    // Canonical URL (relativo ao metadataBase)
    alternates: {
      canonical: path,
    },
    
    // Categoria
    category: "technology",
  };
}

// Metadata pré-configurada para páginas específicas
export const pageMetadata = {
  solucoes: {
    title: "Soluções",
    description: "Descubra como a Omnimaker pode automatizar seu atendimento no WhatsApp com IA personalizada para seu negócio.",
    keywords: ["soluções whatsapp", "automação personalizada", "ia para negócios"],
  },
  
  documentacao: {
    title: "Documentação",
    description: "Guias completos e documentação técnica para implementar e usar a automação WhatsApp da Omnimaker.",
    keywords: ["documentação", "guias", "implementação", "tutorial"],
  },
  
  blog: {
    title: "Blog",
    description: "Artigos, dicas e insights sobre automação WhatsApp, IA conversacional e transformação digital.",
    keywords: ["blog", "artigos", "dicas", "insights", "transformação digital"],
    type: "article" as const,
  },
  
  suporte: {
    title: "Suporte",
    description: "Central de ajuda e suporte técnico da Omnimaker. Tire suas dúvidas e obtenha assistência especializada.",
    keywords: ["suporte", "ajuda", "assistência", "atendimento"],
  },
  
  "politica-de-privacidade": {
    title: "Política de Privacidade",
    description: "Política de privacidade da Omnimaker - Como protegemos e utilizamos seus dados pessoais.",
    keywords: ["privacidade", "proteção dados", "lgpd"],
    noIndex: true,
  },
  
  "termos-de-uso": {
    title: "Termos de Uso",
    description: "Termos e condições de uso dos serviços da Omnimaker. Leia antes de utilizar nossa plataforma.",
    keywords: ["termos", "condições", "uso"],
    noIndex: true,
  },
};

import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = "/images/og-image.jpg",
  url = "https://omnimaker.io",
  noIndex = false,
}: SEOProps): Metadata {
  const siteTitle = "Omnimaker - Automação de WhatsApp com IA";
  const fullTitle = title === "Home" ? siteTitle : `${title} | ${siteTitle}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "WhatsApp automação",
      "IA conversacional",
      "atendimento automatizado",
      "chatbot WhatsApp",
      "automação vendas",
      ...keywords,
    ],
    authors: [{ name: "Omnimaker" }],
    creator: "Omnimaker",
    publisher: "Omnimaker",
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    
    // Open Graph
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
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
    },
    
    // Verificação
    verification: {
      google: "google-verification-code",
      yandex: "yandex-verification-code",
    },
    
    // Outros
    alternates: {
      canonical: url,
    },
    
    // Manifest
    manifest: "/manifest.json",
    
    // Icons
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

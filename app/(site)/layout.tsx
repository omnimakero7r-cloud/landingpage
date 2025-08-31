import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "../globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import ToasterProvider from "./providers/ToasterProvider";
import { CriticalResourcePreloader } from "@/components/ui/ResourcePreloader";

const inter = Inter({ subsets: ["latin"] });

// Configuração base de metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://omnimaker.io'),
  title: {
    default: "Omnimaker - Automação de WhatsApp com IA",
    template: "%s | Omnimaker"
  },
  description: "Automatize o atendimento e as vendas no WhatsApp com IA para pequenas empresas, clínicas e profissionais liberais — setup completo feito lado a lado, pronto para rodar.",
  keywords: [
    "WhatsApp automação",
    "IA conversacional", 
    "atendimento automatizado",
    "chatbot WhatsApp",
    "automação vendas",
    "inteligência artificial",
    "atendimento 24h",
    "lead scoring",
    "agendamento automático"
  ],
  authors: [{ name: "Omnimaker", url: "https://omnimaker.io" }],
  creator: "Omnimaker",
  publisher: "Omnimaker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Omnimaker - Automação de WhatsApp com IA",
    description: "Automatize o atendimento e as vendas no WhatsApp com IA para pequenas empresas, clínicas e profissionais liberais — setup completo feito lado a lado, pronto para rodar.",
    siteName: "Omnimaker",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omnimaker - Automação de WhatsApp com IA",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Omnimaker - Automação de WhatsApp com IA",
    description: "Automatize o atendimento e as vendas no WhatsApp com IA para pequenas empresas, clínicas e profissionais liberais — setup completo feito lado a lado, pronto para rodar.",
    images: ["/images/og-image.png"],
    creator: "@omnimaker",
    site: "@omnimaker",
  },
  
  // Manifest e ícones
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/images/icon-192x192.png" },
    ],
  },
  
  // Verificações (adicionar códigos reais quando disponíveis)
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  
  // Alternates
  alternates: {
    canonical: "/",
  },
  
  // Outros
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`} suppressHydrationWarning>
        <ThemeProvider>
          <CriticalResourcePreloader />
          <ToasterProvider />
          <Lines />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

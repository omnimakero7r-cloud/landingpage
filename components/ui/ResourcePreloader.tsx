"use client";
import { useEffect } from "react";

interface ResourcePreloaderProps {
  images?: string[];
  fonts?: string[];
  scripts?: string[];
}

export default function ResourcePreloader({ 
  images = [], 
  fonts = [], 
  scripts = [] 
}: ResourcePreloaderProps) {
  
  useEffect(() => {
    // Preload images
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload fonts
    fonts.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = href;
      document.head.appendChild(link);
    });

    // Preload scripts
    scripts.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = src;
      document.head.appendChild(link);
    });

  }, [images, fonts, scripts]);

  return null;
}

// Componente para preload de recursos críticos
export function CriticalResourcePreloader() {
  return (
    <ResourcePreloader
      images={[
        '/images/hero/hero-light.svg',
        '/images/hero/hero-dark.svg',
        '/images/logo/logo-light.svg',
        '/images/logo/logo-dark.svg',
      ]}
      fonts={[
        // Adicione URLs de fontes se necessário
      ]}
    />
  );
}

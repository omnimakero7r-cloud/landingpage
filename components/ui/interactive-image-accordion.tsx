"use client"

import React, { useState } from 'react';
import { InteractiveHoverButton } from './interactive-hover-button';
import { Badge } from './badge';

// --- Types ---
interface AccordionItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Data for the image accordion ---
const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: 'Imobiliárias',
    imageUrl: 'https://s3.omnimaker.io/omnimaker/corretor-de-imoveis-pode-atuar-como-mei-800-600%5B1%5D.jpg',
  },
  {
    id: 2,
    title: 'Suporte',
    imageUrl: 'https://s3.omnimaker.io/omnimaker/support-1024x682-1%5B1%5D.jpg',
  },
  {
    id: 3,
    title: 'Varejo',
    imageUrl: 'https://s3.omnimaker.io/omnimaker/com%C3%A9rcio-varejista%5B1%5D.jpg',
  },
  {
    id: 4,
    title: 'Saúde',
    imageUrl: 'https://s3.omnimaker.io/omnimaker/Conteudo-para-o-setor-de-saude-2%5B1%5D.jpeg',
  },
  {
    id: 5,
    title: 'Hotelaria',
    imageUrl: 'https://s3.omnimaker.io/omnimaker/cursos-de-hotelaria-640w%5B1%5D.png',
  },
];

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] border rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-800 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="inset-0 w-full h-full object-cover"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; 
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState<number>(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white dark:bg-background font-sans">
      <section className="container  max-w-c-1390 mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <Badge variant="success" className={"mb-4"}>Rotina otimizada</Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tenha mais tempo para focar no seu negócio
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg text-left">
            O Omnimaker atende com agilidade e organização enquanto você pode escalar a sua operação e fazer o que realmente importa.
            </p>
            <div className="flex flex-row mt-8 gap-8">
                <InteractiveHoverButton text="Ver planos" className="mt-8 w-40 h-12"/>
            
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

interface LazyMotionWrapperProps {
  children: ReactNode;
}

export default function LazyMotionWrapper({ children }: LazyMotionWrapperProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

interface LazyMotionComponentProps {
  children: ReactNode;
  className?: string;
  variants?: any;
  initial?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
  animate?: any;
  href?: string;
}

// Componentes otimizados com LazyMotion
export const LazyMotionDiv = ({ children, ...props }: LazyMotionComponentProps) => (
  <m.div {...props}>
    {children}
  </m.div>
);

export const LazyMotionSection = ({ children, ...props }: LazyMotionComponentProps) => (
  <m.section {...props}>
    {children}
  </m.section>
);

export const LazyMotionA = ({ children, ...props }: LazyMotionComponentProps) => (
  <m.a {...props}>
    {children}
  </m.a>
);

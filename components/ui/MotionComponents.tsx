"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionComponentProps {
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

export const MotionDiv = ({ children, ...props }: MotionComponentProps) => (
  <motion.div {...props}>
    {children}
  </motion.div>
);

export const MotionSection = ({ children, ...props }: MotionComponentProps) => (
  <motion.section {...props}>
    {children}
  </motion.section>
);

export const MotionA = ({ children, ...props }: MotionComponentProps) => (
  <motion.a {...props}>
    {children}
  </motion.a>
);


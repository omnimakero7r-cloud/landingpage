"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import testimonials from "./testimonialData";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsModern = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4 md:px-8 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center max-w-[678px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-full text-sm font-bold text-black bg-lime-300 border-primary/10">
              Depoimentos
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white tracking-tighter mt-5 text-center">
            O que nossos clientes dizem
          </h2>
          <p className="text-center mt-5 opacity-75 text-waterloo">
            Veja o que nossos clientes falam sobre nossa solução de IA para WhatsApp.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={40} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={35} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsModern;

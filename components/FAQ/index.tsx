"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { faqChatData } from "./faqData";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="overflow-hidden pb-10 lg:pb-y5 xl:py-30">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          
          {/* Título da seção */}
          <div className="text-center mb-16">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Badge className="font-bold text-black bg-lime-300 border-primary/10 mb-4">
                Perguntas Frequentes
              </Badge>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl xl:text-6xl">
                Dúvidas sobre a OmniMaker

              </h2>
            </motion.div>
          </div>

         <div className="flex flex-col max-w-full justify-center items-center">

            {/* FAQ Chat Style */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5 lg:w-2/3"
            >
              <div className="rounded-lg bg-white/10 shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                <FaqAccordion 
                  data={faqChatData}
                  className="max-w-full"
                  timestamp="Atualizado diariamente às 12:00"
                />
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;

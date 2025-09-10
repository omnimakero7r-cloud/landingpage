"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `Integrações`,
              subtitle: `Mantenha seus dados remotamente, de qualquer lugar`,
              description: `Integramos com as principais plataformas de CRM e automação de marketing para que você possa manter seus dados sempre atualizados e em um só lugar.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">

          <div className="flex flex-wrap justify-around gap-y-10">
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
              className="animate_top w-1/6"
            ><div className="absolute h-[25px] w-[40px] mt-4 ml-2 -z-1 rounded-full bg-blue-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/meta.svg"
                  alt="Meta Ads"
                />
              </div>
            </motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-orange-300"></div>
            </motion.div>

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
              className="animate_top w-1/6"
              ><div className="absolute h-[25px] w-[40px] mt-6 ml-1 -z-1 rounded-full bg-amber-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/instagram.svg"
                  alt="Instagram"
                />
              </div>
            </motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-violet-400"></div>
            </motion.div>


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
              className="animate_top w-1/6"
              ><div className="absolute h-[25px] w-[40px] mt-6 ml-1 -z-1 rounded-full bg-lime-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/calendar.svg"
                  alt="Calendar"
                />
              </div>
            </motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-yellow-300"></div>
            </motion.div>


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
              className="animate_top w-1/6"
            >
              <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-green-400"></div>
            </motion.div>

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
              className="animate_top w-1/6"
            ><div className="absolute h-[25px] w-[40px] mt-6 ml-1 -z-1 rounded-full bg-blue-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/drive.svg"
                  alt="Drive"
                />
              </div>
            </motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-amber-300"></div>
            </motion.div>

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
              className="animate_top w-1/6"
              ><div className="absolute h-[25px] w-[40px] mt-6 ml-1 -z-1 rounded-full bg-green-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/whatsapp.svg"
                  alt="WhatsApp"
                />
              </div>
            </motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-blue-500"></div>
            </motion.div>

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
              className="animate_top w-1/6"
            ><div className="absolute h-[25px] w-[40px] mt-6 ml-1 -z-1 rounded-full bg-blue-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/stripe.svg"
                  alt="Stripe"
                />
              </div>
            </motion.div>
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
              className="animate_top w-1/6"
              ><div className="absolute h-[25px] w-[40px] mt-6 ml-1 -z-1 rounded-full bg-blue-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/airtable.svg"
                  alt="Air Table"
                />
              </div>
            </motion.div>

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
              className="animate_top w-1/6"
              
            >
               <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-blue-300"></div>
            </motion.div>

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
              className="animate_top w-1/6"
              ><div className="absolute h-[25px] w-[40px] mt-6 ml-1 -z-1 rounded-full bg-blue-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/wordpress.svg"
                  alt="WordPress"
                />
              </div>
            </motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-lime-300"></div>
            </motion.div>

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
              className="animate_top w-1/6"
              ><div className="absolute h-[25px] w-[40px] mt-6 ml-1 -z-1 rounded-full bg-blue-300 blur-md"></div>
              <div className="inline-block">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/postgresql.svg"
                  alt="Postgres SQL"
                />
              </div>
            </motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="h-[100px] w-[100px] blur-3xl rounded-full bg-blue-300"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;

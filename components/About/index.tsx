import Image from "next/image";
import { MotionDiv } from "@/components/ui/MotionComponents";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </MotionDiv>
            <MotionDiv
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <Badge variant="success" className={"text-black mb-4"}>SaaS</Badge>
              <h2 className="relative mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white">
              Plataforma de Atendimento                
              </h2>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">              
              Fidelize clientes, organize conversas e aumente a produtividade da sua equipe de atendimento.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Mesmo número de Whatsapp
                  </h3>
                  <p>Seu número de Whatsapp centralizado funcionando para vários agentes de atendimento e vendas.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    WhatsaApp para equipes
                  </h3>
                  <p>Um número de Whatsapp centralizado funcionando para vários equipes e setores de atendimento.</p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="overflow-hidden py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
            <Badge variant="success" className={"text-black mb-4"}>Gestão de Clientes</Badge>
              <h2 className="relative mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white">              
              CRM para WhatsApp
              </h2>
              <p>
                Gerencie seus clientes e leads em um único lugar, com um CRM perfeitamente integrado com a ferramenta que seus vendedores e clientes mais utilizam: o WhatsApp.
                Automatize mensagens e libere sua equipe para conversas que exigem um toque humano.
               
              </p>
              <div>
                <a
                  href="#"
                  className="group outline rounded-full py-3 px-6 mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Saiba mais
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </MotionDiv>
            <MotionDiv
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-02.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== About part 3 Start ===== --> */}
      <section className="overflow-hidden py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </MotionDiv>
            <MotionDiv
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <Badge variant="success" className={"text-black mb-4"}>Atendimento Automatizado</Badge>
              <h2 className="relative mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white">
              ChatBot para WhatsApp              
              </h2>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">              
              Automatize mensagens e libere sua equipe para conversas que exigem um toque humano.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Utilize Listas ou botões de ação
                  </h3>
                  <p>O chatbot que dá super poderes para o seu WhatsApp com opções de listagem ou botões de ação tornando seu atendimeno mais dinâmico.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Qualifique seus leads
                  </h3>
                  <p>Tenha um funil que vende 24h por dia e transforme o seu negócio para sempre com o atendente mais produtivo do mundo.</p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* <!-- ===== About part 3 End ===== --> */}

      {/* <!-- ===== About part 4 Start ===== --> */}
      <section className="overflow-hidden py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
            <Badge variant="success" className={"text-black mb-4"}>Agente IA para WhatsApp</Badge>
              <h2 className="relative mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white">              
              Inteligência Artificial com o DNA do seu negócio
              </h2>
              <p>
              Tenha Agentes IA treinados para sua empresa, atendendo ou vendendo incansavelmente 24 horas por dia seus leads e clientes no WhatsApp.                    
              </p>
              <div>
                <a
                  href="#"
                  className="group outline rounded-full py-3 px-6 mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Saiba mais
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </MotionDiv>
            <MotionDiv
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-02.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* <!-- ===== About part 4 End ===== --> */}
    </>
  );
};

export default About;

import React from "react";
import { generateMetadata, pageMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  ...pageMetadata["termos-de-uso"],
  path: "/termos-de-uso",
});

const TermosDeUso = () => (
  <>
    {/* <!-- ===== Termos de Uso Start ===== --> */}
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* <!-- Section Header Start --> */}
        <div className="animate_top mx-auto mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-lime-300 px-4.5 py-1.5 border-black dark:border-strokedark">
            <span className="text-sectiontitle font-medium text-black">
              Termos de Uso
            </span>
          </div>
          <h1 className="mx-auto mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2">
            Termos e Condições de Uso
          </h1>
          <p className="mx-auto text-body-color dark:text-body-color-dark md:w-4/5 lg:w-3/5 xl:w-[46%]">
            Conheça os termos e condições para utilização dos serviços da Omnimaker
          </p>
        </div>
        {/* <!-- Section Header End --> */}

        {/* <!-- Content Start --> */}
        <div className="animate_top">
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-6 py-8 sm:px-8 sm:py-11 lg:px-8 xl:px-12 xl:py-16">
            <div className="prose prose-lg mx-auto max-w-none dark:prose-invert">
              <div className="mb-8 text-center">
                <p className="text-body-color dark:text-body-color-dark text-base">
                  <strong>Última atualização:</strong> 26/08/2025
                </p>
              </div>

              <div className="space-y-8">
                {/* Aceitação dos termos */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">1. Aceitação dos Termos</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Ao acessar e utilizar o site da Omnimaker, seus serviços, produtos ou plataformas, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços. Estes termos constituem um acordo legal entre você e a Omnimaker Soluções em Tecnologia.
                  </p>
                </div>

                {/* Descrição dos serviços */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">2. Descrição dos Serviços</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    A Omnimaker oferece soluções de automação de atendimento via WhatsApp e outras plataformas de mensageria, incluindo:
                  </p>
                  <ul className="ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Sistemas de chatbot e automação de respostas</li>
                    <li className="list-disc">Integração com WhatsApp Business API</li>
                    <li className="list-disc">Ferramentas de gestão de conversas e leads</li>
                    <li className="list-disc">Analytics e relatórios de performance</li>
                    <li className="list-disc">Consultoria e implementação de soluções</li>
                  </ul>
                </div>

                {/* Elegibilidade e registro */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">3. Elegibilidade e Registro</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Para utilizar nossos serviços, você deve:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Ter pelo menos 18 anos de idade</li>
                    <li className="list-disc">Possuir capacidade legal para celebrar contratos</li>
                    <li className="list-disc">Fornecer informações verdadeiras, precisas e atualizadas</li>
                    <li className="list-disc">Manter a confidencialidade de suas credenciais de acesso</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    É responsabilidade do usuário notificar imediatamente a Omnimaker sobre qualquer uso não autorizado de sua conta.
                  </p>
                </div>

                {/* Uso aceitável */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">4. Uso Aceitável</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Você concorda em utilizar nossos serviços apenas para propósitos legais e de acordo com estes termos. É proibido:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Usar os serviços para atividades ilegais ou fraudulentas</li>
                    <li className="list-disc">Violar direitos de propriedade intelectual de terceiros</li>
                    <li className="list-disc">Transmitir conteúdo ofensivo, abusivo ou inadequado</li>
                    <li className="list-disc">Tentar acessar sistemas ou dados não autorizados</li>
                    <li className="list-disc">Interferir no funcionamento dos serviços</li>
                    <li className="list-disc">Usar os serviços para spam ou marketing não solicitado</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    A Omnimaker reserva-se o direito de suspender ou encerrar contas que violem estes termos.
                  </p>
                </div>

                {/* Propriedade intelectual */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">5. Propriedade Intelectual</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Todos os direitos de propriedade intelectual relacionados aos serviços da Omnimaker, incluindo mas não se limitando a:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Software, algoritmos e código-fonte</li>
                    <li className="list-disc">Designs, interfaces e elementos visuais</li>
                    <li className="list-disc">Marcas registradas e nomes comerciais</li>
                    <li className="list-disc">Documentação técnica e materiais de treinamento</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    São de propriedade exclusiva da Omnimaker ou de seus licenciadores. Nada nestes termos concede a você direitos de propriedade sobre estes ativos.
                  </p>
                </div>

                {/* Privacidade e dados */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">6. Privacidade e Proteção de Dados</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    O uso de nossos serviços está sujeito à nossa Política de Privacidade, que descreve como coletamos, usamos e protegemos suas informações pessoais. Ao utilizar nossos serviços, você concorda com as práticas descritas na Política de Privacidade, que está incorporada a estes termos por referência.
                  </p>
                </div>

                {/* Responsabilidades do usuário */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">7. Responsabilidades do Usuário</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Como usuário de nossos serviços, você é responsável por:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Manter a confidencialidade de suas credenciais de acesso</li>
                    <li className="list-disc">Usar os serviços de acordo com a legislação aplicável</li>
                    <li className="list-disc">Obter consentimentos necessários para contatar seus clientes</li>
                    <li className="list-disc">Respeitar as políticas das plataformas de mensageria</li>
                    <li className="list-disc">Não transmitir conteúdo inadequado ou ilegal</li>
                    <li className="list-disc">Pagar pelos serviços contratados em dia</li>
                  </ul>
                </div>

                {/* Limitação de responsabilidade */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">8. Limitação de Responsabilidade</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Em nenhuma circunstância a Omnimaker será responsável por:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Danos indiretos, incidentais ou consequenciais</li>
                    <li className="list-disc">Perda de lucros, dados ou oportunidades de negócio</li>
                    <li className="list-disc">Interrupções temporárias dos serviços por manutenção</li>
                    <li className="list-disc">Ações de terceiros ou provedores de plataforma</li>
                    <li className="list-disc">Uso inadequado dos serviços pelo usuário</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    A responsabilidade total da Omnimaker será limitada ao valor pago pelos serviços no período de 12 meses anteriores ao evento que deu origem à responsabilidade.
                  </p>
                </div>

                {/* Disponibilidade dos serviços */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">9. Disponibilidade dos Serviços</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    A Omnimaker se esforça para manter os serviços disponíveis 24/7, mas não garante disponibilidade ininterrupta. Os serviços podem estar indisponíveis devido a:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Manutenção programada ou de emergência</li>
                    <li className="list-disc">Falhas técnicas ou de infraestrutura</li>
                    <li className="list-disc">Interrupções de provedores terceiros</li>
                    <li className="list-disc">Força maior ou eventos fora de nosso controle</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    A Omnimaker se compromete a comunicar interrupções programadas com antecedência, quando possível.
                  </p>
                </div>

                {/* Pagamentos e cobrança */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">10. Pagamentos e Cobrança</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Os preços dos serviços são estabelecidos conforme planos contratados e podem ser alterados mediante aviso prévio de 30 dias. Você concorda em:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Pagar todos os valores em dia conforme contrato</li>
                    <li className="list-disc">Fornecer informações de pagamento válidas e atualizadas</li>
                    <li className="list-disc">Autorizar cobranças automáticas quando aplicável</li>
                    <li className="list-disc">Pagar multas por atraso conforme legislação</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    A inadimplência pode resultar na suspensão ou cancelamento dos serviços.
                  </p>
                </div>

                {/* Rescisão */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">11. Rescisão do Contrato</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Qualquer uma das partes pode rescindir estes termos:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Com aviso prévio de 30 dias, por qualquer motivo</li>
                    <li className="list-disc">Imediatamente, em caso de violação grave dos termos</li>
                    <li className="list-disc">Por inadimplência no pagamento após 15 dias de atraso</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Após a rescisão, você deve cessar o uso dos serviços e a Omnimaker pode excluir seus dados conforme política de retenção.
                  </p>
                </div>

                {/* Lei aplicável */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">12. Lei Aplicável e Jurisdição</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca de Feira de Santana - BA, com renúncia expressa a qualquer outro, por mais privilegiado que seja. As partes se comprometem a tentar resolver disputas através de mediação antes de recorrer ao Poder Judiciário.
                  </p>
                </div>

                {/* Disposições gerais */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">13. Disposições Gerais</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Estes termos constituem o acordo completo entre as partes e substituem todos os acordos anteriores. Se qualquer disposição for considerada inválida, as demais permanecerão em vigor. A Omnimaker pode ceder estes termos a terceiros, mas você não pode ceder sem consentimento prévio por escrito.
                  </p>
                </div>

                {/* Alterações */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">14. Alterações dos Termos</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    A Omnimaker pode modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por e-mail ou através de aviso em destaque no site. O uso continuado dos serviços após as modificações constitui aceitação dos novos termos. Recomendamos revisar periodicamente esta página para se manter informado sobre possíveis alterações.
                  </p>
                </div>

                {/* Contato */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">15. Contato</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Para dúvidas sobre estes termos ou nossos serviços:
                  </p>
                  <ul className="ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">E-mail: <a href="mailto:contato@omnimaker.io" className="text-primary hover:underline">contato@omnimaker.io</a></li>
                    <li className="list-disc">Endereço: Rua Boa Nova, Conceição, Feira de Santana - BA, CEP 44065-382</li>
                    <li className="list-disc">WhatsApp: (75) 98178-5769</li>
                    <li className="list-disc">Horário de atendimento: 24/7 (horário de Brasília)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Content End --> */}
      </div>
    </section>
    {/* <!-- ===== Termos de Uso End ===== --> */}
  </>
);

export default TermosDeUso;

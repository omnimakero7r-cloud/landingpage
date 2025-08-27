import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - Omnimaker",
  description: "Política de Privacidade da Omnimaker",
};

const PoliticaDePrivacidade = () => (
  <>
    {/* <!-- ===== Política de Privacidade Start ===== --> */}
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* <!-- Section Header Start --> */}
        <div className="animate_top mx-auto mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
            <span className="text-sectiontitle font-medium text-black dark:text-white">
              Política de Privacidade
            </span>
          </div>
          <h1 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
            Proteção de Dados e Privacidade
          </h1>
          <p className="mx-auto text-body-color dark:text-body-color-dark md:w-4/5 lg:w-3/5 xl:w-[46%]">
            Conheça como a Omnimaker protege e gerencia seus dados pessoais em conformidade com a LGPD
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
                {/* Quem somos */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Quem somos</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Omnimaker Soluções em Tecnologia, com sede em Feira de Santana - BA, é responsável pelo tratamento de dados pessoais coletados em nosso site e em nossos serviços de automação de atendimento via WhatsApp. Contato do Encarregado (DPO): João Gleison Oliveira Gomes – <a href="mailto:contato@omnimaker.io" className="text-primary hover:underline">contato@omnimaker.io</a> – (75)98178-5769.
                  </p>
                </div>

                {/* Abrangência */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Abrangência</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Esta Política descreve como coletamos, usamos, compartilhamos e protegemos dados pessoais de visitantes do site, leads, clientes, usuários finais e representantes de empresas que utilizam nossos serviços. Aplica-se ao site, páginas de captura, formulários, conteúdos e integrações oficialmente disponibilizadas pela Omnimaker.
                  </p>
                </div>

                {/* Dados que coletamos */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Dados que coletamos</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">3.1 Dados fornecidos diretamente</h3>
                      <ul className="ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                        <li className="list-disc">Identificação e contato: nome, e‑mail, telefone/WhatsApp, empresa, cargo, cidade/UF.</li>
                        <li className="list-disc">Dados comerciais: segmento, tamanho da empresa, interesses de produto/planos, mensagens enviadas em formulários ou chats.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">3.2 Dados coletados automaticamente</h3>
                      <ul className="ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                        <li className="list-disc">Dados de navegação: IP, dispositivo, navegador, páginas acessadas, origem de tráfego, cookies, identificadores on-line, tempo de sessão.</li>
                        <li className="list-disc">Métricas de uso: eventos de cliques, CTAs, taxas de conversão.</li>
                        <li className="list-disc">Logs técnicos para segurança e diagnóstico.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">3.3 Dados de terceiros e integrações</h3>
                      <ul className="ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                        <li className="list-disc">Plataformas de anúncios e analytics, CRMs, ferramentas de atendimento e provedores de mensagens (por exemplo, WhatsApp Business API/BSP), quando autorizados pelo titular/cliente e necessários à prestação do serviço.</li>
                        <li className="list-disc">Bases públicas ou parceiros, seguindo limites legais e contratuais.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bases legais e finalidades */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Bases legais e finalidades</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Tratamos dados com base em:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Execução de contrato e procedimentos preliminares: cadastro, implantação (setup), suporte, faturamento, operação do serviço.</li>
                    <li className="list-disc">Legítimo interesse: melhoria do site e produtos, segurança, prevenção à fraude, comunicações institucionais relevantes.</li>
                    <li className="list-disc">Consentimento: newsletters, materiais de marketing, cookies não essenciais, campanhas e remarketing.</li>
                    <li className="list-disc">Cumprimento de obrigação legal/regulatória: registros fiscais, atendimento a autoridades.</li>
                  </ul>
                  
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base font-semibold">Principais finalidades:</p>
                  <ul className="ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Prover o site, responder contatos, qualificar e converter leads.</li>
                    <li className="list-disc">Implantar e operar soluções de automação de WhatsApp, inclusive configuração lado a lado (setup completo).</li>
                    <li className="list-disc">Oferecer suporte, treinamento e sucesso do cliente.</li>
                    <li className="list-disc">Medir performance, realizar análises e testes.</li>
                    <li className="list-disc">Enviar comunicações de marketing, quando consentidas, com opção de opt‑out.</li>
                    <li className="list-disc">Garantir segurança, integridade e conformidade.</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Cookies e tecnologias similares</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Utilizamos cookies essenciais (funcionamento do site) e não essenciais (analytics, desempenho, marketing). O banner de consentimento permite aceitar, rejeitar ou personalizar categorias. Preferências podem ser alteradas em [link/ícone "Preferências de Cookies" no rodapé]. Sem consentimento, cookies não essenciais não são ativados.
                  </p>
                </div>

                {/* Compartilhamento */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Compartilhamento de dados</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Não compartilhamos dados:
                  </p>
                  <ul className="ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Provedores e operadores: hospedagem, infraestrutura, analytics, atendimento, e‑mail/SMS/WhatsApp, CRM, pagamento, auditoria e segurança.</li>
                    <li className="list-disc">Parceiros comerciais e integrações solicitadas pelo cliente.</li>
                    <li className="list-disc">Obrigações legais: autoridades públicas, ordens judiciais.</li>
                    <li className="list-disc">Operações societárias: fusões, aquisições ou reorganizações, com garantia de continuidade das proteções.</li>
                    <li className="list-disc">Todos os terceiros seguem contratos e medidas de segurança compatíveis com a LGPD.</li>
                  </ul>
                </div>

                {/* Transferências internacionais */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Transferências internacionais</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Dados podem ser processados fora do Brasil quando fornecedores utilizam infraestrutura global. Nesses casos, adotamos salvaguardas adequadas (cláusulas contratuais, padrões de segurança e avaliações de impacto), buscando níveis de proteção equivalentes.
                  </p>
                </div>

                {/* Retenção */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Retenção e descarte</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Mantemos dados somente pelo tempo necessário às finalidades indicadas, cumprimento de obrigações legais/contratuais, exercício regular de direitos ou defesa em processos. Após o prazo, dados são eliminados ou anonimizados de forma segura.
                  </p>
                </div>

                {/* Direitos do titular */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Direitos do titular</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Nos termos da LGPD, o titular pode:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Confirmar a existência de tratamento e acessar dados.</li>
                    <li className="list-disc">Corrigir dados incompletos, inexatos ou desatualizados.</li>
                    <li className="list-disc">Anonimizar, bloquear ou eliminar dados desnecessários, excessivos ou tratados em desconformidade.</li>
                    <li className="list-disc">Portar dados a outro fornecedor (quando aplicável).</li>
                    <li className="list-disc">Eliminar dados tratados com consentimento.</li>
                    <li className="list-disc">Obter informações sobre compartilhamentos e consequências da negativa.</li>
                    <li className="list-disc">Revogar consentimento e se opor a tratamentos baseados em legítimo interesse, quando cabível.</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Para exercer direitos, contate: <a href="mailto:contato@omnimaker.io" className="text-primary hover:underline">contato@omnimaker.io</a> e forneça informações para verificação de identidade. Responderemos nos prazos legais.
                  </p>
                </div>

                {/* Segurança */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Segurança da informação</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Adotamos controles técnicos e organizacionais compatíveis com a natureza das operações, incluindo:
                  </p>
                  <ul className="mb-6 ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">Criptografia em trânsito e, quando aplicável, em repouso.</li>
                    <li className="list-disc">Controle de acesso e segregação de funções.</li>
                    <li className="list-disc">Registro e monitoramento de eventos.</li>
                    <li className="list-disc">Backups, gestão de vulnerabilidades e testes periódicos.</li>
                    <li className="list-disc">Treinamento de colaboradores e acordos de confidencialidade.</li>
                  </ul>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Apesar dos esforços, nenhum sistema é 100% seguro. Em caso de incidente, seguiremos planos de resposta e notificações conforme a legislação.
                  </p>
                </div>

                {/* Marketing */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Comunicações de marketing</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Envios promocionais ocorrem com base em consentimento ou legítimo interesse, sempre com opção clara de descadastro em cada mensagem. Preferências podem ser gerenciadas em [link de preferências], sem prejuízo de comunicações transacionais essenciais ao serviço.
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Uso do WhatsApp e automações</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Ao contratar a Omnimaker, o cliente declara ter obtido consentimentos e bases legais necessárias para contatar seus consumidores via WhatsApp e outros canais. Atuamos como operador para processar dados conforme instruções do cliente, respeitando políticas da Meta/WhatsApp e normas aplicáveis. O cliente é responsável pelo conteúdo das mensagens, listas e regras de compliance do próprio negócio.
                  </p>
                </div>

                {/* Crianças */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Crianças e adolescentes</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Nossos serviços não se destinam a menores de 18 anos. Não coletamos intencionalmente dados de crianças. Se houver coleta indevida, solicite exclusão imediata via <a href="mailto:contato@omnimaker.io" className="text-primary hover:underline">contato@omnimaker.io</a>.
                  </p>
                </div>

                {/* Terceiros */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Sites e serviços de terceiros</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    O site pode conter links/integradores de terceiros. Cada serviço possui sua própria política. Não nos responsabilizamos por práticas externas. Recomenda-se ler as políticas desses terceiros antes de fornecer dados.
                  </p>
                </div>

                {/* Alterações */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Alterações desta Política</h2>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Podemos atualizar esta Política para refletir mudanças legais, operacionais ou tecnológicas. A versão vigente será sempre publicada neste endereço, com indicação de "Última atualização". Mudanças relevantes poderão ser comunicadas por e‑mail ou aviso em destaque.
                  </p>
                </div>

                {/* Contato */}
                <div className="rounded-lg border border-stroke p-6 dark:border-strokedark dark:bg-blacksection">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Contato</h2>
                  <p className="mb-4 text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Dúvidas, solicitações ou reclamações:
                  </p>
                  <ul className="ml-6 space-y-2 text-body-color dark:text-body-color-dark">
                    <li className="list-disc">E‑mail do Encarregado (DPO): <a href="mailto:contato@omnimaker.io" className="text-primary hover:underline">contato@omnimaker.io</a></li>
                    <li className="list-disc">Endereço: Rua Boa Nova, Conceição, Feira de Santana -BA, CEP 44065-382</li>
                    <li className="list-disc">Canal adicional: WhatsApp (75)98178-5769</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Content End --> */}
      </div>
    </section>
    {/* <!-- ===== Política de Privacidade End ===== --> */}
  </>
);

export default PoliticaDePrivacidade;

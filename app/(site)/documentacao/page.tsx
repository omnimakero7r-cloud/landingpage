import SidebarLink from "@/components/Docs/SidebarLink";
import { generateMetadata, pageMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  ...pageMetadata.documentacao,
  path: "/documentacao",
});

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32 ">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="gap-4 lg:gap-0 flex flex-wrap lg:flex-nowrap">
            <div className="w-full sm:w-2/3 md:w-1/2 px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Bem vindo a documentação do Omnimaker</h1>

                  <p className="text-body-color dark:text-body-color-dark text-base">
                   Esta documentação serve como um template simples para mostrar um layout e formato de exemplo. É criada apenas para fins de demonstração e não é destinada a uso oficial.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Visite:{" "}
                  <b>
                    <a href="/documentacao">
                      https://omnimaker.io/documentacao
                    </a>
                  </b>{" "}
                  para ver a documentação real, o guia de configuração e até mesmo vídeos de instruções
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

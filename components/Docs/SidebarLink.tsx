"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/documentacao`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Introdução
        </Link>
        <Link
          href={`/documentacao`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black/60 dark:text-white/60 `}
        >
          Guia de Template Bootstrap
        </Link>
        <Link
          href={`/documentacao`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black/60 dark:text-white/60 `}
        >
          Guia de Estilo
        </Link>
        <Link
          href={`/documentacao`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black/60 dark:text-white/60 `}
        >
          Usando Componentes Tailwind
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;

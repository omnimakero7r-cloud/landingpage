"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
          Algo deu errado!
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Ocorreu um erro inesperado. Tente novamente.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}


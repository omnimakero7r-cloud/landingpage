import { Suspense, ReactNode } from "react";

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

const DefaultFallback = ({ name }: { name?: string }) => (
  <div className="flex items-center justify-center py-8">
    <div className="flex flex-col items-center space-y-2">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-primary"></div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {name ? `Carregando ${name}...` : "Carregando..."}
      </span>
    </div>
  </div>
);

export default function SuspenseWrapper({ 
  children, 
  fallback, 
  name 
}: SuspenseWrapperProps) {
  return (
    <Suspense fallback={fallback || <DefaultFallback name={name} />}>
      {children}
    </Suspense>
  );
}

// Suspense específicos para diferentes seções
export const SuspenseHero = ({ children }: { children: ReactNode }) => (
  <SuspenseWrapper name="Hero" fallback={
    <div className="h-96 flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <DefaultFallback name="Hero" />
    </div>
  }>
    {children}
  </SuspenseWrapper>
);

export const SuspenseSection = ({ children, name }: { children: ReactNode; name: string }) => (
  <SuspenseWrapper name={name} fallback={
    <div className="py-20 flex items-center justify-center">
      <DefaultFallback name={name} />
    </div>
  }>
    {children}
  </SuspenseWrapper>
);

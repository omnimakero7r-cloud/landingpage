export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-primary"></div>
        <div className="text-lg font-medium text-gray-600 dark:text-gray-300">
          Carregando...
        </div>
      </div>
    </div>
  );
}


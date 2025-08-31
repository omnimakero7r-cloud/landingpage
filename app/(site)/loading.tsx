import { Loader } from "@/components/ui/loader"

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader variant="typing" size="lg" text="Carregando..."/>
      </div>
    </div>
  );
}


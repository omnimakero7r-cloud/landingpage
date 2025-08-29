import Signup from "@/components/Auth/Signup";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Cadastro",
  description: "Crie sua conta gratuita na Omnimaker e comece a automatizar seu WhatsApp hoje mesmo",
  keywords: ["cadastro gratuito", "conta omnimaker", "teste grátis"],
});

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}

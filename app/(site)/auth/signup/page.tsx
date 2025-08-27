import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de Cadastro - Solid SaaS Boilerplate",

  // other metadata
  description: "Esta é a página de Cadastro para Startup Pro",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}

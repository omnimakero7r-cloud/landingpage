import Signin from "@/components/Auth/Signin";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Login",
  description: "Faça login em sua conta Omnimaker para gerenciar sua automação de WhatsApp",
  noIndex: true,
});

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;

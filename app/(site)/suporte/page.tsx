import React from "react";
import Contact from "@/components/Contact";
import { generateMetadata, pageMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  ...pageMetadata.suporte,
  path: "/suporte",
});

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;

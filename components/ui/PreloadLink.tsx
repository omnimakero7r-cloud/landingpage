"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

interface PreloadLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  prefetch?: boolean;
  onHover?: boolean;
}

export default function PreloadLink({ 
  href, 
  children, 
  className, 
  prefetch = true,
  onHover = true,
  ...props 
}: PreloadLinkProps) {
  const router = useRouter();
  const [isPrefetched, setIsPrefetched] = useState(false);

  const handleMouseEnter = () => {
    if (onHover && !isPrefetched) {
      router.prefetch(href);
      setIsPrefetched(true);
    }
  };

  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </Link>
  );
}

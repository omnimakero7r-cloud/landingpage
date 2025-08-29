"use client";
import ToasterContext from "../../context/ToastContext";
import { ReactNode } from "react";

interface ToasterProviderProps {
  children?: ReactNode;
}

export default function ToasterProvider({ children }: ToasterProviderProps) {
  return (
    <>
      <ToasterContext />
      {children}
    </>
  );
}


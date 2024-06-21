"use client";
import { CryptoTable } from "@/Components/CryptoTable/CryptoTable";
import { CryptoProps } from "@/Utils/types";
import { AuthProvider } from "@/context/authcontext";
import React from "react";

export const cryptoPage = (crypto: CryptoProps) => {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <CryptoTable />
    </main>
  );
};

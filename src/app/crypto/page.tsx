"use client";
import CardWrapper from "@/Components/Cards/CardWrapper";
import { CryptoTable } from "@/Components/CryptoTable/CryptoTable";
import { CryptoForm } from "@/Components/Forms/CryptoForm";
import { CreateCryptoModal } from "@/Components/Modal/CreateCryptoModal";
import { getAllCryptos, getCryptoHistory } from "@/Service/crypto";
import { CryptoProps } from "@/Utils/types";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

const cryptoPage = (crypto: CryptoProps) => {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <CryptoTable />
    </main>
  );
};

export default cryptoPage;

"use client";
import CardWrapper from "@/Components/Cards/CardWrapper";
import CryptoCard from "@/Components/Cards/CryptoCard";
import { CryptoForm } from "@/Components/Forms/CryptoForm";
import { getAllCryptos } from "@/Service/crypto";
import { CryptoProps } from "@/Utils/types";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

const cryptoPage = () => {
  const [cryptosList, setCryptosList] = useState<CryptoProps[]>();

  useEffect(() => {
    getAllCryptos().then((res) => {
      setCryptosList(res.data);
      console.log(res);
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <CryptoForm />
      <CardWrapper>
        {cryptosList &&
          cryptosList.map((crypto) => {
            return (
              <div key={crypto.id}>
                <CryptoCard crypto={crypto} isBuyVisible={true} />
              </div>
            );
          })}
      </CardWrapper>
    </main>
  );
};

export default cryptoPage;

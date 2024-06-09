"use client";
import CardWrapper from "@/Components/Cards/CardWrapper";
import CryptoCard from "@/Components/Cards/CryptoCard";
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
      <CardWrapper>
        {cryptosList &&
          cryptosList.map((crypto) => {
            return (
              <CryptoCard
                name={crypto.name}
                value={crypto.value}
                image={crypto.image}
                id={crypto.id}
                quantity={crypto.quantity}
              />
            );
          })}
      </CardWrapper>
    </main>
  );
};

export default cryptoPage;

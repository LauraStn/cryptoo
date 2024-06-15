"use client";
import CardWrapper from "@/Components/Cards/CardWrapper";
import CryptoCard from "@/Components/Cards/CryptoCard";
import { CryptoTable } from "@/Components/CryptoTable/CryptoTable";
import { CryptoForm } from "@/Components/Forms/CryptoForm";
import { getAllCryptos, getCryptoHistory } from "@/Service/crypto";
import { CryptoProps } from "@/Utils/types";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

const cryptoPage = (crypto: CryptoProps) => {
  // const [cryptosList, setCryptosList] = useState<CryptoProps[]>();
  // // useEffect(() => {
  // //   getCryptoHistory("64fec17d-6a1c-4236-a1f9-6be732d7d24b").then((res) => {
  // //     console.log(res);
  // //   });
  // // }, []);
  // useEffect(() => {
  //   getAllCryptos().then((res) => {
  //     setCryptosList(res.data);
  //   });
  // }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <CryptoForm />
      <CryptoTable />
      {/* <CardWrapper>
        {cryptosList &&
          cryptosList.map((crypto) => {
            return (
              <div key={crypto.id}>
                <CryptoCard crypto={crypto} isBuyVisible={true} />
              </div>
            );
          })}
      </CardWrapper> */}
    </main>
  );
};

export default cryptoPage;

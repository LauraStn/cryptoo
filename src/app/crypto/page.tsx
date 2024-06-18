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
    <main className="flex gap-4 min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      {/* <CryptoForm /> */}
      <div className="bg-white">
        Create a new Crypto
        <CreateCryptoModal crypto={crypto} />
      </div>
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

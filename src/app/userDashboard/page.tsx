"use client";
import { OfferTab } from "@/Components/Cards/OfferTab";
import UserDollarsCard from "@/Components/Cards/UserDollarsCard";
import { UserCryptoTable } from "@/Components/UserCryptoTable/UserCryptoTable";
import UserTradesTable from "@/Components/UserTrades/UserTradesTable";
import { getCryptoHistory } from "@/Service/crypto";
import { UserProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";

const page = (user: UserProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 justify-between bg-bitcoin dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <UserDollarsCard
        user={{
          dollarAvailables: user.dollarAvailables,
          pseudo: user.pseudo,
        }}
      />
      ;
      <UserCryptoTable />
      <UserTradesTable />
    </main>
  );
};

export default page;

"use client";
import { OfferTab } from "@/Components/Cards/OfferTab";
import UserDollarsCard from "@/Components/Cards/UserDollarsCard";
import { UserProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";

const page = (user: UserProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bitcoin dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <UserDollarsCard
        dollarAvailables={user.dollarAvailables}
        pseudo={user.pseudo}
      />
      ;
      <OfferTab
        offer={{
          id: "",
          User: {
            pseudo: "",
          },
          amount: 0,
          created_at: "",
          id_user: "",
          Crypto: {
            id: "",
            name: "",
            quantity: 0,
            value: 0,
            image: "",
          },
        }}
        setIsReloadNeeded={undefined}
      />
    </main>
  );
};

export default page;

"use client";
import UserDollarsCard from "@/Components/Cards/UserDollarsCard";
import { UserProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";

const page = (user: UserProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <UserDollarsCard
        dollarAvailables={user.dollarAvailables}
        pseudo={user.pseudo}
      />
      ;
    </main>
  );
};

export default page;

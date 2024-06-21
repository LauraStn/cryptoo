import { RegisterForm } from "@/Components/Forms/RegisterForm";
import React from "react";

export const registerPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <RegisterForm />
    </main>
  );
};

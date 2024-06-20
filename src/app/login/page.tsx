import { LoginForm } from "@/Components/Forms/LoginForm";
import { AuthProvider } from "@/context/authcontext";
import React from "react";

const registerPage = () => {
  return (
    <main className="flex min-h-screen flex-col dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed items-center justify-between p-24">
      <LoginForm />
    </main>
  );
};

export default registerPage;

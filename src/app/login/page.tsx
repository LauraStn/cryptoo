import { LoginForm } from "@/Components/LoginForm";
import { RegisterForm } from "@/Components/RegisterForm";
import React from "react";

const registerPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-bitcoin">
      <LoginForm />
    </main>
  );
};

export default registerPage;

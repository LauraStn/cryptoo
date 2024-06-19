import UserTable from "@/Components/UserTable/UserTable";
import React from "react";

const page = () => {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <UserTable min={0} max={99} />
    </main>
  );
};

export default page;

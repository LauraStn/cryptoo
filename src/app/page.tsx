"use client";
import TradeTable from "@/Components/TradeTable/TradeTable";

export default function Home() {
  return (
    <main className="flex min-h-screen dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed flex-col items-center justify-between p-24">
      <TradeTable />
    </main>
  );
}

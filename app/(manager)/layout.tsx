import Sidebar from "@/components/Sidebar";
import { Button } from "@nextui-org/button";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full flex flex-row gap-6">
      <Sidebar />
      <div className="bg-zinc-900 rounded-xl w-full p-6">{children}</div>
    </main>
  );
}

"use client";

import Header from "@/components/Header";
import { useAuthContext } from "@/context/AuthContext";

export default function RootAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuthContext();
  return (
    <main className="p-2 flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white  w-full flex justify-center items-center">
      <Header userName={user?.name || ""} />
      {children}
    </main>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 w-full flex justify-center items-center">
      {children}
    </main>
  );
}

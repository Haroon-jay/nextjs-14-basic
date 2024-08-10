"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

interface HeaderProps {
  userName: string;
}

export default function Header({ userName }: HeaderProps) {
  const router = useRouter();
  const { logout } = useAuthContext();
  const onLogout = async () => {
    await logout();
    router.push("/sign-in");
  };
  return (
    <header
      className="flex h-20 w-full shrink-0 px-4 md:px-6 
     absolute top-2 left-0 right-0 z-10 items-center
    "
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            {/* Doing this to make sure it is accessible as this will only show up on screen readers */}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>Welcome, {userName}</SheetTitle>
          <div className="flex flex-col justify-between h-full pb-4">
            <div className="grid gap-2 py-6">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                Home
              </Link>
              <Link
                href="/form"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                Form
              </Link>
            </div>
            <Button onClick={onLogout}>Log Out</Button>
          </div>
        </SheetContent>
      </Sheet>

      <nav className="ml-auto hidden lg:flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/form">Form</Link>
        <div className="text-lg font-bold">Welcome, {userName}</div>
        <Button onClick={onLogout}>Log Out</Button>
      </nav>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

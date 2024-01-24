"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const RootPage = () => {
  return (
    <main className="w-screen h-screen bg-slate-500">
      <header className="flex justify-end gap-4 pr-3">
        <Link className="bg-white hover:bg-orange-400" href={"/signup"}> sign-up </Link>
        <Link className="bg-white hover:bg-orange-400" href={"/login"}> sign-in </Link>
      </header>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default RootPage;

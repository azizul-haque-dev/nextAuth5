"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Logout from "./Logout";

function NavbarButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") return null; // or a spinner

  return (
    <>
      {session?.user ? (
        <Logout />
      ) : (
        <Link
          href="/login"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
        >
          Login
        </Link>
      )}
    </>
  );
}

export default NavbarButtons;

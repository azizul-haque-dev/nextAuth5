"use client";

import { signOut } from "next-auth/react";

function Logout() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };
  return (
    <button
      onClick={handleLogout}
      className="text-white px-4 py-2 rounded-md text-sm bg-red-500 font-medium transition"
    >
      Logout
    </button>
  );
}

export default Logout;

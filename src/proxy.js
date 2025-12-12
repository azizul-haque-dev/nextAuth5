import { NextResponse } from "next/server";
import { auth } from "./auth";

export default async function proxy(req) {
  const pathname = req.nextUrl.pathname;
  const session = await auth();
  const role = session?.user?.role;
  const isLoggedin = !!session;

  // Redirect logged-in users away from login page
  if (pathname.startsWith("/login") && isLoggedin) {
    return NextResponse.redirect(
      new URL(role === "admin" ? "/admin" : "/user", req.url)
    );
  }

  // Protect /admin route
  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Protect /user route
  if (pathname.startsWith("/user") && role !== "user") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/admin/:path*", "/login"]
};

import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;
  console.log(req.cookies);
  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/404", url));
  }

  if (pathname.startsWith("/auth")) {
    const user = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL("/", url));
  }

  if (pathname.startsWith("/sign-in")) {
    const user = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL("/", url));
  }

  if (pathname.startsWith("/forget-password")) {
    const user = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL("/", url));
  }

  if (pathname.startsWith("/complete-profile")) {
    const user = await middlewareAuth(req);
    if (user && user.isActive) return NextResponse.redirect(new URL("/", url));
    if (!user) return NextResponse.redirect(new URL("/404", url));
  }

  if (pathname.startsWith("/admin")) {
    const user = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/404", url));
    if (user && user.role !== "ADMIN")
      return NextResponse.redirect(new URL("/404", url));
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/profile/:path*",
    "/auth",
    "/sign-in",
    "/complete-profile",
    "/forget-password",
  ],
};

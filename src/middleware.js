import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(request) {
  const url = request.url;
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL("/404", url));
    if (user && !user.isActive)
      return NextResponse.redirect(new URL("/404", url));
  }

  if (pathname.startsWith("/auth")) {
    const user = await middlewareAuth(request);
    if (user) return NextResponse.redirect(new URL("/", url));
  }

  if (pathname.startsWith("/sign-in")) {
    const user = await middlewareAuth(request);
    if (user) return NextResponse.redirect(new URL("/", url));
  }

  if (pathname.startsWith("/forget-password")) {
    const user = await middlewareAuth(request);
    if (user) return NextResponse.redirect(new URL("/", url));
  }

  if (pathname.startsWith("/complete-profile")) {
    const user = await middlewareAuth(request);
    if (user && user.isActive) return NextResponse.redirect(new URL("/", url));
    if (!user) return NextResponse.redirect(new URL("/404", url));
  }

  if (pathname.startsWith("/admin")) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL("/404", url));
    if (user && user.role !== "ADMIN")
      return NextResponse.redirect(new URL("/404", url));
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
  default-src 'self';
  script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';
  script-src-elem 'self' 'nonce-${nonce}' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://cdn.workfolio.ir https://trustseal.enamad.ir https://logo.samandehi.ir https://cdn.zarinpal.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
  connect-src 'self' https://api.workfolio.ir https://region1.google-analytics.com https://www.google-analytics.com;
`;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

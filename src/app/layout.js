import { headers } from "next/headers";
import Script from "next/script";
import shabnamFont from "@/constants/localFonts";
import { WebVitals } from "./_components/web-vitals";

export const metadata = {
  metadataBase: new URL(process.env.ABSOLUTE_URL),
  category: "technology",
  generator: `${process.env.RELATIVE_URL}`,
  applicationName: "Workfolio",
  referrer: "origin-when-cross-origin",
  authors: { name: "آرمان مختاری", url: process.env.ABSOLUTE_URL },
  creator: "آرمان مختاری",
  publisher: "آرمان مختاری",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    siteName: "workfolio",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    siteId: "1397054881",
    creator: "@workfolio_ir",
    creatorId: "1397054881",
  },
  verification: {
    google: "QVweHLwUgUu0b-S0vbkjEw9mYI7z5n4W8WC6fCpmsoU",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F1F1F1" },
    { media: "(prefers-color-scheme: dark)", color: "#22273b" },
  ],
};
const myFont = shabnamFont;
export default function RootLayout({ children }) {
  const nonce = headers().get("x-nonce");
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <WebVitals />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TL97FTVH"
          strategy="afterInteractive"
          nonce={nonce}
        />
      </body>
    </html>
  );
}

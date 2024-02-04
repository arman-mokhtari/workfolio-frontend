import { GoogleTagManager } from "@next/third-parties/google";
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
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F1F1F1" },
    { media: "(prefers-color-scheme: dark)", color: "#22273b" },
  ],
};
const myFont = shabnamFont;
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <WebVitals />
        {children}
        <GoogleTagManager gtmId="GTM-PZ286R8G" />
      </body>
    </html>
  );
}

import shabnamFont from "@/constants/localFonts";
import LayoutContent from "./layoutContent";

const myFont = shabnamFont;

export const metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}

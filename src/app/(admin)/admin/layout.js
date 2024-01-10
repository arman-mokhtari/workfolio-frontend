import shabnamFont from "@/constants/localFonts";

import LayoutContent from "./layoutContent";

export const metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const myFont = shabnamFont;
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}

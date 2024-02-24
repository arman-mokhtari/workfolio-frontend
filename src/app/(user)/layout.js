import LayoutContent from "./layoutContent";
import { headers } from "next/headers";
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
  const nonce = headers().get("x-nonce");

  return <LayoutContent nonce={nonce}>{children}</LayoutContent>;
}

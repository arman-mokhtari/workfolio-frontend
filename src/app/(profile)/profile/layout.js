import LayoutContent from "./layoutContent";
import { headers } from "next/headers";

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

export default function RootLayout({ children }) {
  // const nonce = headers().get("x-nonce");
  return <LayoutContent 
  // nonce={nonce}
  >{children}</LayoutContent>;
}

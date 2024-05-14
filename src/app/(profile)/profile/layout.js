import LayoutContent from "../../../components/profile/layoutContent";
import { headers } from "next/headers";

export default function RootLayout({ children }) {
  const nonce = headers().get("x-nonce");
  return <LayoutContent nonce={nonce}>{children}</LayoutContent>;
}

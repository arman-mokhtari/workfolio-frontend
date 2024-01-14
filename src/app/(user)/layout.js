import LayoutContent from "./layoutContent";

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
  return <LayoutContent>{children}</LayoutContent>;
}

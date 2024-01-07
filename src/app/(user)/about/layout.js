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
  return <div>{children}</div>;
}
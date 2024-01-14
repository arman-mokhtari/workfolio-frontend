export const metadata = {
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};
export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
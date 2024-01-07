const description =
"خدمات متنوع وب با تاکید بر توسعه و طراحی وب سایت، اپلیکیشن تلفن همراه، و بهینه‌سازی تجربه کاربری. نرم‌افزارهای وب سفارشی‌سازی شده توسط تیم حرفه‌ای ما، تضمینی برای دستیابی به استانداردهای بالا."

const title = "خدمات طراحی سایت | تجربه کاربری بالا | ورکفولیو";

export const metadata = {
  title: title,
  description: description,
  keywords: [
    "خدمات وب",
    "توسعه وب",
    "طراحی وب سایت",
    "نرم‌افزار تخصصی",
    "سفارشی سازی وب",
    "بهینه‌سازی وب",
    "انتقال داده",
    "تجربه کاربری",
    "پشتیبانی تکنیکی",
  ],

  twitter: {
    title: title,
    description: description,
  },

  openGraph: {
    title: title,
    description: description,
    url: `${process.env.ABSOLUTE_URL}/services`,
  },
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}

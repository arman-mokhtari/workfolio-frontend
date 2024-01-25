import PageMainContent from "./components/pageMainContent";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  //todo title: "طراحی وبسایت | فروشگاه آنلاین | سئو | ورکفولیو",
  title: "450360",
  description:
    "طراحی وبسایت مدرن با رابط کاربری (UI) زیبا و تجربه کاربری (UX) بی‌نظیر که با استفاده از آخرین تکنولوژی‌ها و روش‌های مدرن توسط تیم ورکفولیو به شما ارائه می‌شود.",
  keywords: [
    "فروشگاه آنلاین",
    "نکست جی اس",
    "ری اکت",
    "جاوا اسکریپت",
    "نود جی اس",
    "طراحی وب سایت",
    "خدمات وب",
  ],
  other: {
    enamad: "194060",
  },
};

const Page = async () => {
  return <PageMainContent />;
};
export default Page;

export const amp = true;

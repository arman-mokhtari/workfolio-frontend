import dynamic from "next/dynamic";

const PageMainContent = dynamic(() => import("./components/pageMainContent"));

export const metadata = {
  alternates: {
    canonical: "/",
  },
  title: "طراحی وبسایت | فروشگاه آنلاین | سئو | ورکفولیو",
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
};

const Page = async ({ searchParams }) => {
  return <PageMainContent searchParams={searchParams} />;
};
export default Page;

export const amp = true;

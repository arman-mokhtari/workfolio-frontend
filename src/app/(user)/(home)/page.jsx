import PageMainContent from "@/components/main/general/pageMainContent";
import { cookies } from "next/headers";

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
  other: {
    enamad: "194060",
  },
};

const Page = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore?._parsed?.get("accessToken");
  const isAccessToken = Boolean(accessToken);

  return <PageMainContent isAccessToken={isAccessToken} />;
};
export default Page;

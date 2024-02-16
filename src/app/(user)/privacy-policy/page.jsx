"use client";

import { usePathname } from "next/navigation";
import Loading from "@/common/loading";
import { useGetPageByEnglishTitle } from "@/hooks/UsePagesData";
import MiscMainContent from "../components/misc/main/miscMainContent";

const Page = () => {
  const pn = usePathname().replace(/^\//, "");

  const { isLoading, data } = useGetPageByEnglishTitle(pn);
  const { pageData } = data || {};

  if (isLoading) return <Loading />;

  return <MiscMainContent pageData={pageData} />;
};

export default Page;

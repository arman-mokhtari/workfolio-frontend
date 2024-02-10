"use client";
import DescHtml from "@/pages/(user)/components/slugs/description/descHtml";
import PageDescLayout from "./pageDescLayout";
import { useGetPageByEnglishTitle } from "@/hooks/UsePagesData";
import Loading from "@/common/loading";
import { usePathname } from "next/navigation";

const PageDesc = () => {
  const pn = usePathname().replace(/^\//, "");

  const { isLoading, data } = useGetPageByEnglishTitle(pn);
  const { pageData } = data || {};

  if (isLoading) return <Loading />;
  return (
    <PageDescLayout>
      <DescHtml
        description={pageData ? pageData.description : "اطلاعات یافت نشد..."}
      />
    </PageDescLayout>
  );
};

export default PageDesc;

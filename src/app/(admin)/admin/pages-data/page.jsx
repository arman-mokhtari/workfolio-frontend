"use client";

import Loading from "@/common/loading";
import { useGetPagesData } from "@/hooks/UsePagesData";
import PagesDataTable from "../../../../components/admin/pagesData/main/pagesDataTable";
import HeadStack from "../../../../common/admin/headStack";

const ProductsPage = () => {
  const { isLoading, data } = useGetPagesData();
  const { pagesData } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <HeadStack href="/admin/pages-data/add" title="اطلاعات صفحات" />

      <PagesDataTable pagesData={pagesData} />
    </>
  );
};

export default ProductsPage;

"use client";

import Loading from "@/common/loading";
import { useGetAllMiscPage } from "@/hooks/useMiscPage";
import MiscPagesTable from "./miscPagesTable";
import HeadStack from "../../common/headStack";

const MiscPagesMainContent = () => {
  const { isLoading, data } = useGetAllMiscPage();
  const { miscPages } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <HeadStack href="/admin/misc-pages/add" title="صفحات متفرقه" />

      <MiscPagesTable miscPages={miscPages} />
    </>
  );
};

export default MiscPagesMainContent;

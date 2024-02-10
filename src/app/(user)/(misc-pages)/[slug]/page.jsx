"use client";

import { useGetMiscPageBySlug } from "@/hooks/useMiscPage";
import MiscMainContent from "./components/miscMainContent";
import { useParams } from "next/navigation";
import Loading from "@/common/loading";

const Page = () => {
  const { slug } = useParams();
  const { isLoading, data } = useGetMiscPageBySlug(slug);
  const { miscPage } = data || {};

  if (isLoading) return <Loading />;

  return <MiscMainContent miscPage={miscPage} />;
};

export default Page;
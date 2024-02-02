"use client";
import { useGetMiscPageBySlug } from "@/hooks/useMiscPage";
import MiscMainContent from "./components/miscMainContent";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/common/loading";

const Page = () => {
  const router = useRouter();
  const { slug } = useParams();
  const { isLoading, data } = useGetMiscPageBySlug(slug);
  const { miscPage } = data || {};

  if (isLoading) return <Loading />;
  if (miscPage?.slug !== slug || !miscPage) return router.push("/404");
  return <MiscMainContent miscPage={miscPage} />;
};

export default Page;

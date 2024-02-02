"use client";

import { useParams, useRouter } from "next/navigation";

import Loading from "@/common/loading";
import { Grid } from "@mui/material";
import { useGetMiscPageById } from "@/hooks/useMiscPage";
import MiscPageDataCard from "./components/blogDataCard";
import MiscPageDescription from "./components/blogDescription";

const BlogPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { isLoading, data } = useGetMiscPageById(id);
  const { miscPage } = data || {};

  if (isLoading) return <Loading />;
  if (miscPage?._id !== id || !miscPage) return router.push("/404");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <MiscPageDataCard miscPage={miscPage} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <MiscPageDescription miscPage={miscPage} />
      </Grid>
    </Grid>
  );
};

export default BlogPage;

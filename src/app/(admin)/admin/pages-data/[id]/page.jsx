"use client";

import { useParams, useRouter } from "next/navigation";

import Loading from "@/common/loading";
import { Grid } from "@mui/material";
import { useGetPageDataById } from "@/hooks/UsePagesData";
import PageDataCard from "./components/pageDataCard";
import PageDescription from "./components/pageDescription";

const ProductPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { isLoading, data } = useGetPageDataById(id);
  const { pageData } = data || {};

  if (isLoading) return <Loading />;
  if (pageData?._id !== id || !pageData) return router.push("/404");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <PageDataCard pageData={pageData} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <PageDescription pageData={pageData} />
      </Grid>
    </Grid>
  );
};

export default ProductPage;

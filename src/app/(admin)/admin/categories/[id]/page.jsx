"use client";

import { useParams, useRouter } from "next/navigation";

import Loading from "@/common/loading";
import { Grid } from "@mui/material";
import CategoryDataCard from "../../../../../components/admin/categories/id/categoryDataCard";
import CategoryShoppingData from "../../../../../components/admin/categories/id/categoryShoppingData";
import { useGetCategoryById } from "@/hooks/useCategories";
import { useGetAllProducts } from "@/hooks/useProducts";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { isLoading, data } = useGetCategoryById(id);
  const { category } = data || {};

  const { data: productsData, isLoading: productsLoading } = useGetAllProducts();
  const { products } = productsData || {};
  if (isLoading) return <Loading />;
  if (category?._id !== id || !category) return router.push("/404");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
        <CategoryDataCard category={category} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <CategoryShoppingData
          isLoading={productsLoading}
          products={products}
          id={id}
        />
      </Grid>
    </Grid>
  );
};

export default Page;

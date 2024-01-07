"use client";

import { useGetProductById } from "@/hooks/useProducts";

import { useParams, useRouter } from "next/navigation";

import Loading from "@/common/loading";
import { Grid } from "@mui/material";
import ProductDataCard from "./components/productDataCard";
import ProductShoppingData from "./components/productShoppingData";
import { useGetPayments } from "@/hooks/usePayments";
import ProductDescription from "./components/productDescription";

const ProductPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { isLoading, data } = useGetProductById(id);
  const { product } = data || {};

  const { data: paymentsData, isLoading: paymentsLoading } = useGetPayments();
  const { payments } = paymentsData || {};
  if (isLoading) return <Loading />;
  if (product?._id !== id || !product) return router.push("/404");
  return (
    <Grid container spacing={2}>
       <Grid item xs={12}>
        <ProductShoppingData
          isLoading={paymentsLoading}
          payments={payments}
          id={id}
        />
      </Grid>
      <Grid item xs={12} lg={5}>
        <ProductDataCard product={product} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <ProductDescription product={product} />
      </Grid>
     
    </Grid>
  );
};

export default ProductPage;

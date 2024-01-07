import { getCategories } from "@/services/category/categoryService";
import { getProducts } from "@/services/product/productService";
import CategorySidebar from "./components/categorySidebar";

import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";

import { Box, Grid, Card } from "@mui/material";
import queryString from "query-string";

import ProductItems from "./components/products";

export const dynamic = "force-dynamic";

const Products = async ({ searchParams }) => {
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);

  const productsPromise = getProducts(
    queryString.stringify(searchParams),
    strCookies
  );

  const categoryPromise = getCategories();
  const [{ products }, { categories }] = await Promise.all([
    productsPromise,
    categoryPromise,
  ]);

  return (
    <Box
      sx={{
        p: 1.5,
      }}
    >
      <Grid container spacing={1.5}>
        <Grid
          component="aside"
          item
          xs={12}
          sm={4}
          md={2.5}
          lg={2}
          sx={{
            display: "flex",
          }}
        >
          <CategorySidebar categories={categories} />
        </Grid>

        <Grid component="main" item xs={12} sm={8} md={9.5} lg={10}>
          <ProductItems products={products} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;

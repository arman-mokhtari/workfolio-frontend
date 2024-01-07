"use client";
import { Grid } from "@mui/material";
import Product from "./product";
import { usePathname } from "next/navigation";

const ProductItems = ({ products }) => {
  const pathName = usePathname();
  let displayedProducts;

  if (pathName === "/" && products?.length > 4) {
    displayedProducts = products.slice(0, 4);
  } else {
    displayedProducts = products;
  }

  return (
    <Grid spacing={3} container>
      {displayedProducts.map((product,index) => {
        return (
          <Grid xs={12} md={6} lg={3} item key={index}>
            <Product product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductItems;

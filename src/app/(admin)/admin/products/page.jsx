"use client";

import Loading from "@/common/loading";
import { useGetAllProducts } from "@/hooks/useProducts";
import ProductsTable from "../../../../components/admin/products/main/productsTable";
import HeadStack from "../../../../common/admin/headStack";

const ProductsPage = () => {
  const { isLoading, data } = useGetAllProducts();
  const { products } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <HeadStack href="/admin/products/add" title="محصولات" />

      <ProductsTable products={products} />
    </>
  );
};

export default ProductsPage;

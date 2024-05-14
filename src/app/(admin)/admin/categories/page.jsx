"use client";

import Loading from "@/common/loading";
import CategoriesTable from "../../../../components/admin/categories/main/categoriesTable";
import { useGetCategories } from "@/hooks/useCategories";
import HeadStack from "../../../../common/admin/headStack";

const ProductsPage = () => {
  const { isLoading, data } = useGetCategories();
  const { categories } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <HeadStack href="/admin/categories/add" title="دسته‌بندی‌ها" />

      <CategoriesTable categories={categories} />
    </>
  );
};

export default ProductsPage;

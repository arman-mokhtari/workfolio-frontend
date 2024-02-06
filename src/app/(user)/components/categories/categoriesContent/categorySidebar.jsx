"use client";

import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import XsCategorySidebar from "./xsCategorySidebar";
import XsUpCategorySidebar from "./xsUpCategorySidebar";
import { useGetCategories } from "@/hooks/useCategories";

const CategorySidebar = ({ categories }) => {
  const isMobile = useIsOnlyXs();
  const { isLoading } = useGetCategories();
  return isMobile ? (
    <XsCategorySidebar categories={categories} isLoading={isLoading} />
  ) : (
    <XsUpCategorySidebar categories={categories} isLoading={isLoading} />
  );
};

export default CategorySidebar;

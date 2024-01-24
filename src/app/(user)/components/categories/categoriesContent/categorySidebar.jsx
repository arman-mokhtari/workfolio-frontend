"use client";

import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import { useGetUser } from "@/hooks/useAuth";
import XsCategorySidebar from "./xsCategorySidebar";
import XsUpCategorySidebar from "./xsUpCategorySidebar";

const CategorySidebar = ({ categories }) => {
  const isMobile = useIsOnlyXs();
  const { isLoading } = useGetUser();
  return isMobile ? (
    <XsCategorySidebar categories={categories} isLoading={isLoading} />
  ) : (
    <XsUpCategorySidebar categories={categories} isLoading={isLoading} />
  );
};

export default CategorySidebar;

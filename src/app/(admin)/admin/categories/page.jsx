"use client";
import Link from "next/link";

import Loading from "@/common/loading";
import { Typography, Stack, Button } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import CategoriesTable from "./components/categoriesTable";
import { useGetCategories } from "@/hooks/useCategories";
import { useTheme } from "@mui/material/styles";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const ProductsPage = () => {

  const isSmallScreen = useIsOnlyXs();

  const { isLoading, data } = useGetCategories();
  const { categories } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 2,
        }}
      >
        <Typography variant={isSmallScreen ? "h6" : "h5"}>
          دسته‌بندی‌ها
        </Typography>

        <Button
          component={Link}
          href="/admin/categories/add"
          color="success"
          variant="contained"
          aria-label="add category"
          endIcon={<PlaylistAdd />}
        >
          اضافه کردن دسته‌بندی‌ جدید
        </Button>
      </Stack>

      <CategoriesTable categories={categories} />
    </>
  );
};

export default ProductsPage;

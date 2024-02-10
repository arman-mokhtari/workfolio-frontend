"use client";
import Link from "next/link";

import Loading from "@/common/loading";
import { Typography, Stack, Button } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import { useGetPagesData } from "@/hooks/UsePagesData";
import PagesDataTable from "./components/pagesDataTable";

const ProductsPage = () => {
  const { isLoading, data } = useGetPagesData();
  const { pagesData } = data || {};

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
        <Typography variant="h5">اطلاعات صفحات</Typography>

        <Button
          component={Link}
          role="link"
           
          href="/admin/pages-data/add"
          color="success"
          variant="contained"
          aria-label="add"
          endIcon={<PlaylistAdd />}
        >
          اضافه کردن اطلاعات صفحه
        </Button>
      </Stack>

      <PagesDataTable pagesData={pagesData} />
    </>
  );
};

export default ProductsPage;

"use client";
import Link from "next/link";

import Loading from "@/common/loading";
import { Typography, Stack, Button } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import { useGetAllMiscPage } from "@/hooks/useMiscPage";
import MiscPagesTable from "./miscPagesTable";

const MiscPagesMainContent = () => {
  const { isLoading, data } = useGetAllMiscPage();
  const { miscPages } = data || {};

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
        <Typography variant="h5">صفحات متفرقه</Typography>

        <Button
          component={Link}
          role="link"
           
          href="/admin/misc-pages/add"
          color="success"
          variant="contained"
          aria-label="add page"
          endIcon={<PlaylistAdd />}
        >
          اضافه کردن صفحه متفرقه
        </Button>
      </Stack>

      <MiscPagesTable miscPages={miscPages} />
    </>
  );
};

export default MiscPagesMainContent;

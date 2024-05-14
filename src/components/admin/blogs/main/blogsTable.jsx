"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRemoveBlog } from "@/hooks/useBlogs";
import { blogsTableColumns } from "@/constants/blog/blogPageData";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import { useModal } from "@/context/modalContext";

const BlogsTable = ({ blogs }) => {
  const { mutateAsync } = useRemoveBlog();
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  const removeBlogHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      closeModal();
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-blogs"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const isSmallScreen = useIsOnlyXs();

  const modifiedBlogs = blogs.map((blog, index) => ({
    ...blog,
    id: index + 1,
  }));

  const existingTheme = useTheme();

  const theme = useMemo(
    () =>
      createTheme({}, faIR, existingTheme, {
        direction: "rtl",
      }),
    [existingTheme]
  );

  return (
    <Card>
      <ThemeProvider theme={theme}>
        <DataGrid
          disableRowSelectionOnClick
          rows={modifiedBlogs}
          columns={blogsTableColumns(isSmallScreen, removeBlogHandler)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default BlogsTable;

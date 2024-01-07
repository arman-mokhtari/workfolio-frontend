"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card, useMediaQuery } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { newsletterTableColumns } from "@/constants/newsletter/newsletterTableData";
import { useRemoveNewsletterUser } from "@/hooks/useNewsletterUsers";


const NewsletterUsersTable = ({ newsletterUsers }) => {

  const { mutateAsync } = useRemoveNewsletterUser();
  const queryClient = useQueryClient();

  const removeNewsletterUserHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-newsletter-users"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };


  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const modifiedNewsletterUsers = newsletterUsers.map((newsletterUser, index) => ({
    ...newsletterUser,
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
          rows={modifiedNewsletterUsers}
          columns={newsletterTableColumns(isSmallScreen,removeNewsletterUserHandler)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default NewsletterUsersTable;

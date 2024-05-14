"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { NewsletterTableColumns } from "@/constants/newsletter/newsletterTableData";
import { useRemoveNewsletterUser } from "@/hooks/useNewsletterUsers";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";
import { useModal } from "@/context/modalContext";

const NewsletterUsersTable = ({ newsletterUsers }) => {
  const { mutateAsync } = useRemoveNewsletterUser();
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  const removeNewsletterUserHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      closeModal();
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-newsletter-users"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const isSmallScreen = useIsOnlyXs();

  const modifiedNewsletterUsers = newsletterUsers.map(
    (newsletterUser, index) => ({
      ...newsletterUser,
      id: index + 1,
    })
  );

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
          rows={modifiedNewsletterUsers}
          columns={NewsletterTableColumns(
            isSmallScreen,
            removeNewsletterUserHandler
          )}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default NewsletterUsersTable;

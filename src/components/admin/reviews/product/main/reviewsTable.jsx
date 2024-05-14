"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { productReviewsTableColumns } from "@/constants/review/productReviewPageData";
import { useIsOnlyXs } from "@/hooks/useMediaQueries";

const ReviewsTable = ({ reviews }) => {
  const isSmallScreen = useIsOnlyXs();

  const modifiedReviews = reviews.map((review, index) => ({
    ...review,
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
          rows={modifiedReviews}
          columns={productReviewsTableColumns(isSmallScreen)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default ReviewsTable;

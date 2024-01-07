"use client";

import { useMemo } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { Card, useMediaQuery } from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { reviewsTableColumns } from "@/constants/review/reviewPageData";
import { productReviewsTableColumns } from "@/constants/review/productReviewPageData";

const ReviewsTable = ({ reviews }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
          rows={modifiedReviews}
          columns={productReviewsTableColumns(isSmallScreen)}
          autoHeight
        />
      </ThemeProvider>
    </Card>
  );
};

export default ReviewsTable;

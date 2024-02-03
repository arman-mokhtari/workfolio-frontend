import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { toLocalDateString } from "@/utils/toLocalDate";
import { Chip, Typography } from "@mui/material";

export const paymentTableColumns = (isSmallScreen) => {
  return isSmallScreen
    ? [
        { field: "invoiceNumber", headerName: "شماره فاکتور", flex: 1 },
        {
          field: "amount",
          headerName: "مبلغ",
          flex: 1,
          valueGetter: (params) => toPersianNumbersWithComma(params.row.amount),
        },
      ]
    : [
        { field: "invoiceNumber", headerName: "شماره فاکتور", flex: 1 },
        {
          field: "products",
          headerName: "محصولات",
          flex: 1,
          valueGetter: (params) =>
            params.row.cart.productDetail
              .map((product) => product.title)
              .join(", "),
        },
        {
          field: "amount",
          headerName: "مبلغ",
          flex: 1,
          valueGetter: (params) => toPersianNumbersWithComma(params.row.amount),
        },
        {
          field: "createdAt",
          headerName: "تاریخ",
          flex: 1,
          valueGetter: (params) => toLocalDateString(params.row.createdAt),
        },
        {
          field: "status",
          headerName: "وضعیت",
          flex: 1,
          renderCell: (params) => (
            <Chip
              label={
                params.row.status === "COMPLETED" ? (
                  <Typography variant="inherit">موفق</Typography>
                ) : (
                  <Typography variant="inherit">ناموفق</Typography>
                )
              }
              color={params.row.status === "COMPLETED" ? "success" : "error"}
              sx={{
                height: 24,
              }}
            />
          ),
        },
      ];
};

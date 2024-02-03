import Link from "next/link";

import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { toLocalDateString } from "@/utils/toLocalDate";
import { Chip, Typography, IconButton } from "@mui/material";
import { Launch } from "@mui/icons-material";

export const adminPaymentsTableColumns = (isSmallScreen) => {
  return isSmallScreen
    ? [
        { field: "invoiceNumber", headerName: "شماره فاکتور", flex: 1 },
        {
          field: "user",
          headerName: "کاربر",
          flex: 1,
          valueGetter: (params) => params.row.user ? params.row.user.name : "کاربر ناشناس",
        },
        {
          field: "view",
          headerName: "مشاهده",
          flex: 1,
          renderCell: (params) => (
            <IconButton
              aria-label="link"
              component={Link}
              href={`/admin/payments/${params.row._id}`}
            >
              <Launch fontSize="small" />
            </IconButton>
          ),
        },
      ]
    : [
        { field: "invoiceNumber", headerName: "شماره فاکتور", flex: 1 },
        {
          field: "user",
          headerName: "کاربر",
          flex: 1,
          valueGetter: (params) =>
            params.row.user ? params.row.user.name : "کاربر ناشناس",
        },
        { field: "description", headerName: "توضیحات", flex: 1 },
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
                params.row.isPaid === true ? (
                  <Typography variant="inherit">موفق</Typography>
                ) : (
                  <Typography variant="inherit">ناموفق</Typography>
                )
              }
              color={params.row.isPaid === true ? "success" : "error"}
              sx={{
                height: 24,
              }}
            />
          ),
        },
        {
          field: "view",
          headerName: "مشاهده",
          flex: 1,
          renderCell: (params) => (
            <IconButton
              aria-label="link"
              component={Link}
              href={`/admin/payments/${params.row._id}`}
            >
              <Launch fontSize="small" />
            </IconButton>
          ),
        },
      ];
};

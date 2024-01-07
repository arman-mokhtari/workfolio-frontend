import Link from "next/link";

import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { toLocalDateString } from "@/utils/toLocalDate";
import { Launch, Verified } from "@mui/icons-material";
import { IconButton, Badge } from "@mui/material";

export const usersTableColumns = (isSmallScreen) => {
  return isSmallScreen
    ? [
        {
          field: "name",
          headerName: "نام",
          flex: 1,
        },
        {
          field: "view",
          headerName: "مشاهده",
          flex: 1,
          renderCell: (params) => (
            <IconButton
              aria-label="link"
              component={Link}
              href={`/admin/users/${params.row._id}`}
            >
              <Launch fontSize="small" />
            </IconButton>
          ),
        },
      ]
    : [
        { field: "id", headerName: "#", flex: 1 },
        {
          field: "name",
          headerName: "نام",
          flex: 1,
        },
        {
          field: "email",
          headerName: "ایمیل",
          flex: 1,
        },
        {
          field: "phoneNumber",
          headerName: "شماره موبایل",
          flex: 1,
          renderCell: (params) => (
            <Badge
              invisible={params.row.isVerifiedPhoneNumber ? false : true}
              size="small"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  top: -2,
                  left: -2,
                },
              }}
              badgeContent={<Verified sx={{ fontSize: 14 }} color="success" />}
            >
              {toPersianNumbers(params.row.phoneNumber)}
            </Badge>
          ),
        },
        {
          field: "products",
          headerName: "محصولات",
          flex: 1,
          valueGetter: (params) => {
            if (params.row.Products.length > 0) {
              return params.row.Products.map((product) => product.title).join(
                ", "
              );
            } else {
              return "فاقد موجودی";
            }
          },
        },
        {
          field: "createdAt",
          headerName: "تاریخ پیوستن",
          flex: 1,
          valueGetter: (params) => toLocalDateString(params.row.createdAt),
        },
        {
          field: "view",
          headerName: "مشاهده",
          flex: 1,
          renderCell: (params) => (
            <IconButton
              aria-label="link"
              component={Link}
              href={`/admin/users/${params.row._id}`}
            >
              <Launch fontSize="small" />
            </IconButton>
          ),
        },
      ];
};

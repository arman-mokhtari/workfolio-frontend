import Link from "next/link";

import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { Delete, Edit, Launch } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

export const productsTableColumns = (isSmallScreen, removeProductHandler) => {
  return isSmallScreen
    ? [
        {
          field: "title",
          headerName: "عنوان",
          flex: 1,
        },
        {
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <Stack direction="row" alignItems="center">
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/products/${params.row._id}`}
              >
                <Launch color="primary" fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/products/edit/${params.row._id}`}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => removeProductHandler(params.row._id)}
                aria-label="link"
              >
                <Delete color="error" fontSize="small" />
              </IconButton>
            </Stack>
          ),
        },
      ]
    : [
        { field: "id", headerName: "#", flex: 1 },
        {
          field: "title",
          headerName: "عنوان",
          flex: 1,
        },
        {
          field: "category",
          headerName: "دسته بندی",
          flex: 1,
          valueGetter: (params) => params.row.category?.title,
        },
        {
          field: "price",
          headerName: "قیمت",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.price),
        },
        {
          field: "offPrice",
          headerName: "تخفیف",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.offPrice),
        },
        {
          field: "countInStock",
          headerName: "موجودی",
          flex: 1,
          valueGetter: (params) => toPersianNumbers(params.row.countInStock),
        },
        {
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <Stack direction="row" alignItems="center">
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/products/${params.row._id}`}
              >
                <Launch color="primary" fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/products/edit/${params.row._id}`}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => removeProductHandler(params.row._id)}
                aria-label="link"
              >
                <Delete color="error" fontSize="small" />
              </IconButton>
            </Stack>
          ),
        },
      ];
};

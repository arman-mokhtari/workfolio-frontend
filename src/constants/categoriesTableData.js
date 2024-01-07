import Link from "next/link";

import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { Delete, Edit, Launch } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

export const categoriesTableColumns = (isSmallScreen,removeCategoryHandler) => {
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
            <Stack spacing={0.2} direction="row" alignItems="center">
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/categories/${params.row._id}`}
              >
                <Launch color="primary" fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/categories/edit/${params.row._id}`}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton onClick={()=>removeCategoryHandler(params.row._id)} aria-label="link">
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
          field: "_id",
          headerName: "آیدی",
          flex: 1,
        },
        {
          field: "description",
          headerName: "توضیحات",
          flex: 1,
        },
        {
          field: "englishTitle",
          headerName: "عنوان انگلیسی",
          flex: 1,
        },
        {
          field: "type",
          headerName: "نوع",
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
                href={`/admin/categories/${params.row._id}`}
              >
                <Launch color="primary" fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/categories/edit/${params.row._id}`}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton onClick={()=>removeCategoryHandler(params.row._id)} aria-label="link">
                <Delete color="error" fontSize="small" />
              </IconButton>
            </Stack>
          ),
        },
      ];
};

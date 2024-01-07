import Link from "next/link";

import { Delete, Edit, Launch } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

export const blogsTableColumns = (isSmallScreen, removeBlogHandler) => {
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
                href={`/admin/blogs/${params.row._id}`}
              >
                <Launch color="primary" fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/blogs/edit/${params.row._id}`}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => removeBlogHandler(params.row._id)}
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
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <Stack direction="row" alignItems="center">
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/blogs/${params.row._id}`}
              >
                <Launch color="primary" fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="link"
                component={Link}
                href={`/admin/blogs/edit/${params.row._id}`}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => removeBlogHandler(params.row._id)}
                aria-label="link"
              >
                <Delete color="error" fontSize="small" />
              </IconButton>
            </Stack>
          ),
        },
      ];
};

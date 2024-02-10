import Link from "next/link";

import { Edit, Launch } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

export const pagesTableColumns = () => {
  return [
    {
      field: "title",
      headerName: "عنوان",
      flex: 1,
    },
    {
      field: "englishTitle",
      headerName: "عنوان انگلیسی",
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
            href={`/admin/pages-data/${params.row._id}`}
          >
            <Launch color="primary" fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="link"
            component={Link}
            href={`/admin/pages-data/edit/${params.row._id}`}
          >
            <Edit fontSize="small" />
          </IconButton>
        </Stack>
      ),
    },
  ];
};

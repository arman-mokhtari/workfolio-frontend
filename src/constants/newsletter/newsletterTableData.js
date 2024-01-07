

import { Delete } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

export const newsletterTableColumns = (isSmallScreen, removeNewsletterUserHandler) => {
  return isSmallScreen
    ? [
        {
          field: "name",
          headerName: "نام",
          flex: 1,
        },
        {
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <Stack direction="row" alignItems="center">
              <IconButton
                onClick={() => removeNewsletterUserHandler(params.row._id)}
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
          field: "action",
          headerName: "عملیات",
          flex: 1,
          renderCell: (params) => (
            <Stack direction="row" alignItems="center">
              <IconButton
                onClick={() => removeNewsletterUserHandler(params.row._id)}
                aria-label="link"
              >
                <Delete color="error" fontSize="small" />
              </IconButton>
            </Stack>
          ),
        },
      ];
};

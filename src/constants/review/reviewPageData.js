import Link from "next/link";

import { Launch, Cancel, CheckCircle } from "@mui/icons-material";
import { IconButton, Stack, Box, Typography } from "@mui/material";

export const reviewsTableColumns = (isSmallScreen) => {
  return isSmallScreen
    ? [
        {
          field: "message",
          headerName: "نظرات",
          flex: 1,
        },
        {
          field: "isAccept",
          headerName: "وضعیت",
          flex: 1,
          renderCell: (params) => (
            <Box>
              {params.row.isAccept ? (
                <Stack spacing={0.5} direction="row" alignItems="center">
                  <Typography variant="body2">تایید</Typography>
                  <CheckCircle color="success" />
                </Stack>
              ) : (
                <Stack spacing={0.5} direction="row" alignItems="center">
                  <Typography variant="body2">انتظار</Typography>
                  <Cancel color="error" />
                </Stack>
              )}
            </Box>
          ),
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
                href={`/admin/reviews/public/${params.row._id}`}
              >
                <Launch color="primary" fontSize="small" />
              </IconButton>
            </Stack>
          ),
        },
      ]
    : [
        { field: "id", headerName: "#", flex: 1 },
        {
          field: "user",
          headerName: "نام",
          flex: 1,
          valueGetter: (params) =>
            params.row.user ? params.row.user.name : "کاربر ناشناس",
        },
        {
          field: "message",
          headerName: "نظرات",
          flex: 1,
        },
        {
          field: "isAccept",
          headerName: "وضعیت",
          flex: 1,
          renderCell: (params) => (
            <Box>
              {params.row.isAccept ? (
                <Stack spacing={0.5} direction="row" alignItems="center">
                  <Typography variant="body2">تایید</Typography>
                  <CheckCircle color="success" />
                </Stack>
              ) : (
                <Stack spacing={0.5} direction="row" alignItems="center">
                  <Typography variant="body2">انتظار</Typography>
                  <Cancel color="error" />
                </Stack>
              )}
            </Box>
          ),
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
                href={`/admin/reviews/public/${params.row._id}`}
              >
                <Launch color="primary" fontSize="small" />
              </IconButton>
            </Stack>
          ),
        },
      ];
};

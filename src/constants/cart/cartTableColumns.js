import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

export const cartTableColumns = (removeHandler) => {
  return [
    {
      field: "title",
      headerName: "عنوان",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "تعداد",
      flex: 1,
      valueGetter: (params) => toPersianNumbers(params.row.quantity),
    },
    {
      field: "action",
      headerName: "حذف",
      flex: 1,
      renderCell: (params) => (
        <IconButton
          onClick={() => removeHandler(params.row._id)}
          aria-label="button"
        >
          <Delete color="error" fontSize="small" />
        </IconButton>
      ),
    },
  ];
};

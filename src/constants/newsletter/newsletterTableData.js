import GlobalModal from "@/common/globalModal";
import { useModal } from "@/context/modalContext";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const NewsletterTableColumns = (
  isSmallScreen,
  removeNewsletterUserHandler
) => {
  const { openModal } = useModal();
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
            <GlobalModal
              modalHandler={() => removeNewsletterUserHandler(params.row._id)}
              question="آیا از حذف این آیتم اطمینان دارید؟"
              acceptText="تایید"
              rejectText="انصراف"
            >
              <IconButton onClick={openModal} aria-label="remove">
                <Delete color="error" fontSize="small" />
              </IconButton>
            </GlobalModal>
          ),
        },
      ]
    : [
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
            <GlobalModal
              modalHandler={() => removeNewsletterUserHandler(params.row._id)}
              question="آیا از حذف این آیتم اطمینان دارید؟"
              acceptText="تایید"
              rejectText="انصراف"
            >
              <IconButton onClick={openModal} aria-label="remove">
                <Delete color="error" fontSize="small" />
              </IconButton>
            </GlobalModal>
          ),
        },
      ];
};

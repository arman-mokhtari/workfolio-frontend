import Link from "next/link";

import { Delete, Edit, Launch } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import GlobalModal from "@/common/globalModal";
import { useModal } from "@/context/modalContext";

const OperationStack = ({ editHref, viewHref, removeHandler }) => {
  const { openModal } = useModal();

  return (
    <Stack direction="row" alignItems="center">
      <IconButton aria-label="link" component={Link} href={viewHref}>
        <Launch color="primary" fontSize="small" />
      </IconButton>
      <IconButton aria-label="link" component={Link} href={editHref}>
        <Edit fontSize="small" />
      </IconButton>
      <GlobalModal
        modalHandler={removeHandler}
        question="آیا از حذف این آیتم اطمینان دارید؟"
        acceptText="تایید"
        rejectText="انصراف"
      >
        <IconButton onClick={openModal} aria-label="remove">
          <Delete color="error" fontSize="small" />
        </IconButton>
      </GlobalModal>
    </Stack>
  );
};

export default OperationStack;

import { CardActions, Button, ButtonGroup } from "@mui/material";
import { useModal } from "@/context/modalContext";
import GlobalModal from "@/common/globalModal";

const OperationButtons = ({
  handleSubmit,
  handleUnSubmit,
  removeReviewHandler,
}) => {
  const { openModal } = useModal();

  return (
    <CardActions
      sx={{
        justifyContent: "space-around",

        mt: 1.5,
      }}
    >
      <ButtonGroup>
        <Button color="success" aria-label="submit" onClick={handleSubmit}>
          تایید
        </Button>
        <Button aria-label="unSubmit" onClick={handleUnSubmit}>عدم تایید</Button>
        <GlobalModal
          modalHandler={removeReviewHandler}
          question="آیا از حذف این آیتم اطمینان دارید؟"
          acceptText="تایید"
          rejectText="انصراف"
        >
          <Button aria-label="open modal" color="error" onClick={openModal}>
            حذف
          </Button>
        </GlobalModal>
      </ButtonGroup>
    </CardActions>
  );
};

export default OperationButtons;

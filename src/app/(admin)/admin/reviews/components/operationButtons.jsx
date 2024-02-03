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
        <Button color="success" onClick={handleSubmit}>
          تایید
        </Button>
        <Button onClick={handleUnSubmit}>عدم تایید</Button>
        <GlobalModal
          modalHandler={removeReviewHandler}
          question="آیا از حذف این آیتم اطمینان دارید؟"
          acceptText="تایید"
          rejectText="انصراف"
        >
          <Button color="error" onClick={openModal}>
            حذف
          </Button>
        </GlobalModal>
      </ButtonGroup>
    </CardActions>
  );
};

export default OperationButtons;

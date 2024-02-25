import { Box, Typography, Modal, Stack, Button } from "@mui/material";
import { useModal } from "@/context/modalContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const GlobalModal = ({
  children,
  modalHandler,
  acceptText,
  rejectText,
  question,
}) => {
  const { modalOpen, closeModal } = useModal();

  return (
    <Box>
      {children}
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={3} direction="column">
            <Typography id="modal-modal-title">{question}</Typography>
            <Stack justifyContent="space-evenly" direction="row">
              <Button color="error" aria-label="open modal" variant="contained" onClick={modalHandler}>
                {acceptText}
              </Button>
              <Button color="primary" variant="contained" aria-label="close modal" onClick={closeModal}>
                {rejectText}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
export default GlobalModal;

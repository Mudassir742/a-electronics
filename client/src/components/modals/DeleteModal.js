import {
  Modal,
  Card,
  Button,
  Box,
  Typography,
  Stack,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// -------------------------------Style Components-----------------------------------

const CardWrapper = styled(Card)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  borderRadius: "10px",
  padding: "1rem",
}));

const ButtonSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "1rem",
}));

const ButtonWrapper = styled(Button)(({ theme, hovercolor, color }) => ({
  //   color: color,
  //   "&:hover": {
  //     backgroundColor: hovercolor,
  //},
}));

// -----------------------------------------------------------------------------------

const DeleteModal = ({
  title,
  description,
  action,
  setOpen,
  open,
  actionPerforming,
}) => {
  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: 1000 }} open={actionPerforming}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal
        open={open || actionPerforming}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardWrapper>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`Delete ${title}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <ButtonSection>
            <Stack direction="row" spacing={2}>
              <ButtonWrapper
                disabled={actionPerforming}
                onClick={() => setOpen(false)}
              >
                No
              </ButtonWrapper>
              <ButtonWrapper
                disabled={actionPerforming}
                onClick={() => action.mutate()}
              >
                Yes
              </ButtonWrapper>
            </Stack>
          </ButtonSection>
        </CardWrapper>
      </Modal>
    </>
  );
};

export default DeleteModal;

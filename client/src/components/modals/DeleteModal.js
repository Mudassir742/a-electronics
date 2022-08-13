import { Modal, Card, Button, Box, Typography, Stack } from "@mui/material";
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

const DeleteModal = ({ title, description, action, setOpen, open }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
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
            <ButtonWrapper onClick={() => setOpen(false)}>No</ButtonWrapper>
            <ButtonWrapper onClick={() => action.mutate()}>Yes</ButtonWrapper>
          </Stack>
        </ButtonSection>
      </CardWrapper>
    </Modal>
  );
};

export default DeleteModal;

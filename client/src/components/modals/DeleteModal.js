import { Modal,Card,Button,Typography } from "@mui/material"
import { styled } from "@mui/material/styles";


const DeleteModal = ({title,description,action,setOpen,open}) => {
  return (
      <Modal
        open={open}
        onClose={setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Card>
      </Modal>
  )
}

export default DeleteModal
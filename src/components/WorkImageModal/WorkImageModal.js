import React, { useContext } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import styles from "./WorkImageModal.module.scss";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AppContext from "../../context";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    border: "none",
    outline: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    width: "60vw",
    height: "60vh",
  },
  img: {
    border: "none",
    outline: "none",
    width: "60vw",
    height: "60vh",
  },
}));

const WorkImageModal = () => {
  const classes = useStyles();

  const { handleImageModalClose, imageModalOpen, selectImage } =
    useContext(AppContext);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={imageModalOpen}
      onClose={handleImageModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={imageModalOpen}>
        <img className={styles.modalImg} src={selectImage} />
      </Fade>
    </Modal>
  );
};
export default WorkImageModal;

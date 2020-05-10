import React from "react";
import Modal from "@material-ui/core/Modal";
import { useStyles } from "./modal-card-style";
import Typography from "@material-ui/core/Typography";
import { SimpleTable } from "./modal-table";
import { BtnToggleBookInBasket } from "../btn-toggle-basket";

export const ModalCard = ({ modal, closeModal }) => {
  const classes = useStyles();

  const { status, book } = modal;
  return (
    <Modal className={classes.modal} onClose={closeModal} open={status}>
      <div className={classes.modalCard}>
        <div>
          <img
            className={classes.bookImg}
            src={book && book.urlImage}
            alt="Книга"
          />
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            {book && book.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {book && book.description}
          </Typography>
          <SimpleTable book={book} />
          <div className={classes.footer}>
            <BtnToggleBookInBasket book={book} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

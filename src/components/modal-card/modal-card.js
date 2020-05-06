import React from "react";
import Modal from "@material-ui/core/Modal";
import { useStyles } from "./modal-card-style";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { SimpleTable } from "./modal-table";

export const ModalCard = ({ status, closeModal, book }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  const body = book ? (
    <div className={matches ? classes.paperSm : classes.paper}>
      <ImgMediaCard classes={classes} matches={matches} book={book} />
    </div>
  ) : (
    <div />
  );

  return (
    <div>
      <Modal onClose={closeModal} open={status}>
        {body}
      </Modal>
    </div>
  );
};

function ImgMediaCard({ book, matches, classes }) {
  return (
    <>
      <CardMedia
        component="img"
        height={matches ? "350" : "400"}
        image={book.urlImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {book.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {book.description}
        </Typography>
        <SimpleTable book={book} />
      </CardContent>
      <Button size="small" color="primary">
        Share
      </Button>
    </>
  );
}

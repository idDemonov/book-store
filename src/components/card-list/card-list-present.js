import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardItem } from "../card-item";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f2f3f4",
  },
});

export const CardListPresent = ({ cardBooks, bootStatus, openModal }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justify="center" component="main">
      {cardBooks.map((book) => (
        <CardItem
          key={book.id}
          book={book}
          openModal={openModal}
          bootStatus={bootStatus}
        />
      ))}
    </Grid>
  );
};

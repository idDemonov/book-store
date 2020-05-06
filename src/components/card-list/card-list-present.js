import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardItem } from "../card-item/card-item";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
  },
});

export const CardListPresent = (props) => {
  const classes = useStyles();
  const { cardBooks } = props;
  return (
    <main className={classes.root}>
      <Grid container justify="center" spacing={3}>
        {cardBooks.map((card) => (
          <CardItem card={card} />
        ))}
      </Grid>
    </main>
  );
};

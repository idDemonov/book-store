import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingBasket } from "./shopping-basket";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    padding: "0 20px",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Grid container justify="space-between">
        <h2>Book Store</h2>
        <ShoppingBasket />
      </Grid>
    </header>
  );
};

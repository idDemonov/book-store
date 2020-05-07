import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingBasketContainer as ShoppingBasket } from "./shopping-basket";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    backgroundColor: "white",
    padding: "0 20px",
  },
  link: {
    alignSelf: "center",
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Grid container justify="space-between">
        <Link className={classes.link} to={"/"}>
          <h2>Book Store</h2>
        </Link>
        <Link className={classes.link} to={"/basket/"}>
          <ShoppingBasket />
        </Link>
      </Grid>
    </header>
  );
};

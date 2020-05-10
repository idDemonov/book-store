import React from "react";
import { ShoppingBasketContainer as ShoppingBasket } from "./shopping-basket";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useStyles } from "./header-style";

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Grid container justify="space-between">
        <Link className={classes.link} to="/">
          <h2>Book Store</h2>
        </Link>
        <Link className={classes.link} to="/basket/">
          <ShoppingBasket />
        </Link>
      </Grid>
    </header>
  );
};

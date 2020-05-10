import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Text from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PayIcon from "@material-ui/icons/Payment";
import { useStyles } from "./pay-card-style";

export const PayCard = ({ sum }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Paper className={classes.paper} elevation={8}>
        <Text align="center" variant="h6" gutterBottom>
          Итоговая цена
        </Text>
        <Text color="primary" align="center" variant="h5" gutterBottom>
          {sum}
        </Text>
        <Button variant="contained" size="large" startIcon={<PayIcon />}>
          Оплатить
        </Button>
      </Paper>
    </Grid>
  );
};

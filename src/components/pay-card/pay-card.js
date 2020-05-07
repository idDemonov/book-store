import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PaymentIcon from "@material-ui/icons/Payment";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  paper: {
    padding: 10,
  },
}));

export const PayCard = ({ sum }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Grid item>
        <Paper className={classes.paper} elevation={3}>
          <Grid item>
            <Typography align="center" variant="h6" gutterBottom>
              Итоговая цена
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="primary"
              align="center"
              variant="h5"
              gutterBottom
            >
              {sum}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="default"
              size="large"
              className={classes.button}
              startIcon={<PaymentIcon />}
            >
              Оплатить
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

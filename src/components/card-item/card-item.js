import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
  price: {
    color: "#616161",
  },
  input: {
    border: "1px solid rgba(0, 0, 0, 0.23);",
    maxWidth: "50px",
    padding: "0 5px",
  },
});

export const CardItem = ({ card }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img.chaconne.ru/rsz/img/3903095.[w=300&h=350].jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={classes.title}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              className={classes.price}
            >
              {card.price}₽
            </Typography>
          </div>

          <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">В корзину</Button>
      </CardActions>
    </Card>
  );
};

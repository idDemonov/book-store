import React from "react";
// Material UI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// Other
import { useStyles } from "./card-item-style";
import { BtnToggleBookInBasket } from "../btn-toggle-basket";

export const CardItemPresent = ({ book, actions }) => {
  const classes = useStyles();
  const { openModal } = actions;

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => openModal(book)}>
        <CardMedia className={classes.media} image={book.urlImg} />
        <CardContent>
          <div className={classes.title}>
            <Typography variant="h5" component="h2">
              {book.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              className={classes.price}
            >
              {book.price}₽
            </Typography>
          </div>

          <Typography
            className={classes.actionArea}
            variant="body2"
            color="textSecondary"
          >
            {book.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <BtnToggleBookInBasket book={book} />
      </CardActions>
    </Card>
  );
};

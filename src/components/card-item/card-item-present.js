import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./card-item-style";
import { BtnToggleBasket } from "../btn-toggle-basket";

export const CardItemPresent = (props) => {
  const classes = useStyles();

  const { card } = props;
  const { openModal } = props.actions;

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea onClick={() => openModal(card)}>
          <CardMedia
            className={classes.media}
            image={card.urlImg}
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

            <Typography
              className={classes.actionArea}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <BtnToggleBasket card={card} />
        </CardActions>
      </Card>
    </Grid>
  );
};

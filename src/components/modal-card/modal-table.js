import React from "react";
import { useStyles } from "./modal-card-style";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

export const SimpleTable = ({ book }) => {
  const classes = useStyles();
  return (
    <List component="div">
      <ListItem divider button>
        <ListItemText primary="Автор" />
        <ListItemText className={classes.text} primary={book.author} />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Цена" />
        <ListItemText className={classes.text} primary={`${book.price}₽`} />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Рейтинг" />
        <ListItemText className={classes.text} primary={`${book.star} из 5`} />
      </ListItem>
    </List>
  );
};

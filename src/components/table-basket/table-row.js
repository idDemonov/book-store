import React, { useState } from "react";
import Row from "@material-ui/core/TableRow";
import Cell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { TableInternal } from "./table-internal";
import { TableButton } from "./table-button";
import { makeStyles } from "@material-ui/core/styles";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

export const TableRow = (props) => {
  const { book, actions } = props;
  const { addBookBasket, removeBookBasket, deleteBookBasket } = actions;

  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const addBook = () => addBookBasket(book.id);

  const removeBook = () => removeBookBasket(book.id);

  const deleteBook = () => deleteBookBasket(book);

  return (
    <>
      <Row className={classes.root}>
        <Cell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Cell>
        <Cell scope="row">{book.name}</Cell>
        <Cell align="center">{book.count}</Cell>
        <Cell align="center">{book.count * book.price}₽</Cell>
        <Cell align="right">
          <TableButton
            deleteBook={deleteBook}
            addBook={addBook}
            removeBook={removeBook}
          />
        </Cell>
      </Row>
      <TableInternal open={open} data={book} />
    </>
  );
};

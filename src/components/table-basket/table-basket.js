import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const Row = (props) => {
  const { book, actions } = props;
  const { addBookBasket, removeBookBasket, deleteBookBasket } = actions;

  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const addBook = () => addBookBasket(book.id);

  const removeBook = () => removeBookBasket(book.id);

  const deleteBook = () => deleteBookBasket(book);

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row">{book.name}</TableCell>
        <TableCell align="center">{book.count}</TableCell>
        <TableCell align="center">{book.count * book.price}₽</TableCell>
        <TableCell align="right">
          <ButtonGroup
            deleteBook={deleteBook}
            addBook={addBook}
            removeBook={removeBook}
          />
        </TableCell>
      </TableRow>
      <InternalTable open={open} data={book} />
    </>
  );
};

const ButtonGroup = ({ addBook, removeBook, deleteBook }) => {
  return (
    <>
      <IconButton color="primary" onClick={addBook}>
        <AddIcon />
      </IconButton>
      <IconButton onClick={removeBook}>
        <RemoveIcon />
      </IconButton>
      <IconButton onClick={deleteBook} style={{ color: "red" }}>
        <DeleteOutlineIcon />
      </IconButton>
    </>
  );
};

const InternalTable = ({ data, open }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={2}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Автор</TableCell>
                  <TableCell align="right">Отзывы</TableCell>
                  <TableCell align="right">Количество</TableCell>
                  <TableCell align="right">Цена книги</TableCell>
                  <TableCell align="right">Итог</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left">{data.author}</TableCell>
                  <TableCell align="right">{data.star}★</TableCell>
                  <TableCell align="right">{data.count}</TableCell>
                  <TableCell align="right">{data.price}₽</TableCell>
                  <TableCell align="right">
                    {data.count * data.price}₽
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export const TableBasket = (props) => {
  const { basketBooks, actions } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Книга</TableCell>
            <TableCell align="center">Количество</TableCell>
            <TableCell align="center">Итог за книгу</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {basketBooks.map((book) => {
            return <Row key={book.id} book={book} actions={actions} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

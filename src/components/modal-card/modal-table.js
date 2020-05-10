import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "./modal-card-style";

export const SimpleTable = ({ book }) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Автор</TableCell>
            <TableCell align="center">Цена</TableCell>
            <TableCell align="center">Рейтинг</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">{book.author}</TableCell>
            <TableCell align="center">{book.price}₽</TableCell>
            <TableCell align="center">{book.star} из 5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

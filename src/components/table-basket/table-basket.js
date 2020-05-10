import React from "react";
// Component
import { TableRow } from "./table-row";
// Other
import Table from "@material-ui/core/Table";
import Body from "@material-ui/core/TableBody";
import Cell from "@material-ui/core/TableCell";
import Container from "@material-ui/core/TableContainer";
import Head from "@material-ui/core/TableHead";
import Row from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const TableBasket = (props) => {
  const { basketBooks, actions } = props;

  return (
    <Container component={Paper}>
      <Table>
        <Head>
          <Row>
            <Cell />
            <Cell>Книга</Cell>
            <Cell align="center">Количество</Cell>
            <Cell align="center">Итог за книгу</Cell>
            <Cell />
          </Row>
        </Head>
        <Body>
          {basketBooks.map((book) => {
            return <TableRow key={book.id} book={book} actions={actions} />;
          })}
        </Body>
      </Table>
    </Container>
  );
};

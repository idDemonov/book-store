import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import React from "react";

export const TableInternal = ({ data, open }) => {
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

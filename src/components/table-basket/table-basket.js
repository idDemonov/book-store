import React from "react";
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
import ButtonGroup from "@material-ui/core/ButtonGroup";
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

function createData(bookName, calories, fat, carbs, price) {
  return {
    bookName,
    calories,
    fat,
    carbs,
    price,
    history: [{ date: "Альтхофф Кори", customerId: "5", amount: 3 }],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.bookName}
        </TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="right">
          <ButtonGroup>
            <IconButton color="primary" component="span">
              <AddIcon />
            </IconButton>
            <IconButton component="span">
              <RemoveIcon />
            </IconButton>

            <IconButton style={{ color: "red" }} component="span">
              <DeleteOutlineIcon />
            </IconButton>
          </ButtonGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Автор</TableCell>
                    <TableCell align="right">Отзывы</TableCell>
                    <TableCell align="right">Цена</TableCell>
                    <TableCell align="right">Итог</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.customerId}★
                      </TableCell>
                      <TableCell align="right">{historyRow.amount}₽</TableCell>
                      <TableCell align="right">500₽</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Имя Книги 1", 159, 6.0, 4.0, 3.99),
  createData("Имя Книги 2", 237, 37, 4.3, 4.9329),
  createData("Имя Книги 3", 262, 16.0, 24, 3.79),
  createData("Имя Книги 4", 305, 3.7, 67, 2.5),
  createData("Имя Книги 5", 356, 16.0, 3.9, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Книга</TableCell>
            <TableCell align="center">Количество</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

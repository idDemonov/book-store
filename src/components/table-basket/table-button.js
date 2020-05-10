import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React from "react";

export const TableButton = ({ addBook, removeBook, deleteBook }) => {
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

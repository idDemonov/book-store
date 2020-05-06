import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

export const CardItemControls = (props) => {
  if (props.status) {
    return (
      <Button color="primary" onClick={props.handlerButtonClick}>
        <CheckIcon />
      </Button>
    );
  } else {
    return (
      <Button
        variant="outlined"
        color="primary"
        onClick={props.handlerButtonClick}
        endIcon={<AddIcon />}
      >
        В корзину
      </Button>
    );
  }
};

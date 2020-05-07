import React, { useState } from "react";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";

export const BtnToggleBasketPresent = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const showMassage = () => {
    const massage = btnStatus
      ? "Книга удалена из корзины"
      : "Книга добавлена в корзину";
    const variant = btnStatus ? "warning" : "success";
    enqueueSnackbar(massage, { variant });
  };

  const { card, basketBooks } = props;
  const { putBookInBasket, updateSum } = props.actions;

  const btnStatus = basketBooks.includes(card);

  const handlerButtonClick = () => {
    showMassage();
    putBookInBasket(card);
  };

  if (btnStatus) {
    return (
      <Button variant="outlined" color="primary" onClick={handlerButtonClick}>
        <CheckIcon />
      </Button>
    );
  } else {
    return (
      <Button
        variant="outlined"
        color="primary"
        onClick={handlerButtonClick}
        endIcon={<AddIcon />}
      >
        В корзину
      </Button>
    );
  }
};

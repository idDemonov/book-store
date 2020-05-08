import React from "react";
// Material UI
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
// Other
import { useSnackbar } from "notistack";

export const BtnToggleBasketPresent = ({ book, basketBooks, actions }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { putBookInBasket } = actions;
  const btnStatus = basketBooks.includes(book);

  const showMassage = () => {
    const massage = btnStatus
      ? "Книга удалена из корзины"
      : "Книга добавлена в корзину";
    const variant = btnStatus ? "warning" : "success";
    enqueueSnackbar(massage, { variant });
  };

  const handlerButtonClick = () => {
    showMassage();
    putBookInBasket(book);
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

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
  const btnStatus = basketBooks.some((b) => b.id === book.id);

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

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={handlerButtonClick}
      endIcon={btnStatus ? null : <AddIcon />}
    >
      {btnStatus ? <CheckIcon /> : "В корзину"}
    </Button>
  );
};

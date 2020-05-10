import React from "react";
// Component
import { TableBasket } from "../table-basket";
import { PayCard } from "../pay-card/pay-card";
// Other
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addBookBasket,
  removeBookBasket,
  deleteBookBasket,
} from "../../redux/actions/action-creators";
import { calcTotalSum } from "../../redux/selectors/calc-total-sum";

const BasketPageContainer = ({ basketBooks, totalSum, actions }) => {
  return (
    <>
      <TableBasket
        actions={actions}
        totalSum={totalSum}
        basketBooks={basketBooks}
      />
      <PayCard sum={totalSum} />
    </>
  );
};

const mapStateToProps = ({ basketBooks }) => ({
  basketBooks,
  totalSum: calcTotalSum(basketBooks),
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { addBookBasket, removeBookBasket, deleteBookBasket },
      dispatch
    ),
  };
};

export const BasketPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPageContainer);

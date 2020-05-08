import React from "react";
import { TableBasket } from "../table-basket";
import { PayCard } from "../pay-card/pay-card";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addBookBasket,
  removeBookBasket,
  deleteBookBasket,
} from "../../redux/actions/action-creators";
import { calcTotalSum } from "../../redux/selectors/calc-total-sum";

const BasketPageC = ({ basketBooks, totalSum, actions }) => {
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

const mapStateToProps = (state) => {
  return {
    basketBooks: state.basketBooks,
    totalSum: calcTotalSum(state.basketBooks),
  };
};

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
)(BasketPageC);

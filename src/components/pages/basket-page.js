import React from "react";
import { TableBasket } from "../table-basket";
import { PayCard } from "../pay-card/pay-card";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/action-creators";
import { calcTotalSum } from "../../redux/selectors/calc-total-sum";

const BasketPageC = (props) => {
  const { actions } = props;
  const { basketBooks, totalSum } = props;

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
  return { actions: bindActionCreators(actions, dispatch) };
};

export const BasketPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPageC);

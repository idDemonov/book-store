import React from "react";
import { TableBasket } from "../table-basket";
import { PayCard } from "../pay-card/pay-card";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/action-creators";

const BasketPageC = (props) => {
  const { actions } = props;
  const { basketBooks, totalSum } = props;

  return (
    <div>
      <TableBasket
        actions={actions}
        totalSum={totalSum}
        basketBooks={basketBooks}
      />
      ;
      <PayCard sum={totalSum} />
    </div>
  );
};

const mapStateToProps = ({ basketBooks, totalSum }) => {
  return { basketBooks, totalSum };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export const BasketPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPageC);

import { connect } from "react-redux";
import { BtnToggleBasketPresent } from "./btn-toggle-basket-present";
import { bindActionCreators } from "redux";
import {
  putBookInBasket,
  updateSum,
} from "../../redux/actions/action-creators";

const mapStateToProps = (state) => {
  return {
    basketBooks: state.basketBooks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ putBookInBasket, updateSum }, dispatch),
});

export const BtnToggleBasketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnToggleBasketPresent);

import { connect } from "react-redux";
import { BtnToggleBasketPresent } from "./btn-toggle-basket-present";
import { bindActionCreators } from "redux";
import { putBookInBasket } from "../../redux/actions/action-creators";

const mapStateToProps = ({ basketBooks }) => ({ basketBooks });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ putBookInBasket }, dispatch),
});

export const BtnToggleBasketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnToggleBasketPresent);

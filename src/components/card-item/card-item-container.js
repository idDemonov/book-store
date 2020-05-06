import { connect } from "react-redux";
import { CardItemPresent } from "./card-item-present";
import { bindActionCreators } from "redux";
import {
  openModal,
  putBookInBasket,
} from "../../redux/actions/action-creators";

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ openModal, putBookInBasket }, dispatch),
});

export const CardItemContainer = connect(
  null,
  mapDispatchToProps
)(CardItemPresent);

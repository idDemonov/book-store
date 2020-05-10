import { connect } from "react-redux";
import { CardListPresent } from "./card-list-present";
import { bindActionCreators } from "redux";
import { openModal } from "../../redux/actions/action-creators";

const mapStateToProps = ({ cardBooks, bootStatus }) => ({
  cardBooks,
  bootStatus,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ openModal }, dispatch);

export const CardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardListPresent);

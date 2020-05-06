import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppPresent } from "./app-present";

const mapStateToProps = (state) => {
  return {
    book: state.cardBooks,
  };
};

export default connect(mapStateToProps)(AppPresent);

import React from "react";
import { connect } from "react-redux";
import { CardListPresent } from "./card-list-present";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/action-creators";

const mapStateToProps = ({ cardBooks }) => ({ cardBooks });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export const CardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardListPresent);

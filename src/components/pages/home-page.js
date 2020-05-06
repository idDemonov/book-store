import { CardList } from "../card-list";
import { ModalCard } from "../modal-card/modal-card";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/action-creators";

const HomePageP = (props) => {
  const { status, book } = props.modal;
  const { closeModal } = props.actions;
  return (
    <>
      <CardList />
      <ModalCard book={book} status={status} closeModal={closeModal} />
    </>
  );
};

const mapStateToProps = ({ modal }) => ({ modal });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageP);

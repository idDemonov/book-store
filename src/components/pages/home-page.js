import { CardList } from "../card-list";
import { ModalCard } from "../modal-card/modal-card";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeModal } from "../../redux/actions/action-creators";
import { SnackbarProvider } from "notistack";

const HomePageContainer = ({ closeModal, modal }) => {
  return (
    <SnackbarProvider>
      <CardList />
      <ModalCard modal={modal} closeModal={closeModal} />
    </SnackbarProvider>
  );
};

const mapStateToProps = ({ modal }) => ({ modal });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeModal }, dispatch);

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);

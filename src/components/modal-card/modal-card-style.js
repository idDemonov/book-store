import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    backgroundColor: "white",
    padding: "10px",
    display: "flex",
    maxWidth: "1100px",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  bookImg: {
    maxWidth: "250px",
    paddingRight: "10px",
  },
  text: {
    textAlign: "end",
  },
});

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  const base = {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "4px",
    boxShadow: theme.shadows[5],
    padding: "5px 5px",
  };
  return {
    paper: {
      ...base,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    paperSm: {
      ...base,
      top: "50%",
      transform: "translate(0%, -50%)",
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
    },
    table: {
      minWidth: 650,
    },
  };
});

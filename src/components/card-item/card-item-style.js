import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "345px",
    margin: "15px 10px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: "140px",
  },
  price: {
    fontWeight: 700,
  },
  actionArea: {
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
});

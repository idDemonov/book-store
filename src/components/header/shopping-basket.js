import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";

const StyledBadge = withStyles({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid white`,
    padding: "0 4px",
    backgroundColor: "#009999",
    color: "white",
  },
})(Badge);

const ShoppingBasketPresent = (props) => {
  const count = props.basketBooks.length;
  return (
    <IconButton>
      <StyledBadge badgeContent={count}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

const mapStateToProps = ({ basketBooks }) => ({ basketBooks });

export const ShoppingBasketContainer = connect(mapStateToProps)(
  ShoppingBasketPresent
);

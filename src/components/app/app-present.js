// React
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import { Header } from "../header";
import { HomePage } from "../pages/home-page";
import { BasketPage } from "../pages/basket-page";
// Other
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";

export const AppPresent = (props) => {
  return (
    <CssBaseline>
      <SnackbarProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/basket" component={BasketPage} />
        </Switch>
      </SnackbarProvider>
    </CssBaseline>
  );
};

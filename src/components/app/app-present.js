// React
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import { Header } from "../header";
import { HomePage } from "../pages/home-page";
import { BookPage } from "../pages/book-page";
import CssBaseline from "@material-ui/core/CssBaseline";

export const AppPresent = (props) => {
  return (
    <CssBaseline>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/book" component={BookPage} />
      </Switch>
    </CssBaseline>
  );
};

// React
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
// Components
import { App } from "./components/app";
import { getBook } from "./redux/actions/action-creators";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getBook);

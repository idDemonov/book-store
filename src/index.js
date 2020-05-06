// React
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
// Components
import { App } from "./components/app";

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

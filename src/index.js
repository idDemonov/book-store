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
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-N7F55M2',
}

TagManager.initialize(tagManagerArgs)

render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(getBook);

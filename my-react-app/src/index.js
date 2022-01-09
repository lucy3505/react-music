import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import { StoreContext } from "@/utils/context";
import store from "./store";
import { Provider } from "react-redux";
ReactDOM.render(
  // <StoreContext value={store}>
  <Provider store={store}>
    <App />
  </Provider>,
  // </StoreContext>

  document.getElementById("root")
);

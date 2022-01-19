import React, { memo } from "react";
import { renderRoutes } from "react-router-config";

import routes from "./router";
import store from "./store";

import YYAppHeader from "components/app-header";
import YYAppFooter from "@/components/app-footer";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YYAppHeader />
        {renderRoutes(routes)}

        <YYAppFooter />
      </HashRouter>
    </Provider>
  );
});

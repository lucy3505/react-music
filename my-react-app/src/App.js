import React, { memo } from "react";
import { renderRoutes } from "react-router-config";

import routes from "./router";

import YYAppHeader from "components/app-header";
import YYAppFooter from "@/components/app-footer";
import { HashRouter, Switch } from "react-router-dom";

export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <YYAppHeader />
        <Switch>{renderRoutes(routes)}</Switch>

        <YYAppFooter />
      </HashRouter>
    </div>
  );
});

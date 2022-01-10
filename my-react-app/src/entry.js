import React, { PureComponent } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./pages/login";
import App from "./App";
export default class Entry extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        {/* <Switch> */}
        <Route path="*" component={App}></Route>
        <Route path="/login" component={Login}></Route>
        {/* </Switch> */}
        {/* <App /> */}
      </BrowserRouter>
    );
  }
}

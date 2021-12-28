import React, { PureComponent } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import App from "./App";
export default class Entry extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    );
  }
}

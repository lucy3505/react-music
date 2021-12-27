import React, { PureComponent } from "react";
import About from "./pages/about3";
// import About from "./pages/about";
import Home from "./pages/home5-redux-saga使用";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}

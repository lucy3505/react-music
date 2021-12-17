import React, { Component } from "react";
import Navbar from "./Navbar";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="11">
          <span>aa</span>
          <strong>bb</strong>
        </Navbar>
        {/* <Navbar />
        <Navbar /> */}
      </div>
    );
  }
}

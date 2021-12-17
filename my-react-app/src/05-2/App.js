import React, { Component } from "react";
import Navbar from "./Navbar";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          leftSlot={<span>11</span>}
          centerSlot={<strong>22</strong>}
          rightSlot={<a>cc</a>}
        ></Navbar>
      </div>
    );
  }
}

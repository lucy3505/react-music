import React, { Component } from "react";
import "./style.css";
export default class Navbar extends Component {
  render() {
    const { leftSlot, rightSlot, centerSlot } = this.props;

    return (
      <div className="nav-item nav-bar">
        <div className="nav-left">{leftSlot}</div>
        <div className="nav-center">{rightSlot}</div>
        <div className="nav-right">{centerSlot}</div>
      </div>
    );
  }
}

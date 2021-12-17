import React, { Component } from "react";

import TabControl from "./TabControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      titles: ["新款", "精选", "流行"],
    };
  }
  render() {
    return (
      <div>
        <TabControl
          titles={this.state.titles}
          // onClick={this.handleCurrentIndex}
          onClick={(index) => this.handleCurrentIndex(index)}
        />
        <h2>{this.state.titles[this.state.currentIndex]}</h2>
      </div>
    );
  }

  handleCurrentIndex(index) {
    console.log(index);
    this.setState({ currentIndex: index });
  }
}

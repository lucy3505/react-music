import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "hello world", name: "coderwhy" };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }

  changeText() {
    //情况一：setState放入setTimeout中

    this.setState({ message: "你好啊" });
    //  Object.assign({},{ message: "你好啊" },this.state) 源码中数据的合并
  }
}

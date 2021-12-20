import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "hello world" };
  }
  render() {
    return (
      <div>
        <h2>当前文本：{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }

  componentDidMount() {
    //情况二：放入原始Dom监听
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({ message: "你好啊" });
      console.log(this.state.message);
    });
  }

  changeText() {
    //情况一：setState放入setTimeout中
    setTimeout(() => {
      this.setState({ message: "你好啊" });
      console.log(this.state.message);
    }, 0);
  }
}
/**
 * 在组件声明周期或React合成事件中，setState是异步
 * 合成事件就类似于onClick
 *
 *
 * 在setTimeout或者原生dom事件中，setstate是同步
 *
 *
 */

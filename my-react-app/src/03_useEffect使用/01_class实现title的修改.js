import React, { PureComponent } from "react";
export default class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    //1.修改dom
    document.title = this.state.counter;
    //2.订阅事件
    console.log("订阅一些事件");
    //3.网络请求
  }

  componentDidUpdate() {
    document.title = this.state.counter;
  }

  componentWillUnmount() {
    console.log("取消事件订阅");
  }

  render() {
    return (
      <div>
        <h2>当前数字：{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
      </div>
    );
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
}

import React, { PureComponent } from "react";
import classNames from "classnames";
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
  }
  render() {
    const { isActive } = this.state;
    const isBar = false;
    const errClass = "error";
    const warnClass = undefined;
    return (
      <div>
        {/* 原生中react添加class方法 */}
        <h2 className={"foo bar active"}>我是标题1</h2>
        <h2 className={"title" + (isActive ? " active" : "")}>我是标题1</h2>
        <h2 className={["title", isActive ? "active" : ""].join(" ")}>
          我是标题1
        </h2>
        <h2>我是标题1</h2>

        {/* classnames库添加class */}
        <h2 className={"foo bar active"}>我是标题5</h2>
        <h2 className={classNames("foo", "bar", "active")}>我是标题5</h2>
        <h2 className={classNames({ active: isActive, bar: isBar }, "foo")}>
          我是标题6
        </h2>
        <h2 className={classNames(errClass, warnClass)}>我是标题7</h2>
        <h2 className={classNames(["active", { bar: isBar }])}>我是标题8</h2>
        <h2>我是标题9</h2>
      </div>
    );
  }
}

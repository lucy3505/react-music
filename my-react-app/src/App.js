import React, { PureComponent } from "react";
import CSSTransitionDemo from "./transition/CSSTransitionDemo";
import SwitchTransitionDemo from "./transition/SwitchTransitionDemo";
import TransitionGroupDemo from "./transition/TransitionGroupDemo";
//SwitchTransitionDemo 两个组件之间切换的炫酷动画
//CSSTransitionDemo一个组件进入和离开时的动画
export default class App extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: "center", padding: "30px" }}>
        {/* <CSSTransitionDemo /> */}
        <TransitionGroupDemo />
        {/* <SwitchTransitionDemo /> */}
      </div>
    );
  }
}

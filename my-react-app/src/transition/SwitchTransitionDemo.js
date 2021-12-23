import React, { PureComponent } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./SwitchTransition.less";

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
  }
  render() {
    const { isOn } = this.state;
    return (
      <div>
        {/* mode:in-out先出现再消失  out-in先消失再出现另一个组件 */}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isOn ? "on" : "off"}
            classNames="btn"
            timeout={1000}
          >
            <button onClick={(e) => this.setState({ isOn: !isOn })}>
              {isOn ? "on1" : "off1"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

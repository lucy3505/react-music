import React, { PureComponent } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TransitionGroup.less";

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      names: ["coderwhy", "kbe", "lucy"],
    };
  }
  render() {
    return (
      <TransitionGroup>
        {this.state.names.map((item, index) => {
          // return <div key={index}>{item}</div>;
          return (
            <CSSTransition key={index} timeout={300} classNames="item">
              <div>{item}</div>
            </CSSTransition>
          );
        })}
        <button onClick={(e) => this.addNum()}>+name</button>
      </TransitionGroup>
    );
  }

  addNum() {
    //希望增加元素的时候有动画
    this.setState({
      names: [...this.state.names, "ccc"],
    });
  }
}

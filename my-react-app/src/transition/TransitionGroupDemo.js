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
            <CSSTransition key={`${item}`} timeout={300} classNames="item">
              <div>
                {item}
                <button
                  onClick={(e) => {
                    this.removeItem(index);
                  }}
                >
                  -
                </button>
              </div>
            </CSSTransition>
          );
        })}
        <button onClick={(e) => this.addNum()}>+name</button>
      </TransitionGroup>
    );
  }
  removeItem(index) {
    // const newName = [...this.state.names];
    // newName.splice(index, 1);
    // this.setState({ names: newName });

    this.setState({
      names: this.state.names.filter((item, indexy) => index !== indexy),
    });
  }

  addNum() {
    //希望增加元素的时候有动画
    this.setState({
      names: [...this.state.names, new Date().toString()],
    });
  }
}

import React, { PureComponent } from "react";
export default class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    document.title = this.state.counter;
  }

  componentDidUpdate() {
    document.title = this.state.counter;
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

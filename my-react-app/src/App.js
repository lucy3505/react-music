import React, { Component } from "react";
import ReactDOM from "react-dom";

export class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { increment } = this.props;

    return <button onClick={increment}>+</button>;
  }
}

export class DecreaseBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { decrease } = this.props;

    return <button onClick={decrease}>-</button>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+</button>
        <button onClick={this.decrease}>-</button>
        <AddButton increment={() => this.increment()} />
        <DecreaseBtn decrease={this.decrease} />
      </div>
    );
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
}

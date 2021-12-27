import React, { PureComponent } from "react";
import store from "store";
import { subNum } from "store/actionCreators";
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log(typeof store.getState());
      const counter = store.getState().counter;
      this.setState({ counter });
    });
  }

  componentWillUnmount() {
    this.unsubscribe = null;
  }

  render() {
    return (
      <div>
        <hr />
        <h1>home </h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={(e) => this.decrement()}>-1</button>
        <button onClick={(e) => this.subNumber()}>-5</button>
      </div>
    );
  }

  decrement() {
    store.dispatch(subNum(1));
  }

  subNumber() {
    store.dispatch(subNum(5));
  }
}

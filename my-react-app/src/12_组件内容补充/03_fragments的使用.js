import React, { PureComponent, Fragment } from "react";
import { hydrate } from "react-dom/cjs/react-dom.development";

export default class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      friends: [
        { name: "lucy", age: 22 },
        { name: "b", age: 12 },
        { name: "c", age: 2 },
        { name: "d", age: 23 },
      ],
    };
  }
  render() {
    return (
      // <Fragment>
      //   <h2>当前数字：{this.state.counter}</h2>
      //   <button onClick={(e) => this.increment()}>+1</button>
      // </Fragment>
      //短语法:不能添加任何属性
      <>
        <h2>当前数字：{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        {this.state.friends.map((item, index) => {
          return (
            // <>//这里不能放key,这时候只能用Fragment
            <Fragment key={item.name}>
              <div>{item.name}</div>
              <div>{item.age}</div>
              <hr />
            </Fragment>
            // </>
          );
        })}
      </>
    );
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
}

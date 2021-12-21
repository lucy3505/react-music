import React, { PureComponent, createRef } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
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

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.titleRef = createRef();
    this.titleEl = null;
    this.counterRef = createRef();
  }
  componentDidMount() {
    // document.getElementById  这个方法是可以获得dom的
  }

  render() {
    return (
      <div>
        {/* <h2 ref=字符串/对象/函数>hello rect</h2> */}
        <h2 ref="titleRef">hello rect</h2>
        <h2 ref={this.titleRef}>hello lucy</h2>
        <h2 ref={(args) => (this.titleEl = args)}>hello lucy</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Counter ref={this.counterRef} />
        <button onClick={(e) => this.appBtnClick()}>app 按钮</button>
      </div>
    );
  }

  appBtnClick() {
    //打印出的是组件对象,如果是函数式组件，就没办法拿到实例对象
    console.log(this.counterRef.current);
    //不能在函数式组件使用ref,因为函数式组件是没有实例的
    this.counterRef.current.increment();
  }

  changeText() {
    console.log(this.refs.titleRef);
    //使用方式一：字符串形式,不推荐，后续可能删除
    this.refs.titleRef.innerHTML = "hello";

    //使用方式二：对象方式
    console.log(this.titleRef.current);
    this.titleRef.current.innerHTML = "lucy";

    //方式三：函数方式
    console.log(this.titleEl);
    // this.titleEl
    this.titleEl.innerHTML = "hello";
  }
}

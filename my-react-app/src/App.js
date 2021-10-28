import React, { Component } from "react";
import lifecircle from "./assets/img/2.png";
import lifecircle3 from "./assets/img/3.png";
import "./css/app.scss";

class Cpn extends Component {
  render() {
    return <h1>我是cpn</h1>;
  }

  componentWillUnmount() {
    console.log("调用了cpn的componentWillUnmount方法");
  }
}

class App extends Component {
  constructor(props) {
    /**
     * 如果不初始化state 或不进行方法绑定，则不需要为React 组件实现构造函数。
     * constructor中通常只做两件事情：
     * 通过给this.state赋值对象来初始化内部的state；
     * 为事件绑定实例(this)
     */
    super(props);

    this.state = { counter: 1, isShow: true };

    console.log("执行了组件的constructor");
  }

  componentDidMount() {
    /**
     * componentDidMount()会在组件挂载后（插入DOM树中）立即调用。
     * componentDidMount中通常进行哪里操作呢？
     * 1.依赖于DOM的操作可以在这里进行；
      2.在此处发送网络请求就最好的地方；（官方建议）
      3.可以在此处添加一些订阅（会在componentWillUnmount取消订阅）；
     *  */

    console.log("执行了组件的componentDiDMount方法");
  }

  componentDidUpdate(previousProps, prevState, snapshot) {
    /**
     * componentDidUpdate()会在更新后会被立即调用，首次渲染不会执行此方法。
     * 1当组件更新后，可以在此处对DOM进行操作；
       2如果你对更新前后的props 进行了比较，也可以选择在此处进行网络请求；（例如，当props 未发生变化时，则不会执行网络请求）。
     * 
     * 
     */
    console.log("执行了组件的componentDidUpdate");
  }
  render() {
    console.log("执行了组件的render函数 ");
    return (
      <div>
        <img src={lifecircle} />
        <img src={lifecircle3} />

        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.switch()}>switch</button>

        <hr />
        {this.state.isShow && <Cpn />}
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  switch() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
}

export default App;

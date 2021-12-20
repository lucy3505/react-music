import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "hello world" };
  }
  render() {
    return (
      <div>
        <h2>当前文本：{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }
  changeText() {
    //异步更新
    this.setState({ message: "你好啊" }, () => {
      console.log(this.state.message);
    });
    console.log(this.state.message); //"hello world"
  }
}
//setState设计为异步，可以显示提升性能：
/**
 * 1.如果背刺调用setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率很低。
 * 2.最好的办法应该是获取到多个更新，之后进行普亮更新；
 * 如果同步更新了state,但是还没有执行render函数，那么state和props不能保持同步l
 * state和props不能保持一致性，会在开发中产生很多的问题
 * https://github.com/facebook/react/issues/11527#issuecomment-360199710
 *
 *
 */

/**
 * 获取异步更新后的数据
 * this.setState(()=>{return()=>{}})
 * 方式二：获取异步更新后的数据,更新成功后先执行的是componentDidUpdate,后执行setState的回调
 * componentDidUpdate(){}
 */

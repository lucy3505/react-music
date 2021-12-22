import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  render() {
    const pStyle = {
      color: this.state.color,
      textDecoration: "underline",
    };
    return (
      <div>
        <h2 style={{ fontSize: "50px" }}>title</h2>
        <p style={pStyle}>我是一段文字</p>
      </div>
    );
  }
}
// 内联样式是官方推荐的一种css样式的写法：  style 接受一个采用小驼峰命名属性的 JavaScript 对象，，而不是 CSS 字符串；  并且可以引用state中的状态来设置相关的样式；
//  内联样式的优点:
//  1.内联样式, 样式之间不会有冲突
//  2.可以动态获取当前state中的状态
//  内联样式的缺点：
// 1.写法上都需要使用驼峰标识
// 2.某些样式没有提示
//  3.大量的样式, 代码混乱
//  4.某些样式无法编写(比如伪类/伪元素) n 所以官方依然是希望内联合适和普通的css来结合编写；

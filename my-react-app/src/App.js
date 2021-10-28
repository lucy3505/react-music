import React, { Component } from "react";
import lifecircle from "./assets/img/2.png";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("执行了组件的constructor");
  }

  componentDidMount() {
    console.log("执行了组件的componentDiDMount方法");
  }

  render() {
    console.log("执行了组件的render函数 ");
    return (
      <div>
        <img src={lifecircle} />
        <p>我是app组件</p>
      </div>
    );
  }
}

export default App;

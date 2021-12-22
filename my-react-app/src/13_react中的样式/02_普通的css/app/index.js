import React, { PureComponent } from "react";
import Home from "../home";
import Profile from "../profile";
import "./app.css";
export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className="title">我是Profile的标题</h2>
        <Home />
        <Profile />
      </div>
    );
  }
}

// 普通的css我们通常会编写到一个单独的文件，之后再进行引入。这样的编写方式和普通的网页开发中编写方式是一致的：
// 如果我们按照普通的网页标准去编写，那么也不会有太大的问题； 但是组件化开发中我们总是希望组件是一个独立的模块，即便是样式也只是在自己内部生效，不会相互影响； 但是普通的css都属于全局的css，样式之间会相互影响； 这种编写方式最大的问题是样式之间会相互层叠掉；

import React, { PureComponent } from "react";
import Home from "../home";
import Profile from "../profile";
import appStyle from "./style.module.css";
export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className={appStyle.title}>我是Profile的标题</h2>
        <Home />
        <Profile />
      </div>
    );
  }
}

// css modules并不是React特有的解决方案，而是所有使用了类似于webpack配置的环境下都可以使用的。
//  但是，如果在其他项目中使用个，那么我们需要自己来进行配置，比如配置webpack.config.js中的modules: true等。
//  React的脚手架已经内置了css modules的配置：
// .css/.less/.scss 等样式文件都修改成 .module.css/.module.less/.module.scss 等；
// 之后就可以引用并且进行使用了；
//  css modules确实解决了局部作用域的问题，也是很多人喜欢在React中使用的一种方案。
//  但是这种方案也有自己的缺陷： 引用的类名，不能使用连接符(.home-title)，在JavaScript中是不识别的；
//  所有的className都必须使用{style.className} 的形式来编写；
//  不方便动态来修改某些样式，依然需要使用内联样式的方式；  如果你觉得上面的缺陷还算OK，那么你在开发中完全可以选择使用css modules来编写，并且也是在React中很受欢迎的一种方式。
//

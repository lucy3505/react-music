import React, { PureComponent } from "react";
//这个函数返回的是一个react组件,且这个组件是div的，style.span就是组件是span的
import { HomeWrapper, TitleWrapper } from "./style";

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>我是Home的标题</TitleWrapper>
        <div className="banner">
          <span className="active">轮播图1</span>
          <span>轮播图2</span>
          <span>轮播图3</span>
        </div>
      </HomeWrapper>
    );
  }
}

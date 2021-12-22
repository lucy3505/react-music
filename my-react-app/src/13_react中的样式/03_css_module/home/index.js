import React, { PureComponent } from "react";
import style from "./style.module.css";
export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={style.title}>我是Home的标题</h2>
        <div className="banner">
          <span>轮播图</span>
        </div>
      </div>
    );
  }
}

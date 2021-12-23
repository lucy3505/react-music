import React from "react";
import ReactDOM from "react-dom";
import "moment/locale/zh-cn"; //变成中文显示
import App from "./comment/App";
import "antd/dist/antd.less";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "moment/locale/zh-cn"; //变成中文显示
import App from "./App";
import "antd/dist/antd.less";
import axios from "axios";

axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;
axios.defaults.headers.common["token"] = "ddd";
axios.defaults.headers.post["Content-Type"] = "application/text";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

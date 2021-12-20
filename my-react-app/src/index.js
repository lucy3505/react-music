import React from "react";
import ReactDOM from "react-dom";

import App from "./08_React性能优化/02_组件嵌套的render调用";
// import "../src/4组件通信案例/style.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

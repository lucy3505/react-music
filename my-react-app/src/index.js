import React from "react";
import ReactDOM from "react-dom";

import App from "./11_高阶组件的使用/06_高阶组件应用-生命周期劫持";

ReactDOM.render(
  <React.StrictMode>
    <App name="who" />
  </React.StrictMode>,
  document.getElementById("root")
);

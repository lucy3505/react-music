import React, { PureComponent } from "react";
import reactDom from "react-dom";

class Modal extends PureComponent {
  render() {
    return reactDom.createPortal(
      this.props.children,
      document.getElementById("modal")
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>home</h2>
        <Modal>
          <h2>title</h2>
        </Modal>
      </div>
    );
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

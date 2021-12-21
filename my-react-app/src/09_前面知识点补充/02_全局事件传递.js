import React, { PureComponent } from "react";

import { EventEmitter } from "events";
//事件总线:eventBus

const eventBus = new EventEmitter();
class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }

  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }

  handleSayHelloListener(message, num) {
    console.log(message, num);
  }

  render() {
    return <div>Home</div>;
  }
}
class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={(e) => this.emitEvent()}>点击了profile按钮</button>
      </div>
    );
  }

  emitEvent() {
    console.log(11);
    eventBus.emit("sayHello", "hello home", 123);
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}

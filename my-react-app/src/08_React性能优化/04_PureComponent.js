import React, { PureComponent } from "react";

function Header() {
  console.log("Header");
  return <h2>header</h2>;
}

class Banner extends PureComponent {
  render() {
    console.log("banner render被调用");
    return <h3>banner</h3>;
  }
}
function ProductList() {
  console.log("ProductList");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
}

class Main extends PureComponent {
  render() {
    console.log("Main render被调用");

    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

function Footer() {
  console.log("Footer");

  return <div>footer</div>;
}
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0, message: "hello world" };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  // //可以使用PureComponent代替shouldComponentUpdate
  // shouldComponentUpdate(nextProps, nextState) {
  //   // return false;
  //   if (this.state.count !== nextState.count) {
  //     return true;
  //   }
  //   return false;
  // }

  changeText() {
    this.setState({
      message: "你好啊",
    });
  }

  render() {
    console.log("App render被调用");

    return (
      <div>
        <h2>count:{this.state.count}</h2>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

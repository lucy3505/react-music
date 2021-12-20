import React, { Component } from "react";

function Header() {
  console.log("Header");
  return <h2>header</h2>;
}

class Banner extends Component {
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

class Main extends Component {
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
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("App render被调用");

    return (
      <div>
        <h2>count:{this.state.count}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

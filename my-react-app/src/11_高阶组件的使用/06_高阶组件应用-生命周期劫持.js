import React, { PureComponent } from "react";

function withRenderTime(WrappedComponent) {
  class NewComponent extends PureComponent {
    componentWillMount() {
      this.beginTime = Date.now();
    }

    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrappedComponent.name}渲染时间:${interval}`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return NewComponent;
}

class Home extends PureComponent {
  //即将渲染获取时间
  // componentWillMount() {
  //   this.beginTime = Date.now();
  // }

  // //渲染完成时间
  // componentDidMount() {
  //   this.endTime = Date.now();
  //   const interval = this.endTime - this.beginTime;
  //   console.log(`about渲染时间:${interval}`);
  // }

  render() {
    return <h2>Home</h2>;
  }
}
const EhanceHome = withRenderTime(Home);

class About extends PureComponent {
  render() {
    return <h2>About</h2>;
  }
}
const EhanceAbout = withRenderTime(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EhanceHome />
        <EhanceAbout />
      </div>
    );
  }
}

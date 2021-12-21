import React, { PureComponent } from "react";

//定义一个高阶组件
function enhenceRegionProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="china" />;
  };
}

class Home extends PureComponent {
  render() {
    return (
      <h2>
        home:
        {`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}
      </h2>
    );
  }
}

// export default enhanceRegionProps(Home)
const EnhanceHome = enhenceRegionProps(Home);

class About extends PureComponent {
  render() {
    return (
      <h2>
        about:
        {`昵称：${this.props.nickname} 等级：${this.props.level} 区域： ${this.props.region}`}
      </h2>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome nickname="coderwhy" level={90} />
        <About nickname="coderwhy" level={90} />
      </div>
    );
  }
}

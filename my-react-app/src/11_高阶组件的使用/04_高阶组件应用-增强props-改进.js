import React, { PureComponent, createContext } from "react";

//使用context获得数据共享
const UserContext = createContext({
  nickname: "默认",
  level: 0,
  region: "china",
});

//定义一个高阶组件
function withUser(WrappedComponent) {
  return (props) => (
    <UserContext.Consumer>
      {(user) => {
        return <WrappedComponent {...props} {...user} />;
      }}
    </UserContext.Consumer>
  );
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
const EnhanceHome = withUser(Home);

// export default enhanceRegionProps(Home)

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
const UserAbout = withUser(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider
          value={{ nickname: "tom", level: 88, region: "chinese" }}
        >
          <EnhanceHome />
          <UserAbout />
        </UserContext.Provider>
      </div>
    );
  }
}

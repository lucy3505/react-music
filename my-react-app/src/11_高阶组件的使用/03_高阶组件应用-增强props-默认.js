import React, { PureComponent, createContext } from "react";

//使用context获得数据共享
const UserContext = createContext({
  nickname: "默认",
  level: 0,
  region: "china",
});

class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2>
              home:
              {`昵称：${user.nickname} 等级：${user.level} 区域：${user.region}`}
            </h2>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

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

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider
          value={{ nickname: "tom", level: 88, region: "chinese" }}
        >
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    );
  }
}

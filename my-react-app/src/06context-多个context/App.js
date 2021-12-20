import React, { Component } from "react";

//创建context对象
const UserContext = React.createContext({
  nickname: "aa",
  level: -1,
});

const ThemeContext = React.createContext({
  color: "green",
});

//class组件的使用方法：class组件会有一个context对象
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(v) => (
        <ThemeContext.Consumer>
          {(theme) => (
            <div>
              <h2>用户昵称：{v.nickname}</h2>
              <h2>
                用户等级：
                {v.level}
              </h2>
              <h2>颜色:{theme.color}</h2>
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}

// ProfileHeader.contextType = UserContext;

function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} level={props.level} /> */}
      <ProfileHeader {...props} />
      <ul>
        <li>设置</li>
        <li>设置</li>
        <li>设置</li>
        <li>设置</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "coderwhy",
      level: 99,
    };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider
            value={{ color: "red" }}
          ></ThemeContext.Provider>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}

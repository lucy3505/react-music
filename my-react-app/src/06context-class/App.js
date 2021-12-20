import React, { Component } from "react";

//创建context对象
const UserContext = React.createContext({
  nickname: "aa",
  level: -1,
});

//class组件的使用方法：class组件会有一个context对象
class ProfileHeader extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>用户昵称：{this.context.nickname}</h2>
        <h2>
          用户等级：
          {this.context.level}
        </h2>
      </div>
    );
  }
}
ProfileHeader.contextType = UserContext;

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
        <UserContext.Provider value={this.state}></UserContext.Provider>
        <Profile />
      </div>
    );
  }
}

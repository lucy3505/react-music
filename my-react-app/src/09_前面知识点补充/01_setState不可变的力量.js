import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: "lili", age: 11 },
        { name: "anni", age: 12 },
        { name: "bobo", age: 13 },
      ],
    };
  }

  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.friends !== this.state.friends) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    return (
      <div>
        <h2>好友列表：</h2>
        <ul>
          {this.state.friends.map((friend, index) => (
            <li key={friend.name}>
              姓名：{friend.name}； 年龄：{friend.age}
              <button onClick={(e) => this.changeAge(index)}>age+1</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.insertData()}>添加数据</button>
      </div>
    );
  }

  insertData() {
    console.log("add data");
    //1.在开发中不要这么做,会影响shouldComponentUpdate性能优化
    const newData = { name: "tom", age: 22 };
    // this.state.friends.push(newData);
    //  this.setState({ friends: this.state.friends });

    //2.推荐做法
    const newFriend = [...this.state.friends, newData];
    this.setState({ friends: newFriend });
  }

  changeAge(index) {
    //使用Component没有性能优化的时候这样做不会有问题，但是用PureComponent会有问题
    // this.state.friends[index].age += 1;
    // this.setState({ friends: this.state.friends });

    const newFriend = [...this.state.friends];
    newFriend[index].age += 1;
    this.setState({ friends: newFriend });
  }
}

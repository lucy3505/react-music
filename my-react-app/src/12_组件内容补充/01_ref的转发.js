import React, { forwardRef, PureComponent } from "react";
import { createRef } from "react/cjs/react.development";

class Home extends PureComponent {
  render() {
    return <div>home</div>;
  }
}

// function Profile(props) {
//   console.log(props.name);
//   //react不会把ref放到props上，所以这个方法行不通
//   return <h2 ref={props.ref}>Profile</h2>;
// }

//高阶组件forwardRef
const Profile = forwardRef(function (props, ref) {
  console.log(props.name);
  return <h2 ref={ref}>Profile</h2>;
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>hello world</h2>
        <Home ref={this.homeRef} />
        {/* 函数式组件不能使用ref */}
        <Profile ref={this.profileRef} name="profile" />
        <button onClick={(e) => this.handleClick(e)}>click</button>
      </div>
    );
  }
  handleClick() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}

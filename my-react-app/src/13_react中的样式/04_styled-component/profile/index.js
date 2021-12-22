import React, { PureComponent } from "react";
import styled from "styled-components";

/**
 * 特点：
 * 1.props穿透
 * 2.attrs的使用
 * 3、传入state作为props的属性
 *
 * */
// const HYInput = styled.input`
//   background-color: lightblue;
// `;
const HYInput = styled.input.attrs({ placeholder: "coderwhy", bColor: "red" })`
  background-color: lightblue;
  border-color: ${(props) => props.bColor};
  color: ${(props) => props.color};
`;

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "orange",
    };
  }
  render() {
    return (
      <div className="profile">
        <input type="password" />
        <hr />
        <HYInput type="text" color={this.state.color} />
        <h2>我是Profile的标题</h2>
        <ul className="setting">
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}

import React, { PureComponent } from "react";
import Home from "../home";
import Profile from "../profile";
import styled, { ThemeProvider } from "styled-components";

const HYButton = styled.button`
  padding: 10px 20px;
  color: red;
  border-color: red;
`;

// const HYPrimaryButton = styled.button`
//   padding: 10px 20px;
//   color: green;
//   background-color: lightblue;
// `;

//继承
const HYPrimaryButton = styled(HYButton)`
  padding: 10px 20px;
  color: green;
  background-color: lightblue;
`;

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2>我是Profile的标题</h2>
        <ThemeProvider theme={{ themeColor: "yellow", fontSize: "20px" }}>
          <Home />
          <Profile />
          <HYButton>button</HYButton>
          <HYPrimaryButton>primary button</HYPrimaryButton>
        </ThemeProvider>
      </div>
    );
  }
}

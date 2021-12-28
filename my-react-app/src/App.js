import React, { PureComponent } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about";
import User from "./pages/user";
import NoMatch from "./pages/noMatch";
import "./app.css";
import { connect } from "react-redux";
import classnames from "classnames";
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      links: [
        { to: "/", title: "首页" },
        { to: "/about", title: "关于" },
        { to: "/profile", title: "我的" },
        { to: "/user", title: "用户" },
      ],
      currentIndex: 0,
    };
  }

  handleClick(currentIndex) {
    this.setState({ currentIndex });
  }

  render() {
    if (this.props.isLogin) {
      return <Navigate to="/login" />;
    }
    return (
      <div>
        {/* <BrowserRouter> */}
        {/* {this.state.links.map((link, index) => (
            <div
              key={link.to}
              className={classnames({
                active: index === this.state.currentIndex,
              })}
              onClick={(e) => {
                this.handleClick(index);
              }}
            >
              <Link to={link.to}>{link.title}</Link>
            </div>
          ))} */}
        {this.state.links.map((link) => (
          <NavLink
            key={link.title}
            to={link.to}
            // style={({ isActive }) => {
            //   return {
            //     color: isActive ? "link-active" : "",
            //   };
            // }}
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            {link.title}
          </NavLink>
        ))}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/:id" element={<NoMatch />} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginInfo.isLogin,
});
export default connect(mapStateToProps, null)(App);

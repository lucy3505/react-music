import React, { PureComponent } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import About from "./pages/about/about";
import User from "./pages/user";
import NoMatch from "./pages/noMatch";
import Detail from "./pages/detail";
import Detail2 from "./pages/detail2";
import Detail3 from "./pages/detail3";
import "./app.css";
import { connect } from "react-redux";
import classnames from "classnames";
import { Culture, History, Contact, Join } from "@/pages/about/about.js";
import { renderRoutes } from "react-router-config";
import { routes } from "./router/index";
class App extends PureComponent {
  constructor(props) {
    super(props);
    const id = "123";
    const info = { name: "why", age: 12 };
    this.state = {
      isLogin: false,
      links: [
        { to: "/", title: "首页", exact: true },
        { to: "/about", title: "关于" },
        { to: "/profile", title: "我的" },
        { to: "/user", title: "用户" },
        { to: `/detail/${info}`, title: "详情" },
        { to: `/detail2?name=why&age=18`, title: "详情2" },
        {
          to: { pathname: "/detail3", search: "?name=why", state: info },
          title: "详情3",
        },
      ],
      currentIndex: 0,
    };
  }

  handleClick(currentIndex) {
    this.setState({ currentIndex });
  }

  render() {
    const id = "abc";
    // if (!this.props.isLogin) {
    //   return <Navigate to="/login" />;
    // }
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

            activeClassName="link-active"
            exact={link.exact}
          >
            {link.title}
          </NavLink>
        ))}

        {/* <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />

          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path={`/detail/:id`} component={Detail} />
          <Route path={`/detail2`} component={Detail2} />
          <Route path={`/detail3`} component={Detail3} />
          <Route component={NoMatch} />
        </Switch> */}
        {/* </BrowserRouter> */}
        {renderRoutes(routes)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginInfo.isLogin,
});
export default connect(mapStateToProps, null)(App);

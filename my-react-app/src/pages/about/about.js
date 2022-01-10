import React, { PureComponent } from "react";
import { NavLink, Switch, Route, Outlet, useNavigate } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";

export function Culture() {
  return <div>culture</div>;
}
export function History() {
  return <div>History</div>;
}
export function Contact() {
  return <div>Contact</div>;
}
export function Join() {
  return <div>Join</div>;
}
export default function About(props) {
  console.log(props.route);
  const branch = matchRoutes(props.route.routes, "/about");
  console.log(branch);
  // const navigate = useNavigate();
  const links = [
    { title: "企业历史", to: "/about" },
    { title: "企业文化", to: "/about/culture" },
    { title: "联系我们", to: "/about/contact" },
  ];

  const jumpToJoin = () => {
    // navigate("join");
    console.log(props.history);
    console.log(props.location);
    console.log(props.match);

    props.history.push("/about/join");
  };

  return (
    <div>
      {links.map((link) => (
        <NavLink
          exact
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? "about-link-active" : "about-link"
          }
          activeClassName="about-link-active"
        >
          {link.title}
        </NavLink>
      ))}{" "}
      <button
        onClick={(e) => {
          jumpToJoin(e);
        }}
      >
        join us
      </button>
      {/* <Outlet /> */}
      {/* <Switch>
        {" "}
        <Route path="/about" component={History} exact />
        <Route path="/about/culture" component={Culture} />
        <Route component={Contact} path="/about/contact" />
        <Route component={Join} path="/about/join" />
      </Switch> */}
      {renderRoutes(props.route.routes)}
    </div>
  );
}

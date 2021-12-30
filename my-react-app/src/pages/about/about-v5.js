import React, { PureComponent } from "react";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";

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
  return <div>join</div>;
}
export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { title: "企业历史", to: "/about" },
        { title: "企业文化", to: "culture" },
        { title: "联系我们", to: "/about/contact" },
      ],
    };
  }
  jumpToJoin() {
    console.log(this.props.history);
    //{length:""，action:"pop",location:{},createHref}

    console.log(this.props.location);
    //{pathname:"",search:"",hash:"",state:"",key:""}
    console.log(this.props.match);
    //path:"/about",url:"/about",isExact:true,params:{}
    this.props.history.push("/about/join");
  }
  render() {
    return (
      <div>
        {this.state.links.map((link) => (
          <NavLink
            exact
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "about-link-active" : "about-link"
            }
          >
            {link.title}
          </NavLink>
        ))}{" "}
        <button
          onClick={(e) => {
            this.jumpToJoin(e);
          }}
        >
          join us
        </button>
        <Outlet />
        {/* <Routes>
          <Route path="culture" element={<Culture />} />
          <Route path="/" element={<History />} />
          <Route element={<Contact />} path="/about/contact" />
        </Routes> */}
      </div>
    );
  }
}

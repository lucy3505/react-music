import React, { PureComponent } from "react";
import { NavLink, Routes, Route, Outlet, useNavigate } from "react-router-dom";

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
export default function About() {
  const navigate = useNavigate();
  const links = [
    { title: "企业历史", to: "/about" },
    { title: "企业文化", to: "culture" },
    { title: "联系我们", to: "/about/contact" },
  ];

  const jumpToJoin = () => {
    navigate("join");
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
      <Outlet />
      {/* <Routes>
          <Route path="culture" element={<Culture />} />
          <Route path="/" element={<History />} />
          <Route element={<Contact />} path="/about/contact" />
        </Routes> */}
    </div>
  );
}

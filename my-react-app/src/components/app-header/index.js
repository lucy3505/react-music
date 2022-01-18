import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import { headerLinks } from "../../common/local-data";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default memo(function YYAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="arrow"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => (
              <div key={item.title} className="select-item">
                {showSelectItem(item, index)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            placeholder="音乐音乐音乐音乐音乐音乐"
            prefix={<SearchOutlined />}
            className="search"
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

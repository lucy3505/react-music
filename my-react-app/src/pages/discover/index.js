import React, { memo } from "react";
import { DiscoverWrapper, TopMenu } from "./style";
import { NavLink } from "react-router-dom";

import { discoverMenu } from "@/common/local-data.js";
import { renderRoutes } from "react-router-config";

export default memo(function Discover(props) {
  debugger;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <div className="item">
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  );
});

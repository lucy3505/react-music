import React, { memo } from "react";
import { SongLeft, SongRight, SongWrapper } from "./style";

export default memo(function Song() {
  return (
    <SongWrapper className="wrap-v2">
      <SongLeft>playinfo</SongLeft>
      <SongRight></SongRight>
    </SongWrapper>
  );
});

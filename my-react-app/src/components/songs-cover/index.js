import React, { memo } from "react";
import { SongCoverWrap } from "./style";

export default memo(function SongCover(props) {
  return (
    <SongCoverWrap>
      <div className="cover-top">
        <img src={props.picUrl} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji" />
              <span>{props.playCount}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{props.name}</div>
      <div className="cover-source">by {props.copywriter}</div>
    </SongCoverWrap>
  );
});

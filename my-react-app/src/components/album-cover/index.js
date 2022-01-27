import React, { memo } from "react";
import { AlbumCoverWrap } from "./style";

export default memo(function AlbumCover(props) {
  const { size = 100, width = 118, bgp = "-845px" } = props;
  return (
    <AlbumCoverWrap size={size} width={width} bgp={bgp}>
      <div className="album_image">
        <img src={props.coverUrl} />
        <a href="#" className="cover sprite_cover">
          摩天轮
        </a>
      </div>
      <div className="album_info">
        <div className="name text-nowrap">{props.albumName}</div>
        <div className="artist">{props.artistName}</div>
      </div>
    </AlbumCoverWrap>
  );
});

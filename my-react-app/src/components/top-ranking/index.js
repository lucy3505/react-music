import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { getSongDetailAction } from "@/pages/player/store";
import { TopRankingWrapper } from "./style";

export default memo(function TopRanking(props) {
  const { tracks = [], coverImgUrl, name } = props;
  const dispatch = useDispatch();

  const handlePlay = (item) => {
    dispatch(getSongDetailAction(item.id));
  };
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={coverImgUrl} />
        </div>
        <div className="info">
          <a href="/todo">{name}</a>

          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => (
          <div className="list-item" key={item.id}>
            <div className="rank">{index + 1}</div>
            <div className="info">
              <span className="name text-nowrap">{item.name}</span>
              <span className="operate">
                <button
                  className="sprite_02 play btn"
                  onClick={(e) => {
                    handlePlay(item);
                  }}
                ></button>
                <button className="sprite_icon2 addTo btn"></button>
                <button className="sprite_02  favor btn"></button>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <a href="/todo">查看全部></a>
      </div>
    </TopRankingWrapper>
  );
});

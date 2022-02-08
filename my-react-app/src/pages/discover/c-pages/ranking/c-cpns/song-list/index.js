import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { SongListWrapper } from "./style";
import { formatDate } from "@/utils/format-utils.js";
import { getSongDetailAction } from "@/pages/player/store";

export default memo(function SongList() {
  const { currentRanking } = useSelector(
    (state) => ({
      currentRanking: state.getIn(["ranking", "currentRanking"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const { playCount = 0, tracks = [] } = currentRanking;
  const handlePlay = (item) => {
    dispatch(getSongDetailAction(item.id));
  };
  return (
    <SongListWrapper>
      <header>
        <div className="title-left">
          歌曲列表<span>{tracks.length}首歌</span>
        </div>
        <div className="title-right">
          播放：<span className="times">{playCount}</span>次
        </div>
      </header>
      <div className="list">
        <table>
          <thead>
            <th className="white"></th>
            <th className="title">标题</th>
            <th className="duration">时长</th>
            <th className="singer">歌手</th>
          </thead>
          <tbody>
            {tracks?.map((item, idx) => (
              <tr key={item.id}>
                <td>
                  <div className="rank-num">
                    <span className="num">{idx + 1}</span>
                    <i className="sprite_icon2"></i>
                  </div>
                </td>
                <td className="rank-title">
                  <i className=""></i>
                  <div>{item.name}</div>
                </td>
                <td>
                  <span className="dt">{formatDate(item.dt, "mm:ss")}</span>{" "}
                  <span className="operate">
                    <button
                      className="sprite_02 play btn"
                      onClick={(e) => {
                        handlePlay(item);
                        // console.log(e);
                      }}
                    ></button>
                    <button className="sprite_icon2 addTo btn"></button>
                    <button className="sprite_02  favor btn"></button>
                  </span>
                </td>
                <td>{item.ar && item.ar[0].name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SongListWrapper>
  );
});

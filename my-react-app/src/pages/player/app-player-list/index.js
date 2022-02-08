import React, { memo, useRef, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { formatDate } from "@/utils/format-utils.js";
import {
  PlayerListWrapper,
  PlayerListHead,
  PlayerListContent,
  PlayerListLeft,
  PlayerListRight,
} from "./style";
import { getSongDetailAction } from "../store";

export default memo(function PlayerList() {
  const { playList, currentSong, lyricList, lyricIndex } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
      currentSong: state.getIn(["player", "currentSong"]),
      lyricList: state.getIn(["player", "lyricList"]),
      lyricIndex: state.getIn(["player", "lyricIndex"]),
    }),
    shallowEqual
  );

  const lrcRef = useRef();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getSongDetailAction(id));
  };

  useEffect(() => {
    console.log(lrcRef.current);
    if (lyricIndex < 3) {
      return;
    } else {
      lrcRef.current.scrollTop = (lyricIndex - 3) * 30 + 20;
    }

    // const scrollTop = lrcRef.current.scrollTop;
    // lrcRef.current.scrollTop = 30;
  }, [lyricIndex]);

  return (
    <PlayerListWrapper>
      <PlayerListHead>
        <div className="left">
          <h3>播放列表({playList.length})</h3>
          <div className="operator">
            <button>
              <i className="sprite_playlist icon favor"></i>收藏全部
            </button>
            <button>
              <i className="sprite_playlist icon remove"></i>清除
            </button>
          </div>
        </div>
        <div className="right">
          <h3>{currentSong.name}</h3>
        </div>
      </PlayerListHead>
      <PlayerListContent>
        <img
          src={`${currentSong?.al?.picUrl}?imageView&blur=40x20`}
          className="imgbg"
        ></img>
        <PlayerListLeft>
          {playList.map((item) => {
            const artist = item?.ar[0].name;
            const dt = formatDate(item.dt, "mm:ss");
            const isActive = item.id === currentSong.id;
            return (
              <div
                key={item.id}
                className={`player-item ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  handleClick(item.id);
                }}
              >
                <div className="player-item-left">{item.name}</div>
                <div className="player-item-right">
                  <div className="artist">{artist}</div>
                  <div className="duration">{dt}</div>
                </div>
              </div>
            );
          })}
        </PlayerListLeft>
        <PlayerListRight>
          <div className="content" ref={lrcRef}>
            {lyricList.map((item, index) => (
              <div
                key={item.time}
                className={`line ${lyricIndex === index ? "active" : ""}`}
              >
                {item.content}
              </div>
            ))}
          </div>
        </PlayerListRight>
      </PlayerListContent>
    </PlayerListWrapper>
  );
});

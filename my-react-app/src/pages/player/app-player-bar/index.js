import { Slider } from "antd";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getSongDetailAction,
  changeCurrentIndexAndSong,
  changeSequenceAction,
} from "../store/actionCreators";

import {
  PlayerBarWrapper,
  PlayerContentWrapper,
  PlayerLeftWrapper,
  PlayerRightWrapper,
} from "./style";
import { getSizeImage, formatDate, getPlayUrl } from "@/utils/format-utils.js";
import { NavLink } from "react-router-dom";

export default memo(function PlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  const dispatch = useDispatch();
  const { currentSong, sequence, playList } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      sequence: state.getIn(["player", "sequence"]),
      playList: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );
  console.log("currentSong", currentSong);

  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  const audioRef = useRef();

  const playMusic = useCallback(() => {
    // audioRef.current.src = getPlayUrl(id);
    // const playing = isPlay ? false : true;

    !isPlay ? audioRef.current.play() : audioRef.current.pause();
    setIsPlay(!isPlay);
  }, [isPlay]);

  const timeUpdate = (e) => {
    if (!isChanging) {
      const currentTime = e.target.currentTime;
      const res = formatDate(currentTime * 1000, "mm:ss");
      console.log("res", res);
      setCurrentTime(res);
      const progress = ((currentTime * 1000) / dt) * 100;
      setProgress(progress);
    }

    // console.log("timeUpdate", current);
  };

  const {
    al: { picUrl = "", name = "未知歌手" } = {},
    ar = [],
    dt = 0,
  } = currentSong;
  const durationTime = formatDate(dt, "mm:ss");

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlay(true);
      })
      .catch((err) => console.log("err", err));
  }, [currentSong]);

  const sliderAfterChange = useCallback(
    (v) => {
      const currentTime = formatDate((dt / 100) * v, "mm:ss");
      setCurrentTime(currentTime);
      setProgress(v);
      audioRef.current.currentTime = ((dt / 100) * v) / 1000;
      setIsChanging(false);

      if (!isPlay) {
        playMusic();
      }
    },
    [dt, isPlay, playMusic]
  );

  const sliderChange = useCallback(
    (v) => {
      setIsChanging(true);
      setProgress(v);
      const currentTime = formatDate((dt / 100) * v, "mm:ss");
      setCurrentTime(currentTime);
    },
    [dt]
  );

  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSong(tag));
  };

  const handleLoop = () => {
    let index = sequence - 1;
    index = index < 0 ? 2 : index;

    dispatch(changeSequenceAction(index));
  };

  const handleMusicEnded = () => {
    if (sequence === 0) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSong(1));
    }
  };

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <PlayerLeftWrapper isPlay={isPlay}>
          <button
            className="sprite_player btn prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_player btn play"
            onClick={playMusic}
          ></button>
          <button
            className="sprite_player btn next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </PlayerLeftWrapper>
        <PlayerContentWrapper>
          <div className="image">
            <NavLink to="/discover/song">
              {" "}
              <img src={getSizeImage(picUrl, 35)} />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <div className="song-name">{ar[0]?.name}</div>
              <div className="singer-name">{name}</div>
            </div>
            <div className="progress">
              <Slider
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
                value={progress}
              />
              <div className="time">
                <div className="now-time">{currentTime}</div>
                <div className="divider">/</div>
                <div className="total-time">{durationTime}</div>
              </div>
            </div>
          </div>
        </PlayerContentWrapper>
        <PlayerRightWrapper sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => handleLoop()}
            ></button>
            <button className="sprite_player btn playlist">
              {playList.length}
            </button>
          </div>
        </PlayerRightWrapper>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={handleMusicEnded}
      ></audio>
    </PlayerBarWrapper>
  );
});

import { getSongDetail } from "@/services/player";
import { getRandomNumber } from "@/utils/format-utils";
import {
  CHANGE_SONG_DETAIL,
  CHANGE_CURRENT_INDEX,
  CHANG_PLAY_LIST,
  CHANGE_SEQUENCE,
} from "./constants";

const changeSongDetail = (song) => {
  return { type: CHANGE_SONG_DETAIL, song };
};

const changeCurrentIndex = (index) => {
  return { type: CHANGE_CURRENT_INDEX, index };
};

const changePlayList = (list) => {
  return { type: CHANG_PLAY_LIST, list };
};

export const changeCurrentIndexAndSong = (tag) => (dispatch, getState) => {
  const playList = getState().getIn(["player", "playList"]);
  let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
  const sequence = getState().getIn(["player", "sequence"]);
  switch (sequence) {
    case 1: //随机播放
      let randomIndex = -1;

      while (currentSongIndex === randomIndex || randomIndex === -1) {
        randomIndex = getRandomNumber(playList.length);
      }
      dispatch(changeCurrentIndex(randomIndex));
      dispatch(changeSongDetail(playList[randomIndex]));
      break;

    default:
      //顺序播放
      currentSongIndex += tag;
      if (currentSongIndex > playList.length - 1) currentSongIndex = 0;
      if (currentSongIndex < 0) currentSongIndex = playList.length - 1;

      dispatch(changeCurrentIndex(currentSongIndex));
      dispatch(changeSongDetail(playList[currentSongIndex]));

      break;
  }
};

export const getSongDetailAction = (id) => async (dispatch, getState) => {
  const playList = getState().getIn(["player", "playList"]);

  const hasIndex = playList.findIndex((item) => item.id === id);
  if (hasIndex !== -1) {
    //歌单里已经有了
    dispatch(changeCurrentIndex(hasIndex));
    dispatch(changeSongDetail(playList[hasIndex]));
  } else {
    //歌单里没有这首歌
    const res = await getSongDetail(id);
    const newPlayList = [...playList, res.songs[0]];
    dispatch(changeSongDetail(res.songs[0]));
    dispatch(changeCurrentIndex(playList.length));
    dispatch(changePlayList(newPlayList));
  }
};

export const changeSequenceAction = (sequence) => ({
  type: CHANGE_SEQUENCE,
  sequence,
});

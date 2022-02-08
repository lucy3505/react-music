import { Map } from "immutable";
import {
  CHANGE_SONG_DETAIL,
  CHANGE_CURRENT_INDEX,
  CHANG_PLAY_LIST,
  CHANGE_SEQUENCE,
  CHANGE_LYRIC_LIST,
  CHANGE_LYRIC_INDEX,
} from "./constants";

const defaultState = Map({
  currentSong: {},
  playList: [],
  currentSongIndex: 0,
  sequence: 2, //2顺序播放，1随机，0循环播放
  lyricList: [],
  lyricIndex: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_SONG_DETAIL:
      return state.set("currentSong", action.song);
    case CHANGE_CURRENT_INDEX:
      return state.set("currentSongIndex", action.index);

    case CHANG_PLAY_LIST:
      return state.set("playList", action.list);
    case CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lrc);
    case CHANGE_LYRIC_INDEX:
      return state.set("lyricIndex", action.index);

    default:
      return state;
  }
}

export default reducer;

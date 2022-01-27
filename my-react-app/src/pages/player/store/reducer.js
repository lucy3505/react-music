import { Map } from "immutable";
import {
  CHANGE_SONG_DETAIL,
  CHANGE_CURRENT_INDEX,
  CHANG_PLAY_LIST,
  CHANGE_SEQUENCE,
} from "./constants";

const defaultState = Map({
  currentSong: {},
  playList: [],
  currentSongIndex: 0,
  sequence: 2, //2顺序播放，1随机，0循环播放
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

    default:
      return state;
  }
}

export default reducer;

import { Map } from "immutable";
import {
  CHANGE_CURRENT_RANKING,
  CHANGE_CURRENT_RANKING_INDEX,
} from "./constants";

const defaultState = Map({
  differentRanking: {},
  currentRanking: {},
  currentRankIndex: 0,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_RANKING:
      return state.set("currentRanking", action.currentRanking);
    case CHANGE_CURRENT_RANKING_INDEX:
      return state.set("currentRankIndex", action.currentRankIndex);
    default:
      return state;
  }
};

export default reducer;

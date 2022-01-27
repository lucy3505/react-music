import {
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUM,
  CHANGE_All_TOP_LISTS,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
} from "./constants";
import { Map } from "immutable";
import { RANKING_ORDER } from "@/common/constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  allTopLists: [],
  upRanking: {},
  upRankingInfo: {},
  newRanking: {},
  newRankingInfo: {},
  originRanking: {},
  originRankingInfo: {},
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TOP_BANNER:
      return state.set("topBanners", action.topBanners);
    case CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case CHANGE_All_TOP_LISTS:
      const { allTopLists } = action;
      const res = state.merge({
        allTopLists: allTopLists,
        upRankingInfo: allTopLists[RANKING_ORDER.upRanking],
        originRankingInfo: allTopLists[RANKING_ORDER.originRanking],
        newRankingInfo: allTopLists[RANKING_ORDER.newRanking],
      });

      return res;

    case CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    default:
      return state;
  }
};

export default reducer;

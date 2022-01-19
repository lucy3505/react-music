import { CHANGE_TOP_BANNER, CHANGE_HOT_RECOMMENDS } from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TOP_BANNER:
      return state.set("topBanners", action.topBanners);
    case CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    default:
      return defaultState;
  }
};

export default reducer;

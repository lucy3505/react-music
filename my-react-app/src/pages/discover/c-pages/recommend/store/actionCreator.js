import { getTopBanner, getHotRecommend } from "@/services/recommend";

import { CHANGE_TOP_BANNER, CHANGE_HOT_RECOMMENDS } from "./constants";

const changeBannerAction = (res) => {
  return {
    type: CHANGE_TOP_BANNER,
    topBanners: res.banners,
  };
};

const changeHotRecommendAction = (res) => {
  return {
    type: CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result,
  };
};

export const getBannerAction = (p) => async (dispatch) => {
  const res = await getTopBanner();
  dispatch(changeBannerAction(res));
};

export const getHotRecommendAction = (limit) => async (dispatch) => {
  const res = await getHotRecommend(limit);
  dispatch(changeHotRecommendAction(res));
};

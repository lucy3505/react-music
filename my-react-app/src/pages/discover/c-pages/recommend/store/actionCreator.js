import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getAllTopLists,
  getTopListById,
} from "@/services/recommend";
import { changeCurrentRanking } from "../../ranking/store/actionCreator";

import {
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUM,
  CHANGE_All_TOP_LISTS,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
} from "./constants";

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

const changeNewAlbumAction = (res) => {
  return {
    type: CHANGE_NEW_ALBUM,
    newAlbums: res.products,
  };
};

export const changeAllTopListsAction = (res) => {
  return {
    type: CHANGE_All_TOP_LISTS,
    allTopLists: res.list,
  };
};

const changeUpRankingAction = (res) => {
  return {
    type: CHANGE_UP_RANKING,
    upRanking: res.playlist,
  };
};

const changeNewRankingAction = (res) => {
  return {
    type: CHANGE_NEW_RANKING,
    newRanking: res.playlist,
  };
};

const changeOriginRankingAction = (res) => {
  return {
    type: CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist,
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

export const getNewAlbumAction = (limit) => async (dispatch) => {
  const res = await getNewAlbum(limit);
  dispatch(changeNewAlbumAction(res));
};

export const getAllTopListsAction = () => async (dispatch) => {
  const res = await getAllTopLists();
  dispatch(changeAllTopListsAction(res));
};

export const getTopListByIdAction = (id, idx) => async (dispatch) => {
  const res = await getTopListById(id);
  switch (idx) {
    case 0:
      dispatch(changeUpRankingAction(res));
      break;
    case 1:
      dispatch(changeNewRankingAction(res));
      break;
    case 2:
      dispatch(changeOriginRankingAction(res));
      break;

    default:
      break;
  }
};

import {
  CHANGE_CURRENT_RANKING,
  CHANGE_CURRENT_RANKING_INDEX,
} from "./constants";
import { getAllTopLists, getTopListById } from "@/services/recommend";
import { changeAllTopListsAction } from "@/pages/discover/c-pages/recommend/store/actionCreator";
export const changeCurrentRanking = (res) => {
  return { type: CHANGE_CURRENT_RANKING, currentRanking: res };
};

export const changeCurrentRankingIndex = (res) => {
  return { type: CHANGE_CURRENT_RANKING_INDEX, currentRankIndex: res };
};

// export const changeCurrentRankingAction = (id) => (dispatch) => {
//   dispatch(changeCurrentRanking());
// };

export const getTopListByIdAction = (id, idx) => async (dispatch) => {
  const res = await getTopListById(id);
  dispatch(changeCurrentRanking(res.playlist));
};

export const getAllTopListsFromRank = () => async (dispatch) => {
  const res = await getAllTopLists();

  dispatch(changeAllTopListsAction(res));
  dispatch(changeCurrentRankingIndex(0));
  dispatch(getTopListByIdAction(res.list[0].id));
};

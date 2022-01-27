import React, { memo, useEffect } from "react";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTopListsAction,
  getTopListByIdAction,
} from "../../store/actionCreator";
import { RANKING_ORDER } from "@/common/constants";
import { TopListWrapper } from "./style";
import TopRanking from "@/components/top-ranking";

export default memo(function RecommendRanking() {
  const dispatch = useDispatch();
  const {
    allTopLists,
    originRankingInfo,
    upRankingInfo,
    newRankingInfo,
    upRanking,
    newRanking,
    originRanking,
  } = useSelector((state) => ({
    allTopLists: state.getIn(["recommend", "allTopLists"]),
    upRankingInfo: state.getIn(["recommend", "upRankingInfo"]),
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRankingInfo: state.getIn(["recommend", "newRankingInfo"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRankingInfo: state.getIn(["recommend", "originRankingInfo"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }));

  useEffect(() => {
    if (allTopLists.length > 0) {
      dispatch(getTopListByIdAction(upRankingInfo.id, RANKING_ORDER.upRanking));
      dispatch(
        getTopListByIdAction(newRankingInfo.id, RANKING_ORDER.newRanking)
      );
      dispatch(
        getTopListByIdAction(originRankingInfo.id, RANKING_ORDER.originRanking)
      );
    }
  }, [allTopLists, dispatch]);

  useEffect(() => {
    dispatch(getAllTopListsAction());
  }, [dispatch]);

  return (
    <TopListWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className="tops">
        <TopRanking
          {...upRankingInfo}
          {...upRanking}
          tracks={upRanking.tracks}
        />
        <TopRanking
          {...newRankingInfo}
          {...newRanking}
          tracks={newRanking.tracks}
        />
        <TopRanking
          {...originRankingInfo}
          {...originRanking}
          tracks={originRanking.tracks}
        />
      </div>
    </TopListWrapper>
  );
});

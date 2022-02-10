import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RankingCover from "@/components/ranking-cover";
import { getAllTopListsFromRank } from "../../store/actionCreator";
import { DRankingWrapper } from "./style";

export default memo(function DifferentRanking() {
  const { allTopLists } = useSelector((state) => ({
    allTopLists: state.getIn(["recommend", "allTopLists"]),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(allTopLists);

    dispatch(getAllTopListsFromRank());
  }, [allTopLists, dispatch]);

  return (
    <DRankingWrapper>
      <h2>云音乐特色榜</h2>
      {allTopLists.slice(0, 4).map((item) => (
        <div key={item.id} className="item-list">
          <RankingCover {...item} />
        </div>
      ))}
      <h2>全球媒体榜</h2>
      {allTopLists.slice(4, allTopLists.length).map((item) => (
        <div key={item.id} className="item-list">
          <RankingCover {...item} />
        </div>
      ))}
    </DRankingWrapper>
  );
});

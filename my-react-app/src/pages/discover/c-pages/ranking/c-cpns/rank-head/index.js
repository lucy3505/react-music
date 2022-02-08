import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { RankHeadWrapper } from "./style";

export default memo(function RankHead() {
  const { currentRankIndex, allTopLists } = useSelector((state) => ({
    currentRankIndex: state.getIn(["ranking", "currentRankIndex"]),
    allTopLists: state.getIn(["recommend", "allTopLists"]),
  }));

  const { coverImgUrl, updateFrequency, name } =
    allTopLists[currentRankIndex] || {};
  return (
    <RankHeadWrapper>
      <div className="head-left-img">
        <img src={coverImgUrl} />
      </div>
      <div className="head-right">
        <h2>{name}</h2>
        <div className="time">{updateFrequency}</div>

        <div className="right-bottom"></div>
      </div>
    </RankHeadWrapper>
  );
});

import React, { memo } from "react";
import { RankingCoverWrapper } from "./style";

export default memo(function RankingCover(props) {
  const { coverImgUrl, updateFrequency, name } = props;

  return (
    <RankingCoverWrapper>
      <img src={coverImgUrl} />
      <div className="right">
        <div className="ranking-text">{name}</div>
        <div className="update-time">{updateFrequency}</div>
      </div>
    </RankingCoverWrapper>
  );
});

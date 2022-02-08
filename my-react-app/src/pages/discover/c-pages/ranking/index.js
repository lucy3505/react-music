import React, { memo } from "react";
import { RankingLeft, RankingRight, RankingWrapper } from "./style";
import DifferentRanking from "./c-cpns/different-ranking";
import RankHead from "./c-cpns/rank-head";
import SongList from "./c-cpns/song-list";

export default memo(function Ranking() {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <DifferentRanking></DifferentRanking>
      </RankingLeft>
      <RankingRight>
        <RankHead></RankHead>
        <SongList></SongList>
      </RankingRight>
    </RankingWrapper>
  );
});

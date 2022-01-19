import React, { memo, useEffect } from "react";
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import HotRecommend from "./c-cpns/hot-recommend";
import RecommendAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
import TopBanner from "./c-cpns/top-banner";
import {
  RecommendLeft,
  RecommendRight,
  RecommendWraper,
  Content,
} from "./style";

function Recommend(props) {
  return (
    <RecommendWraper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <RecommendAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight />
      </Content>
    </RecommendWraper>
  );
}

export default memo(Recommend);

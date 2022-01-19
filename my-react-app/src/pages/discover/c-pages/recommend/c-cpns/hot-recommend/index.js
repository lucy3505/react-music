import React, { memo, useEffect } from "react";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreator";
import { HotRecommendWrapper } from "./style";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";
export default memo(function HotRecommend() {
  const dispatch = useDispatch();

  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="content">
        {hotRecommends.map((item) => (
          <div className="" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </HotRecommendWrapper>
  );
});

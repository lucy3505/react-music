import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { BannerLeft, BannerRight, BannerWrapper, BannerControl } from "./style";
import { Carousel } from "antd";
import { getBannerAction } from "./../../store/actionCreator";

export default memo(function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  // const { topBanners } = useSelector((state) => state.recommend);
  const bannerRef = useRef();

  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.recommend.get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    // props.getBanners();
    dispatch(getBannerAction());
  }, [dispatch]);

  const handleChange = useCallback((from, to) => {
    console.log(to);
    setCurrentIndex(to);
  }, []);

  const bgImage = `${topBanners[currentIndex]?.imageUrl}?imageView&blur=40x20`;
  // const bgImage = `http://p1.music.126.net/qj4n8NyyBGWIuKe9PZAzuA==/109951166943115985.jpg?imageView&blur=40x20`;

  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel
              effect="fade"
              ref={bannerRef}
              beforeChange={handleChange}
              autoplay
            >
              {topBanners.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                );
              })}
            </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button
              className="btn left"
              onClick={(e) => bannerRef.current.prev()}
            ></button>
            <button
              className="btn right"
              onClick={(e) => bannerRef.current.next()}
            ></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  );
});
// const mapStateToProps = (state) => ({
//   bannerList: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: (p) => dispatch(getBannerAction(p)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));

import React, { memo, useEffect, useRef } from "react";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNewAlbumAction } from "./../../store/actionCreator";
import { NewAlbumWrapper } from "./style";
import AlbumCover from "@/components/album-cover";
import { Carousel } from "antd";

export default memo(function RecomendAlbum() {
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  const albumRef = useRef();

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => albumRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel
            dots={false}
            ref={albumRef}
            // beforeChange={handleChange}
            // autoplay
          >
            {[0, 1].map((item, index) => {
              return (
                <div className="album-items" key={index}>
                  {/* <AlbumCover {...item} />*/}
                  {newAlbums.slice(index * 5, 5 * (index + 1)).map((itm) => (
                    <div key={itm.albumId}>
                      <AlbumCover {...itm} />
                    </div>
                  ))}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => albumRef.current.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  );
});

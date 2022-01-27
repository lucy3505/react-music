import styled from "styled-components";

export const AlbumCoverWrap = styled.div`
  /* width: 118px; */
  width: ${(props) => props.width + "px"};

  .album_image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;
    img {
      height: ${(props) => props.size + "px"};
      width: ${(props) => props.size + "px"};
    }
    a {
      position: absolute;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-position: 0 ${(props) => props.bgp + "px"};
    }
  }
`;

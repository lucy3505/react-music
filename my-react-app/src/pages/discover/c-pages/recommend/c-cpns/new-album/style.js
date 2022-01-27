import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  .content {
    margin: 20px 0 37px;
    display: flex;
    align-items: center;
    .album {
      width: 640px;
      height: 150px;
    }
    .album-items {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
    }
    .arrow {
      width: 30px;
      height: 17px;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -260px -75px;
    }
    .arrow-right {
      background-position: -300px -75px;
    }
  }
`;

import styled from "styled-components";

export const SongCoverWrap = styled.div`
  margin: 20px 0;
  width: 140px;
  .cover-top {
    position: relative;
    > img {
      height: 140px;
      width: 140px;
    }
    .cover {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-position: 0 0;
      .info {
        height: 27px;
        padding: 0 10px;
        color: #ccc;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-position: 0 -537px;
        align-items: center;
        .erji {
          margin-right: 5px;
          display: inline-block;
          height: 11px;
          width: 14px;
          background-position: 0 -24px;
        }
        i.play {
          background-position: 0 0;
          display: inline-block;
          height: 16px;
          width: 17px;
        }
      }
    }
  }
`;

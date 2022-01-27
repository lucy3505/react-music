import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  flex: 1;
  .header {
    display: flex;
    margin: 20px 0 0 20px;
    height: 100px;
    .image {
      height: 80px;
      width: 80px;
      position: relative;
      img {
        height: 80px;
        width: 80px;
      }
    }
    .info {
      margin: 5px 0 0 10px;
      a {
        color: #333;
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        height: 22px;
        width: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
        &.play {
          background-position: -267px -205px;
        }
        &.favor {
          background-position: -300px -205px;
        }
      }
    }
  }
  .list {
    .list-item {
      height: 32px;
      display: flex;
      align-items: center;
      :nth-child(-n + 3) {
        .rank {
          color: #c10d0c;
        }
      }
      .rank {
        width: 35px;
        text-align: center;
        margin-left: 10px;
      }
      .info {
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .operate {
          display: none;
        }
        :hover {
          .operate {
            width: 82px;
            align-items: center;
            display: flex;
            .btn {
              height: 17px;
              width: 17px;
              margin-left: 8px;
              cursor: pointer;
            }
            .play {
              background-position: -267px -268px;
            }
            .addTo {
              background-position: 0 -700px;
              position: relative;
              top: 2px;
            }
            .favor {
              background-position: -297px -268px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 32px;
    margin-right: 32px;
    display: flex;
    justify-content: flex-end;
    a {
      line-height: 32px;
    }
  }
`;

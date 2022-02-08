import styled from "styled-components";

export const SongListWrapper = styled.div`
  padding: 0 30px 40px 40px;

  .list {
    table {
      border: 1px solid #d9d9d9;
      th {
        border: 1px solid #ddd;
        background-image: url(${require("@/assets/img/sprite_table.png")});
        height: 24px;
        line-height: 24px;
        text-align: left;
        padding-left: 10px;
      }
      .white {
        width: 78px;
      }
      .title {
        border-width: 1px 0 1px 0;
      }
      .duration {
        width: 91px;
      }
      .singer {
        width: 173px;
      }
      tbody {
        tr:nth-child(2n + 1) {
          background-color: #f7f7f7;
        }
        tr {
          .operate {
            display: none;
          }
          :hover {
            .dt {
              display: none;
            }
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
        td {
          padding: 6px 10px;
        }
      }
    }
    .rank-num {
      /* display: ; */
      .num {
        width: 25px;
        height: 18px;
        color: #999;
      }
      i {
        display: inline-block;
        height: 17px;
        width: 16px;
        background-position: -67px -283px;
        margin-left: 12px;
      }
    }
  }
`;

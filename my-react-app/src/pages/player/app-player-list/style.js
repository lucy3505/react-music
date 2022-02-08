import styled from "styled-components";

export const PlayerListWrapper = styled.div`
  height: 300px;
  width: 986px;
  position: fixed;
  bottom: 46px;
  background-color: #fff;
  left: 50%;
  transform: translateX(-50%);
`;

export const PlayerListHead = styled.div`
  background: url(${require("@/assets/img/playpanel_bg.png")});
  height: 41px;
  display: flex;
  line-height: 41px;

  .left {
    display: flex;
    padding: 0 25px;
    justify-content: space-between;
    width: 553px;
    h3 {
      color: #e2e2e2;
      font-weight: 700;
      font-size: 14px;
    }

    .operator {
      display: flex;
      align-items: center;
      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        background-color: transparent;
        color: #ccc;
        font-size: 12px;
        height: 16px;
      }
      .icon {
        display: inline-block;
        height: 16px;
        width: 16px;
      }
      .favor {
        background-position: -24px 0;
      }
      .remove {
        width: 13px;
        background-position: -51px 0;
      }
    }
  }
  .right {
    display: flex;
    justify-content: center;
    flex: 1;
    h3 {
      font-size: 14px;
      color: #e2e2e2;
    }
  }
`;
export const PlayerListContent = styled.div`
  height: 260px;
  display: flex;
  background: url(${require("@/assets/img/playpanel_bg.png")}) -1014px 0 repeat-y;
  .imgbg {
    position: absolute;
    width: 980px;
    opacity: 0.2;
    overflow: hidden;
  }
`;

export const PlayerListLeft = styled.div`
  z-index: 99;
  width: 553px;
  padding: 5px;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 1px;
    background: #000;
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #868686;
    /* display: none; */
  }

  .player-item {
    cursor: pointer;

    &.active {
      background-color: #000;

      .player-item-left {
        &:before {
          position: relative;
          top: 3px;
          left: -5px;
          display: inline-block;
          content: "";
          height: 13px;
          width: 10px;
          background: url(${require("@/assets/img/playlist_sprite.png")}) -182px
            0;
        }
      }
    }
    display: flex;
    color: #fff;
    padding: 8px 10px 0px;
    justify-content: space-between;

    .player-item-left {
    }
    .player-item-right {
      display: flex;
      .artist {
        width: 80px;
      }
      .duration {
        width: 45px;
      }
    }
  }
`;
export const PlayerListRight = styled.div`
  flex: 1;
  z-index: 99;

  .content {
    padding: 20px 10px;
    height: 260px;
    color: #ccc;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 1px;
      background: ccc;
      display: none;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #868686;
      /* display: none; */
    }
    text-align: center;
    overflow: hidden;
    overflow-y: scroll;
    .line {
      line-height: 30px;
      &.active {
        color: #fff;
        font-weight: 500;
      }
    }
  }
`;

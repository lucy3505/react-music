import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
  height: 52px;
  position: fixed;
  width: 100%;
  bottom: 0;

  background-position: 0 0;
  background-repeat: repeat;
  .content {
    height: 52px;
    display: flex;
    align-items: center;
  }
`;

export const PlayerLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  .btn {
  }
  .prev {
    background-position: 0 -130px;
    width: 28px;
    height: 28px;
  }
  .next {
    background-position: -80px -130px;
    width: 28px;
    height: 28px;
  }
  .play {
    height: 36px;
    width: 36px;
    background-position: 0 ${(props) => (props.isPlay ? `-165px` : `-204px`)};
    margin: 0 8px;
  }
`;

export const PlayerContentWrapper = styled.div`
  width: 642px;
  display: flex;
  .image {
    height: 34px;
    width: 34px;
    border-radius: 5px;
  }
  .info {
    color: #a1a1a1;
    font-size: 12px;
    flex: 1;
    margin-left: 10px;
    .song {
      display: flex;
      color: #e1e1e1;
      .song-name {
      }
      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }
    .progress {
      display: flex;
      align-items: center;
      .ant-slider {
        width: 493px;
        margin: 0;
        .ant-slider-rail {
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
          height: 9px;
        }
        .ant-slider-track {
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
          height: 9px;
        }
        .ant-slider-handle {
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
          height: 22px;
          width: 24px;
          border: none;
          margin-top: -7px;
        }
      }
      .time {
        display: flex;
        margin-left: 15px;
        .now-time {
          color: #fff;
        }
        .divider {
          margin: 0 3px;
        }
        .total-time {
        }
      }
    }
  }
`;

export const PlayerRightWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 5px;
  .left {
    display: flex;
    align-items: center;
    .btn {
      height: 25px;
      width: 25px;
      cursor: pointer;
    }
    .favor {
      background-position: -88px -163px;
    }
    .share {
      background-position: -114px -163px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    background-position: -147px -248px;
    width: 126px;
    margin-left: 15px;
    .btn {
      height: 25px;
      cursor: pointer;
      width: 25px;
    }
    .volume {
      background-position: -2px -248px;
    }
    .loop {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 0:
            return "-66px -344px";

          case 1:
            return "-66px -248px";

          default:
            return "-3px -344px";
        }
      }};
    }
    .playlist {
      background-position: -42px -68px;
      width: 59px;
      padding-left: 18px;
      color: #ccc;
    }
  }
`;

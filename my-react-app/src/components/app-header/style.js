import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: "75px";
  background-color: #242424;

  .content {
    height: 70px;
    background-color: green;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    display: flex;
    line-height: 70px;
    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 40px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url() (${require("@/assets/img/sprite_01.png")});
          background-position: -100px 0;
          top: 20px;
          right: -15px;
        }
      }
    }
  }
`;

export const HeaderRight = styled.div``;

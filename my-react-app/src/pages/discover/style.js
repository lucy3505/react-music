import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #c20c0c;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;

  .item {
    display: flex;
    align-items: center;
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;
      text-decoration: none;
      &:hover,
      &.active {
        background: #9b0909;
        border-radius: 20px;
      }
    }
  }
`;

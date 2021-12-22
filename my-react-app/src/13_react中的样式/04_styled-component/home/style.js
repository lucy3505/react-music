import styled from "styled-components";

export const HomeWrapper = styled.div`
  font-size: 50px;
  color: red;

  .banner {
    background-color: blue;
    span {
      color: white;
      &.active {
        color: red;
      }
      &:hover {
        color: yellow;
      }
      &::after {
        content: "aa";
      }
    }
    /* .active {
      color: red;
    } */
  }
`;

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${(props) => props.theme.themeColor};
`;

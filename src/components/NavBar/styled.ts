import styled from "styled-components";

import { screenSize } from "../../utils/constants";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #4b72b2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  h1 {
    color: white;
    font-size: 1.5rem;
    @media (min-width: ${screenSize.tablet}) {
      font-size: 2rem;
    }
  }
  > ul {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  a {
    font-size: .9rem;
    @media (min-width: ${screenSize.tablet}) {
        font-size: 1.2rem;
      }
    color: white;
    text-decoration: none;
    margin: 0 12px;
    &:hover {
      color: lightgray;
    }
    &.active {
        color: orange;
      }
  }
`;

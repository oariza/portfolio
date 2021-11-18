import styled from "styled-components";

import { screenSize } from "../../utils/constants";

export const FooterContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #4b72b2;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    color: white;
    margin: 0;
    font-size: .8rem;
    @media (min-width: ${screenSize.tablet}) {
      font-size: 1rem;
    }
  }
`;

import styled from "styled-components";

import { screenSize } from "../../utils/constants";

export const Section = styled.div`
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSize.tablet}) {
    flex-direction: row;
    margin-top: 100px;
    height: calc(100vh - 280px);
    >div {
        width: 100%;
        padding: 12px;
    }
  }
`;

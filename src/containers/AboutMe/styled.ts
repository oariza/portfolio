import styled from "styled-components";

import { screenSize } from "../../utils/constants";

export const Section = styled.div`
  padding: 8px;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenSize.tablet}) {
    flex-direction: row;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
  > p {
    font-size: 1.3rem;
  }
  img {
    border-radius: 20px;
    width: 70%;
    @media (min-width: ${screenSize.tablet}) {
      width: 90%;
    }
  }
`;

export const WhatCanIDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${screenSize.tablet}) {
    flex-direction: row;
    max-width: 900px;
    margin: 0 auto;
    justify-content: center;
  }
  > div {
    margin: 12px;
    padding: 8px;
    min-height: 250px;
    max-width: 300px;
    border: 1px solid darkgreen;
    border-radius: 20px;
    font-size: 1.2rem;
  }
`;

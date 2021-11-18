import styled from "styled-components";

import { screenSize } from "../../utils/constants";

export const Section = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  height: calc(100vh - 80px);
  color: #233642;
  background-color: #F7FBFF;
  > h2 {
    font-size: 2rem;
    margin: 0;
  }
  @media (min-width: ${screenSize.tablet}) {
    flex-direction: row;
  }
`;

export const ExperiencieSection = styled(Section)`
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  > h2 {
      font-size: 2rem;
      @media (min-width: ${screenSize.tablet}) {
        font-size: 4rem;
        margin-top: 100px;
      }
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 60%;
  margin: 0 auto;
  @media (min-width: ${screenSize.tablet}) {
    margin: 0;
    max-width: 1200px;
  }
`;

export const Name = styled.p`
  color: #233642;
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  line-height: 50px;
  padding-right: 50px;
  @media (min-width: ${screenSize.tablet}) {
    font-size: 8rem;
    line-height: 100px;
  }
`;

export const NameSpace = styled(Name)`
  padding-left: 100px;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  @media (min-width: ${screenSize.tablet}) {
    font-size: 1.2rem;
  }
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 40%;
  margin: 0 auto;
  > img {
    width: 60%;
    margin-bottom: 10px;
    border-radius: 5%;
    @media (min-width: ${screenSize.tablet}) {
      width: 80%;
    }
  }
  @media (min-width: ${screenSize.tablet}) {
    margin: 0;
    max-width: 1200px;
  }
`;

export const Social = styled.div`
  img {
    width: 10%;
    margin: 0 10px;
    @media (min-width: ${screenSize.tablet}) {
      width: 8%;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  @media (min-width: ${screenSize.tablet}) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 90%;
  min-height: 23%;
  margin: 12px auto;
  border: 1px solid #4b72b2;
  border-radius: 10px;
  padding: 4px;
  color: #233642;
  @media (min-width: ${screenSize.tablet}) {
    margin: 20px;
  }
  > h3 {
    font-size: 1.3rem;
    margin: 12px 0;
    @media (min-width: ${screenSize.tablet}) {
      font-size: 1.5rem;
    }
  }
  > p {
    font-size: 0.8rem;
    @media (min-width: ${screenSize.tablet}) {
      font-size: 1.2rem;
    }
  }
  > img {
    height: 45px;
  }
`;

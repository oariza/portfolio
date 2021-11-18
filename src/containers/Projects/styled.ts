import styled from "styled-components";

import { screenSize } from "../../utils/constants";

export const ProjectsContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${screenSize.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ProjectCard = styled.div<{ $backgroundImage: string }>`
  border-radius: 10px;
  border: 1px solid lightgray;
  width: 100%;
  max-width: 350px;
  height: 200px;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: center;
  align-items: center;
  margin: 8px;
  &:hover {
    cursor: pointer;
    > div {
      visibility: visible;
    }
  }
`;

export const ProjectLink = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 340px;
  height: 190px;
  border-radius: 10px;
  background-color: #4b72b2;
  opacity: 0.8;
  visibility: hidden;
  a{
    color: white;
    text-decoration: none;
  }
`;

export const ProjectType = styled.p`
  font-size: 1.2rem;
`;

export const ProjectTech = styled.p`
  font-size: .9rem;
  font-style: italic;
`;
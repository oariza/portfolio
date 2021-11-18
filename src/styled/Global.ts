import styled from "styled-components";

import { screenSize } from "../utils/constants";

export const Container = styled.div`
background-color: #f2f0ee;
margin-top: 80px;
`;

export const Content = styled.div`
background-color: #ffffff;
color: #233642;
max-width: 95%;
margin: 0 auto;
font-size: 1.5rem;
box-shadow: 1px 1px 25px 1px rgba(145, 145, 145, 0.75);
@media (min-width: ${screenSize.tablet}) {
  flex-direction: row;
  max-width: 1200px;
}
`;
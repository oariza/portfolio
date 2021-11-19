import styled from "styled-components";

import { screenSize } from "../../utils/constants";

export const ContactForm = styled.form`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 12px;
  text-align: right;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenSize.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.1rem;
  margin: 8px 0;
`;

export const ContactInput = styled.input<{ $width: string }>`
  width: 100%;
  max-width: ${({ $width }) => $width};
  height: 30px;
  color: gray;
  font-size: 1.1rem;
  font-family: "Outfit", sans-serif;
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  color: gray;
  font-size: 1.1rem;
  font-family: "Outfit", sans-serif;
`;

export const ContactButton = styled.button`
  background-color: #e65446;
  width: 100px;
  height: 30px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 5px;
  &:disabled {
    color: darkgray;
    background-color: lightgray;
  }
`;

export const Section = styled.div``;

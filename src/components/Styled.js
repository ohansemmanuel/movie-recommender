import styled from "styled-components";
import { Flex, Center } from "./Layout";

export const StyledMovieContainer = styled.section`
  width: 640px;
  height: 390px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
`;

export const StyledHeader = Flex.extend`
  padding: 30px;
  height: 70px;

  .header__item:nth-child(2) {
    margin: 0 auto;
  }
`;
export const StyledBody = styled.main``;

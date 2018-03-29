import styled from "styled-components";
import { Flex } from "./Layout";

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

export const StyledMovie = styled.div`
  padding: 10px;
  cursor: pointer;

  .movie__poster {
    width: 127px;
    height: 191px;
    margin-bottom: 6px;
    border-radius: 4px;
    &img {
      object-fit: cover;
    }
  }

  .movie__title {
    color: #525661;
    margin-bottom: 4px;
    font-size: 16px;
  }

  .movie__info {
    font-size: 11px;
    opacity: 0.8;
  }
`;

export const StyledBody = styled.main``;

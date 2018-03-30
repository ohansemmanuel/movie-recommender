import styled from "styled-components";
import theme from "../constants/theme";
import { styledMovie } from "../utils/styled";
import { Flex } from "./Layout";

export const StyledMovieContainer = styled.section`
  position: relative;
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
  .header__item.header--is-closed {
    margin-left: auto;
  }
  svg {
    cursor: pointer;
  }
`;

export const StyledMovie = styled.div`
  padding: 10px;
  cursor: pointer;

  .movie__poster {
    width: ${theme.movieWidth};
    height: 191px;
    margin-bottom: 6px;
    border-radius: 4px;
    ${props => styledMovie.moviePosterWithDetails(props.showDetails)};
  }

  .movie__title {
    color: #525661;
    margin-bottom: 4px;
    font-size: 16px;
    width: ${theme.movieWidth};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .movie__info {
    font-size: 11px;
    opacity: 0.8;
  }
`;

export const StyledBody = styled.main``;

import styled, { keyframes } from "styled-components";
import theme from "../constants/theme";
import { styledMovie } from "../utils/styled";
import { Flex, media } from "./Layout";

export const StyledMovieContainer = styled.section`
  position: relative;
  width: 640px;
  height: 390px;
  background: ${theme.movieContainerBg};
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);

  &:before {
    content: "OLDIE MOVIE";
    position: fixed;
    top: 18vh;
    left: 10vw;
    font-size: 9vw;
    color: rgba(255, 255, 255, 0.03);
  }
  &:after {
    content: "RECOMMENDER";
    position: fixed;
    top: 38vh;
    left: 11vw;
    font-size: 2vw;
    color: rgba(255, 255, 255, 0.03);
  }

  ${media.handheld`
    &:before {display: none};
    &:after {display: none}
  `};
`;

export const StyledMovieDetailsContainer = styled.div`
  padding-left: 35%;
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
  > a {
    position: absolute;
    right: 20px;
  }
  > *:hover {
    cursor: pointer;
    color: #fff;
  }
`;

export const StyledMovie = styled.div`
  padding: 10px;
  cursor: pointer;
  ${props => styledMovie.moviePosterWithoutDetails(props.showDetails)};
  animation-delay: ${props =>
      props.animationDelay ? props.animationDelay : "initial"}
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
    font-size: 1rem;
    width: ${theme.movieWidth};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${props => styledMovie.movieTitleWithDetails(props.showDetails)};
  }

  .movie__info {
    font-size: 11px;
    opacity: 0.8;
  }

  .movie__desc {
    margin-top: 30px;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .movie__play {
    background: #eb6259;
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
    display: inline-block;
    padding: 8px 17px;
    margin: 20px 0 15px 0;
    text-transform: uppercase;
    z-index: 10;
    outline: none !important;
    cursor: pointer;
  }

  .movie__title,
  .movie__info,
  .movie__play,
  .movie__desc {
    ${props => styledMovie.movieDetailsAnim(props.showDetails)};
  }
  .movie__title {
    animation-delay: 0.2s;
  }
  .movie__info {
    animation-delay: 0.3s;
  }
  .movie__desc {
    animation-delay: 0.4s;
  }
  .movie__play {
    animation-delay: 0.5s;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  top: 40px;
  z-index: 1;
  border: 0;
  border-radius: 5px;
  color: ${props => {
    return props.transparent ? "black" : "#FFF";
  }};
  outline: 0;
  padding: 13px;
  width: 50%;
  transition: all 0.1s cubic-bezier(0.67, 0.13, 0.1, 0.81);

  &::after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background: ${props => {
      return props.transparent ? "transparent" : "#EB6259";
    }};
  }
  &:after {
    transform: scaleY(0);
    transform-origin: top;
    background: #ac4743;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover {
    cursor: pointer;
    transform: translateY(2px);
    box-shadow: 10px 55px 150px -20px #2a628f;
    &::after {
      transform: scaleY(1);
      transform-origin: bottom;
    }
    & + p {
      color: #4c9f70;
    }
  }
  &:active {
    transform: translateY(4px);
    box-shadow: 10px 15px 50px -20px #4c9f70;
    &:after {
      background: linear-gradient(135deg, #5477df, #2a628f);
    }
  }
`;

const rotate360 = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const StyledLoader = styled.span`
  width: 35px;
  height: 35px;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-left-color: rgba(3, 155, 229, 1);
  border-top-color: rgba(3, 155, 229, 1);
  border-radius: 50%;
  display: inline-block;
  animation: ${rotate360} 600ms infinite linear;
`;

export const StyledBody = styled.main``;

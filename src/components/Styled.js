import styled, { keyframes } from "styled-components";
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
      return props.transparent
        ? "transparent"
        : "linear-gradient(-135deg,#3e87f6 0%,#3b84f2 30%,#3b84f2 40%,#0c49a9 90%,#0c49a9 100%)";
    }};
  }
  &:after {
    transform: scaleY(0);
    transform-origin: top;
    background: linear-gradient(135deg, #2a628f, #4c9f70);
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

import styled, { keyframes } from "styled-components";
import { css } from "styled-components";

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `
};

export const Center = styled.div`
  width: 100%;
  min-height: ${props => (props.height ? props.height : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.background
      ? css`
          ${props.background};
        `
      : "transparent"};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => {
    return props.column ? "column" : "row";
  }};
  flex-wrap: ${props => {
    return props.wrap ? "wrap" : "no-wrap";
  }}
  justify-content: ${props => {
    switch (props.justify) {
      case "fe":
        return "flex-end";
      case "c":
        return "center";
      case "sa":
        return "space-around";
      case "sb":
        return "space-between";
      default:
        return "flex-start";
    }
  }};
  align-items: center;
  width: 100%;
  height: ${props => (props.height ? props.height : "initial")}
  overflow: ${props => (props.overflow ? props.overflow : "initial")};
`;

const bounceInLeft = keyframes`
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: none;
  }
`;

// Please be careful before changing the min-height properties
// especially on mobile devices :(
export const Container = styled.section`
  position: relative;
  width: 250px;
  min-height: 350px;
  background: #fff;
  padding: 40px 20px;
  border-radius: 5px;
  box-shadow: 0 10px 50px -20px rgba(0,0,0,0.24);
  ${media.handheld`
        width: 100%;
        min-height: 80vh; 
        padding: 0;
        box-shadow: none;
    `} animation: ${bounceInLeft} 1s both;
`;

export const FlexContainer = Container.extend`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  `,
  laptop: (...args) => css`
    @media (max-width: 1199.98px) {
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

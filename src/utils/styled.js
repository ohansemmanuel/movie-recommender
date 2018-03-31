import { show_details } from "../constants/strings";
import { keyframes } from "styled-components";
import theme from "../constants/theme";
/**
 * utils that exist (mostly) to extend certain component styles.
 */

const removeTransform = keyframes`
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const styledMovie = {
  moviePosterWithDetails: withDetails => {
    if (withDetails === show_details) {
      return `
        position: absolute;
        z-index: 2;
        top: -10%;
        left: -6%;
        height: ${theme.posterExpandedHeight};
        width: ${theme.posterExpandedWidth};
        border-radius: 5px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, .45);
        transform: translateX(100px) translateY(100px);
        opacity: 0;
        animation: ${removeTransform} 500ms forwards;
      `;
    }
  },
  moviePosterWithoutDetails: withDetails => {
    if (withDetails !== show_details) {
      return `
        transform: translateY(-100px);
        opacity: 0;  
        animation: ${removeTransform} 500ms forwards;
      `;
    }
  },
  movieTitleWithDetails: withDetails => {
    if (withDetails === show_details) {
      return `
        font-size: 2.2rem;
        font-weight: 300;
        color: #ECF0F1;
        margin-bottom: 5px;
        overflow: initial;
      `;
    }
  },
  movieDetailsAnim: withDetails => {
    if (withDetails === show_details) {
      return `
        transform: translateX(-150px);
        opacity: 0;
        animation: ${removeTransform} 500ms forwards;
      `;
    }
  }
};

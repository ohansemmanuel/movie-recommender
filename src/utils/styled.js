import { show_details } from "../constants/strings";
import { keyframes } from "styled-components";
import theme from "../constants/theme";
import { media } from "../components/Layout";
/**
 * utils that exist (mostly) to extend certain component styles.
 * NB: in the media.handheld declarations, every first declaration appears to be ignored. This may be a bug with the styled-components lib?
 * @todo reproduce and file an issue.
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
        ${media.handheld`
          top: 1%;
          left: 10px;
          width: 127px;
          height: 200px;
          top: 0;
        `}
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
        ${media.handheld`
          font-size: 1.2rem; 
          font-size: 1.2rem;
          padding-top: 50px;
        `}
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

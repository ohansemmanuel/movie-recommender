import React from "react";
import { StyledMovie } from "./Styled";

const Movie = ({ id, poster, name, duration, year, showDetails, children }) => (
  <StyledMovie key={id} showDetails={showDetails}>
    <img src={poster} alt="" className="movie__poster" />
    <div className="movie__title">{name}</div>
    <div className="movie__info">
      <span className="movie__info_length">{duration}</span>{" "}
      <span className="movie__info_year">{year}</span>
    </div>
    {children}
  </StyledMovie>
);

export default Movie;

import { createSelector } from "reselect";

const movies = state => state.movies;
const movieId = state => state.movie;
const getSelectedMovie = (movies, movieId) => {
  return movies[movieId];
};

export default createSelector(movies, movieId, getSelectedMovie);

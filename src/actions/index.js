export const MOVIE_SELECTED = "MOVIE_SELECTED";
export const MOVIE_RATED = "MOVIE_RATED";

export function selectMovie(id) {
  return {
    type: MOVIE_SELECTED,
    payload: id
  };
}

export function rateMovie({ rating, movieId }) {
  return {
    type: MOVIE_RATED,
    payload: {
      rating,
      movieId
    }
  };
}

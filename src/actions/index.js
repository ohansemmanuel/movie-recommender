export const MOVIE_SELECTED = "MOVIE_SELECTED";

export function selectMovie(id) {
  return {
    type: MOVIE_SELECTED,
    payload: id
  };
}

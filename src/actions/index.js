import {
  MOVIE_RATED,
  MOVIE_SELECTED,
  RECOMMEND_MOVIES,
  APP_STATE
} from "./types";

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

export function recommendMovies(ratings) {
  return {
    type: RECOMMEND_MOVIES,
    payload: {
      ratings,
      [RECOMMEND_MOVIES]: RECOMMEND_MOVIES
    }
  };
}

export function setAppState(appState) {
  return {
    type: APP_STATE,
    payload: appState
  };
}

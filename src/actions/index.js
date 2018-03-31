export const MOVIE_SELECTED = "MOVIE_SELECTED";
export const MOVIE_RATED = "MOVIE_RATED";
export const RECOMMEND_MOVIES = "RECOMMEND_MOVIES" //action handled via custom middleware


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
    }
}
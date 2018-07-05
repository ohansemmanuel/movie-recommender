import _ from "lodash";
import * as types from "../actions/types";
import { movies as moviesData } from "../staticData";

//This is a relatively small app - all reducers
//can safely remain in this ONE file.

export const appState = (state = "", action) => {
  switch (action.type) {
    case types.APP_STATE:
      return action.payload;

    default:
      return state;
  }
};

export const movies = (state = _.mapKeys(moviesData, "id"), action) => {
  switch (action.type) {
    case types.MOVIE_RATED:
      const { movieId, rating } = action.payload;
      return {
        ...state,
        [movieId]: {
          ...state[movieId],
          rating
        }
      };

    case types.RECOMMEND_MOVIES:
      const { data } = action.payload;
      if (data) {
        return data;
      }
      return state;

    default:
      return state;
  }
};

export const movie = (state = 1, action) => {
  switch (action.type) {
    case types.MOVIE_SELECTED:
      return action.payload;

    default:
      return state;
  }
};

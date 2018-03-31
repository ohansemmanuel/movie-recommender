import _ from "lodash";
import { combineReducers } from "redux";
import * as actions from "../actions";
import { movies as moviesData } from "../staticData";

const appState = (state = {}, action) => {
  switch (action.type) {
    case "test":
      break;

    default:
      return state;
  }
};

const movies = (state = _.mapKeys(moviesData, "id"), action) => {
  switch (action.type) {
    case actions.MOVIE_RATED:
      const { movieId, rating } = action.payload;
      return {
        ...state,
        [movieId]: {
          ...state[movieId],
          rating
        }
      };
    
    case actions.RECOMMEND_MOVIES:
      const {data} = action.payload
      if(data) {
        console.log('in reducer for recommend!')
        return state;
      }
      return state  
    default:
      return state;
  }
};

const movie = (state = 1, action) => {
  switch (action.type) {
    case actions.MOVIE_SELECTED:
      return action.payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  appState,
  movies,
  movie
});

export default rootReducer;

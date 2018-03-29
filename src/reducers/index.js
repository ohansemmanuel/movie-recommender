import { combineReducers } from "redux";
import _ from "lodash";
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
    case "test":
      break;

    default:
      return state;
  }
};
const movie = (state = {}, action) => {
  switch (action.type) {
    case "test":
      break;

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

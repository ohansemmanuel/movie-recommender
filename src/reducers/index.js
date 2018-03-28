import { combineReducers } from "redux";

const appState = (state = {}, action) => {
  switch (action.type) {
    case "test":
      break;

    default:
      return state;
  }
};
const movies = (state = {}, action) => {
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

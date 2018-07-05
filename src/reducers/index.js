import { combineReducers } from "redux";
import { appState, movie, movies } from "./reducers";

const rootReducer = combineReducers({
  appState,
  movies,
  movie
});

export default rootReducer;

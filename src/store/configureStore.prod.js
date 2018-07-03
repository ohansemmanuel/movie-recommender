import { createStore, applyMiddleware } from "redux";
import { getRecommendations } from "../middleware/api";
import rootReducer from "../reducers";

const configureStore = initialState =>
  createStore(rootReducer, initialState, applyMiddleware(getRecommendations));

export default configureStore;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import DevTools from "../containers/DevTools";

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, createLogger()), DevTools.instrument())
  );

  if (module.hot) {
    //webpack HMR
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
};

export default configureStore;

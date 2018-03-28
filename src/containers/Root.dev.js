import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import DevTools from "./DevTools";
import App from "./App";
import Movie from "./Movie";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/movies/:name" component={Movie} />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

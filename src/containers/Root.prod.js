import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import App from "./App";
import Movie from "./Movie";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <Route path="/movies/:name" component={Movie} />
    </div>
  </Provider>
);

Root.PropTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

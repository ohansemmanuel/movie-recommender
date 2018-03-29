import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Movie from "./Movie";

const Root = ({ store }) => (
  <Provider store={store}>
    <section>
      <Router>
        <App />
      </Router>
    </section>
  </Provider>
);

Root.PropTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

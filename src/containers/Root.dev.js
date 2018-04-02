import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import DevTools from "./DevTools";
import App from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <section>
      <Router>
        <App />
      </Router>
      <DevTools />
    </section>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

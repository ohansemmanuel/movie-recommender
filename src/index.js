import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Root from "./containers/Root";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import { Route } from "react-router-dom";
import { Backdrop } from "../components/Layout";
import { StyledMovieContainer } from "../components/Styled";
import { ToastContainer } from "react-toastify";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import theme from "../constants/theme";

const App = props => {
  return (
    <Backdrop background={theme.bodyBackground} height="100vh">
      <StyledMovieContainer>
        <Route exact path="/" component={Movies} />
        <Route path="/movies/:id" component={MovieDetails} />
      </StyledMovieContainer>
      <ToastContainer />
    </Backdrop>
  );
};

export default App;

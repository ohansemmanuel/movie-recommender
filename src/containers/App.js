import React from "react";
import { Route } from "react-router-dom";
import { Center } from "../components/Layout";
import { StyledMovieContainer } from "../components/Styled";
import Body from "./Body";
import Movie from "./Movie";
import Header from "../components/Header";
import theme from "../constants/theme";

const App = props => {
  return (
    <Center background={theme.bodyBackground} height="100vh">
      <StyledMovieContainer>
        <Header />
        <Route exact path="/" component={Body} />
        <Route path="/movies/:id" component={Movie} />
      </StyledMovieContainer>
    </Center>
  );
};

export default App;

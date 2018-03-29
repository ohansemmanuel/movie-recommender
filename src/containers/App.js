import React from "react";
import { Center } from "../components/Layout";
import { StyledMovieContainer } from "../components/Styled";
import Body from "./Body";
import Header from "../components/Header";
import theme from "../constants/theme";

const App = props => {
  return (
    <Center background={theme.bodyBackground} height="100vh">
      <StyledMovieContainer>
        <Header />
        <Body />
      </StyledMovieContainer>
    </Center>
  );
};

export default App;

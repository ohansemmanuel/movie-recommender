import React from "react";
import { StyledHeader } from "./Styled";

const Header = props => (
  <StyledHeader>
    <span className="fas fa-bars header__item" />
    <span className="header__item">The Movie Recommender</span>
    <span className="fas fa-search header__item" />
  </StyledHeader>
);

export default Header;

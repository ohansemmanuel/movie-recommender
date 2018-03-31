import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Styled";

const Header = ({ isCollapsed }) => {
  if (isCollapsed) {
    return (
      <StyledHeader>
        <Link to="/">
          <span className="fas fa-chevron-left header__item header--is-closed" />
          &nbsp;
          <span> Go back </span>
        </Link>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <span className="fas fa-bars header__item" />
      <span className="header__item">The Movie Recommender</span>
      <span className="fas fa-search header__item" />
    </StyledHeader>
  );
};

export default Header;

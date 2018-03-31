import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Flex, Center } from "../components/Layout";
import { dont_show_details } from "../constants/strings";
import Movie from "../components/Movie";
import Header from "../components/Header";
import { StyledButton, StyledLoader } from "../components/Styled";
import formatMovieRatings from "../utils/formatMovieRatings";
import { connect } from "react-redux";
import { recommendMovies, setAppState } from "../actions";
import {
  is_recommending_movies,
  recommendation_failed,
  recommendation_successful
} from "../constants/strings";

/**
 *
 * @param {String} appState - finite state. is_recommending_movies ||
 * recommendation_successful || recommendation_failed
 */
const Movies = ({ movies, recommendMovies, appState, setAppState }) => {
  //remove movies without a poster image
  const usableMovies = _.omitBy(movies, movie => !movie.poster);
  //convert object to an array
  const movieList = _.values(usableMovies);
  //randomize the order of the movie list
  const randomMovieList = _.shuffle(movieList);

  const getRecommendations = () => {
    let ratings;

    try {
      ratings = formatMovieRatings(undefined, undefined, movies);
    } catch (err) {
      /**
       * @todo - show error via toast
       */
      console.error(err);
      alert(
        "Please click on the movie posters and rate at least 3 movies to get a personalized oldies recommendation"
      );
    }

    if (ratings) {
      recommendMovies(ratings);
      setAppState(is_recommending_movies);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      {renderHeader(appState)}
      {renderBody(appState, randomMovieList)}
      {renderFooter(appState, getRecommendations)}
    </div>
  );
};

function mapStateToProps({ movies, appState }) {
  return { movies, appState };
}

function renderHeader(appState) {
  switch (appState) {
    case is_recommending_movies:
      return null;

    case recommendation_failed:
      return null;

    default:
      return <Header />;
  }
}

function renderBody(appState, randomMovieList) {
  switch (appState) {
    case is_recommending_movies:
      return (
        <Center>
          <StyledLoader />
        </Center>
      );

    case recommendation_failed:
      return (
        <Center>
          <div>
            <span role="img" aria-label="sad">
              😫
            </span>{" "}
            Recommendation Failed. Please refresh the page.
          </div>
        </Center>
      );

    default:
      return (
        <Flex overflow="auto">
          {randomMovieList.map(({ id, poster, name, duration, year }) => {
            return (
              <Link to={`/movies/${id}`} key={id}>
                <Movie
                  poster={poster}
                  name={name}
                  duration={duration}
                  year={year}
                  showDetails={dont_show_details}
                />
              </Link>
            );
          })}
        </Flex>
      );
  }
}

function renderFooter(appState, getRecommendations) {
  switch (appState) {
    case is_recommending_movies:
      return null;

    case recommendation_failed:
      return null;

    case recommendation_successful:
      return null;

    default:
      return (
        <Flex justify="c">
          <StyledButton onClick={getRecommendations}>
            {" "}
            Get Recommended Movies{" "}
          </StyledButton>
        </Flex>
      );
  }
}

export default connect(mapStateToProps, { recommendMovies, setAppState })(
  Movies
);

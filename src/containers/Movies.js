import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Flex } from "../components/Layout";
import { dont_show_details } from "../constants/strings";
import Movie from "../components/Movie";
import Header from "../components/Header";
import { StyledButton } from "../components/Styled";
import formatMovieRatings from "../utils/formatMovieRatings";
import { connect } from "react-redux";

const Movies = ({ movies }) => {
  //remove movies without a poster image
  const usableMovies = _.omitBy(movies, movie => !movie.poster);
  //convert object to an array
  const movieList = _.values(usableMovies);
  //randomize the order of the movie list
  const randomMovieList = _.shuffle(movieList);

  const getRecommendations = () => {
    console.log(formatMovieRatings(undefined, undefined, movies));
  };

  return (
    <div>
      <Header />
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

      <Flex justify="c">
        <StyledButton onClick={getRecommendations}>
          {" "}
          Get Recommended Movies{" "}
        </StyledButton>
      </Flex>
    </div>
  );
};

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(Movies);

import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Flex } from "../components/Layout";
import Movie from "../components/Movie";
import { connect } from "react-redux";

const Movies = ({ movies }) => {
  const availableMovies = _.omitBy(movies, movie => !movie.poster);
  const movieList = _.values(availableMovies);
  const randomMovieList = _.shuffle(movieList);

  return (
    <Flex>
      {randomMovieList.map(({ id, poster, name, duration, year }) => {
        return (
          <Link to={`/movies/${id}`} key={id}>
            <Movie
              poster={poster}
              name={name}
              duration={duration}
              year={year}
            />
          </Link>
        );
      })}
    </Flex>
  );
};

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(Movies);

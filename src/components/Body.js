import React from "react";
import _ from "lodash";
import { Flex } from "./Layout";
import { connect } from "react-redux";

const Body = ({ movies }) => {
  const availableMovies = _.omitBy(movies, movie => !movie.details);
  const movieList = _.values(availableMovies);
  const randomMovieList = _.shuffle(movieList);

  return (
    <Flex wrap="true">
      {randomMovieList.map(movie => {
        return <div key={movie.id}>{movie.name}</div>;
      })}
    </Flex>
  );
};

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(Body);

import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Flex } from "../components/Layout";
import { dont_show_details } from "../constants/strings";
import Movie from "../components/Movie";
import Header from "../components/Header";
import { connect } from "react-redux";

const Movies = ({ movies }) => {
  //remove movies without a poster image
  const usableMovies = _.omitBy(movies, movie => !movie.poster);
  //convert object to an array
  const movieList = _.values(usableMovies);
  //randomize the order of the movie list
  const randomMovieList = _.shuffle(movieList);

  return (
    <div>
      <Header />
      <Flex>
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
    </div>
  );
};

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(Movies);

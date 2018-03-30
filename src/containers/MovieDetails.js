import React, { Component } from "react";
import ReactStars from "react-stars";
import { connect } from "react-redux";
import { selectMovie, rateMovie } from "../actions";
import { show_details } from "../constants/strings";
import Header from "../components/Header";
import Movie from "../components/Movie";
import movieSelector from "../selectors/selectedMovie";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this._id = this.props.match.params.id; //props passed from <Route/>
  }
  componentWillMount() {
    this.props.selectMovie(+this._id);
  }

  _ratingChanged = rating => {
    this.props.rateMovie({
      rating,
      movieId: +this._id
    });
  };

  render() {
    const {
      movie: { name, poster, duration, trailer, details, rating, year }
    } = this.props;

    return (
      <div>
        <Header isCollapsed="true" />
        <Movie
          name={name}
          poster={poster}
          duration={duration}
          year={year}
          showDetails={show_details}
        >
          <div className="desc">{details}</div>
          <a
            className="play"
            href={trailer}
            target="_blank"
            rel="noopener noreferrer"
          >
            watch trailer
          </a>
          <ReactStars
            count={5}
            onChange={this._ratingChanged}
            size={24}
            color2={"#ffd700"}
            value={rating}
          />
        </Movie>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: movieSelector(state)
  };
};

export default connect(mapStateToProps, { selectMovie, rateMovie })(
  MovieDetails
);

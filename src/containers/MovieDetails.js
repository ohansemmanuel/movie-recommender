import React, { Component } from "react";
import ReactStars from "react-stars";
import { connect } from "react-redux";
import { selectMovie } from "../actions";
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

  _ratingChanged = newRating => {
    console.log(newRating);
  };

  render() {
    const {
      movie: { name, poster, duration, trailer, details, year }
    } = this.props;

    return (
      <div>
        <Header isCollapsed="true" />
        <Movie
          showDetails="true"
          name={name}
          poster={poster}
          duration={duration}
          year={year}
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

export default connect(mapStateToProps, { selectMovie })(MovieDetails);

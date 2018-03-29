import React, { Component } from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions";
import { StyledMovie } from "../components/Styled";
import Header from "../components/Header";
import movieSelector from "../selectors/selectedMovie";

class Movie extends Component {
  constructor(props) {
    super(props);
    this._id = this.props.match.params.id; //props passed from <Route/>
  }
  componentWillMount() {
    this.props.selectMovie(+this._id);
  }

  render() {
    const {
      movie: { name, poster, duration, trailer, details, year }
    } = this.props;

    return (
      <div>
        <Header isCollapsed="true" />
        <StyledMovie>
          <img src={poster} alt="" className="movie__poster" />
          <div className="movie__title">{name}</div>
          <div className="movie__info">
            <span className="movie__info_length">{duration}</span>
            <span className="movie__info_year">{year}</span>
          </div>
          <div className="desc">{details}</div>

          <a
            className="play"
            href={trailer}
            target="_blank"
            rel="noopener noreferrer"
          >
            play movie
          </a>
        </StyledMovie>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: movieSelector(state)
  };
};

export default connect(mapStateToProps, { selectMovie })(Movie);

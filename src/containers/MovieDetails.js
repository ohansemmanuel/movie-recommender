import React, { Component } from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions";
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
    return <div>{this.props.movies.name}</div>;
  }
}

const mapStateToProps = state => {
  return {
    movies: movieSelector(state)
  };
};

export default connect(mapStateToProps, { selectMovie })(Movie);

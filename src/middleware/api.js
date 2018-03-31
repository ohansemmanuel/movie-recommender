//centralize API calls here.
import axios from "axios";
import _ from "lodash";
import { RECOMMEND_MOVIES } from "../actions";
import { CURRENT_USER } from "../utils/formatMovieRatings";
import { movies as defaultMoviesState } from "../staticData";

const BASE_URL = `http://localhost:5000/recommend/movies/`;

/*
  1. This custom middleware will intercept actions with a payload 
  containing a RECOMMEND_MOVIES key. 
  2. Make API post request
  3. Format the received data to match the App's state movies key
  4. Dispatch a clone of the action - but without the RECOMMEND_MOVIES key
  5. Em, that's it!
 */
export function getRecommendations({ getState, dispatch }) {
  return next => action => {
    if (action.payload[RECOMMEND_MOVIES] === RECOMMEND_MOVIES) {
      const url = `${BASE_URL}${CURRENT_USER}`;
      const dispatchData = data => {
        dispatch({
          type: action.type,
          payload: {
            data
          }
        });
      };

      makeRequest(url, action.payload.ratings)
        .then(data => formatData(data))
        .then(data => dispatchData(data))
        .catch(err => console.error(err));
    }
    next(action);
  };
}

function makeRequest(url, ratings) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, ratings, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        console.log(err);
        reject("Oops. There was error fetching recommended movies");
      });
  });
}

function formatData(data) {
  //sychronous, BUT returning a promise :)
  return new Promise((resolve, reject) => {
    const movies = JSON.parse(data.movies);
    const movieTitles = _.values(movies.title);
    let newMovieState = {};

    const filteredMovies = _.filter(defaultMoviesState, movie =>
      _.includes(movieTitles, movie.name)
    );

    _.each(filteredMovies, movie => {
      newMovieState = {
        ...newMovieState,
        [movie.id]: movie
      };
    });

    resolve(newMovieState);
  });
}

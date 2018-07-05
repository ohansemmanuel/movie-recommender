//centralize API calls here.
import axios from "axios";
import _ from "lodash";
import { RECOMMEND_MOVIES, APP_STATE } from "../actions/types";
import { CURRENT_USER } from "../utils/formatMovieRatings";
import { movies as defaultMoviesState } from "../staticData";
import {
  recommendation_successful,
  recommendation_failed
} from "../constants/strings";

/*
  1. This custom middleware will intercept actions with a payload
  containing a RECOMMEND_MOVIES key.
  2. Make API post request
  3. Format the received data to match the App's state movies key
  4. Dispatch a clone of the action - but without the RECOMMEND_MOVIES key
  5. Em, that's it!
 */

// Load base url from env.
const BASE_URL = process.env.REACT_APP_API_URL;

export function getRecommendations({ dispatch }) {
  return next => action => {
    next(action);

    if (action.payload[RECOMMEND_MOVIES] === RECOMMEND_MOVIES) {
      const url = `${BASE_URL}/recommend/movies/${CURRENT_USER}`;

      makeRequest(url, action.payload.ratings)
        .then(data => dispatchData(data, action.type, dispatch))
        .catch(err => {
          dispatchAppState(recommendation_failed, dispatch);
          console.error(err);
        });
    }
  };
}

//Dispatch after a failed or successful "get recommendations" attempt.
function dispatchAppState(appState, cb) {
  return cb({
    type: APP_STATE,
    payload: appState
  });
}

function dispatchData(data, type, cb) {
  cb({
    type,
    payload: {
      data
    }
  });
  dispatchAppState(recommendation_successful, cb);
}

function makeRequest(url, ratings) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, ratings, {
        headers: { "Content-Type": "application/json" },
        transformResponse: formatData
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
  const movies = JSON.parse(data.movies);
  const movieTitles = _.values(movies.title);

  //lower case all movie titles
  _.each(movieTitles, (title, index) => {
    movieTitles[index] = title.toLowerCase();
  });

  let newMovieState = {};
  const filteredMoviesByName = _.filter(defaultMoviesState, movie =>
    _.includes(movieTitles, movie.name.toLowerCase())
  );
  const filteredMoviesBySubstitute = _.filter(defaultMoviesState, movie => {
    if (movie.substitute) {
      return _.includes(movieTitles, movie.substitute.toLowerCase());
    } else {
      return null;
    }
  });

  //compute new movie state
  _.each([...filteredMoviesByName, ...filteredMoviesBySubstitute], movie => {
    newMovieState = {
      ...newMovieState,
      [movie.id]: movie
    };
  });

  return newMovieState;
}

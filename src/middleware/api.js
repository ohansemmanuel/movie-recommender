//centralize API calls here.
import axios from "axios";
import { RECOMMEND_MOVIES } from "../actions";
import { CURRENT_USER } from "../utils/formatMovieRatings";

const BASE_URL = `http://localhost:5000/recommend/movies/`;

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

function formatData(rawRecommendedMovies) {
  return new Promise((resolve, reject) => {
    console.log(rawRecommendedMovies);
    console.log("In format data!");
    resolve(rawRecommendedMovies);
  });
}

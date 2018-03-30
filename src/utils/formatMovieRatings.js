import _ from "lodash";

const START_KEY = 680; //dataset row shape
const CURRENT_USER = "101"; //dataset has 100 users.

/**
 * Handles the formatting of User Movie Ratings data to be sent to the server.
 * @param {Number} START_KEY - see default declaration above
 * @param {String} CURRENT_USER - see default declaration above
 * @param {Object} movies -  Shape similar to the App movies state key
 * @todo This manipulation should be moved to the server i.e the ML recommender service
 */
export default function formatMovieRatings(
  KEY = START_KEY,
  USER = CURRENT_USER,
  movies
) {
  // basic type check
  if (Array.isArray(movies)) {
    console.error("Movies passed to formatMovieRatings should NOT be an Array");
    return;
  }
  if (arguments.length !== 3) {
    console.error(
      "The number of arguments passed into formatMovieRatings should be 3"
    );
  }
  let result = {};
  const MOVIE_ARR = _.values(movies);
  const MOVIE_WITH_RATINGS = _.filter(MOVIE_ARR, movie => movie.rating);

  // any movies with ratings?
  if (MOVIE_WITH_RATINGS.length === 0) {
    console.warn(
      "Sorry. The movies you have passed into formatMovieRatings have NO ratings"
    );
    return;
  }

  MOVIE_WITH_RATINGS.forEach((movie, index) => {
    let newResult = {
      user_id: {
        ...result["user_id"],
        [START_KEY + index]: USER
      },
      movie_id: {
        ...result["movie_id"],
        [START_KEY + index]: movie.id
      },
      value: {
        ...result["value"],
        [START_KEY + index]: movie.rating
      }
    };
    result = newResult;
  });

  return result;
}

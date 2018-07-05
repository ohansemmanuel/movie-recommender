import * as types from "../../actions/types";
import { appState, movie, movies } from "../reducers";
import { recommendation_failed } from "../../constants/strings";

describe("appState", () => {
  it("handles unknwon action types graciously", () => {
    expect(appState("", {})).toEqual("");
  });

  it("returns the expected application state", () => {
    const action = {
      type: types.APP_STATE,
      payload: recommendation_failed
    };
    expect(appState("", action)).toEqual(recommendation_failed);
  });
});

describe("movies", () => {
  it("handles unknwon action types graciously", () => {
    expect(movies("", {})).toEqual("");
  });

  it("initially returns an object containing 34 movies", () => {
    expect(movies(undefined, {})).toBeInstanceOf(Object);
    expect(Object.keys(movies(undefined, {})).length).toEqual(34);
  });

  it("can add rating to a movie", () => {
    const movie = {
      1: {
        id: "1",
        name: "Fast and Furios"
      }
    };
    const action = {
      type: types.MOVIE_RATED,
      payload: {
        movieId: "1",
        rating: 5
      }
    };

    expect(movies(movie, action)).toEqual({
      1: {
        id: "1",
        name: "Fast and Furios",
        rating: 5
      }
    });
  });

  it("can display recommended movies", () => {
    const action = {
      type: types.RECOMMEND_MOVIES,
      payload: {
        data: {
          1: { movie: "Fast and Furious" }
        }
      }
    };
    expect(movies({}, action)).toEqual(action.payload.data);
  });
});

describe("movie", () => {
  it("returns the selected movie ID", () => {
    const action = {
      type: types.MOVIE_SELECTED,
      payload: 15
    };
    expect(movie(undefined, action)).toEqual(15);
  });
});

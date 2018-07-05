import React from "react";
import { shallow } from "enzyme";
import Movie from "../Movie";

let component;

afterEach(() => {
  component.unmount();
});

describe("Movie without details", () => {
  beforeEach(() => {
    component = shallow(
      <Movie
        id="1"
        poster="http://example.com"
        name="Fast and Furious"
        duration="1h20min"
        year="2017"
        showDetails="false"
        animationDelay="0.3"
      />
    );
  });

  it("shows a movie poster image", () => {
    expect(component.find(".movie__poster").length).toEqual(1);
  });

  it("shows a movie title", () => {
    expect(component.find(".movie__title").length).toEqual(1);
  });

  it("shows a movie info", () => {
    expect(component.find(".movie__info").length).toEqual(1);
  });

  it("shows a non empty title text", () => {
    expect(component.render().text()).toContain("Fast and Furious");
  });

  it("shows a non empty info text", () => {
    expect(component.render().text()).toContain("1h20min");
    expect(component.render().text()).toContain("2017");
  });
});

describe("Movie with details", () => {
  it("shows movie details", () => {
    component = shallow(
      <Movie
        id="1"
        poster="http://example.com"
        name="Fast and Furious"
        duration="1h20min"
        year="2017"
        showDetails="true"
        animationDelay="0.3"
      >
        <div className="movie__desc">Great Movie</div>
        <a
          className="movie__play"
          href="http://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          watch trailer
        </a>
      </Movie>
    );

    expect(component.find(".movie__play").length).toEqual(1);
    expect(component.find(".movie__desc").length).toEqual(1);
    expect(component.render().text()).toContain("watch trailer");
  });
});

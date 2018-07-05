import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

let component;
afterEach(() => {
  component.unmount();
});

it("shows a help text, title and search icon", () => {
  component = shallow(<Header />);
  expect(component.render().text()).toContain("help");
  expect(component.render().text()).toContain("The Movie Recommender");
  expect(component.find(".fa-search").length).toEqual(1);
});

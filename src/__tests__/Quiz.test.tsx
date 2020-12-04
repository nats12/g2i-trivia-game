import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as testUtils from "../testUtils/index";
import Quiz from "../components/screens/Quiz";

configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<Quiz />);
  return wrapper;
};

test("Quiz screen renders without error", () => {
  const wrapper = setup();
  const component = testUtils.findByTestAttr(wrapper, "component-quiz");
  expect(component.length).toBe(1);
});

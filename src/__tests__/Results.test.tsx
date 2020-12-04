import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as testUtils from "../testUtils/index";
import Results from "../components/screens/Results";

configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<Results />);
  return wrapper;
};

test("Results screen renders without error", () => {
  const wrapper = setup();
  const component = testUtils.findByTestAttr(wrapper, "component-results");
  expect(component.length).toBe(1);
});

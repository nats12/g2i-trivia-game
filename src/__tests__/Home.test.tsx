import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as testUtils from "../testUtils/index";
import Home from "../components/screens/Home";

configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<Home />);
  return wrapper;
};

test("Results screen renders without error", () => {
  const wrapper = setup();
  const component = testUtils.findByTestAttr(wrapper, "component-home");
  expect(component.length).toBe(1);
});

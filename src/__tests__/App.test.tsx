import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as testUtils from "../testUtils/index";
import App from "../components/App";

configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
  useSelector: jest
    .fn((fn) => fn())
    .mockReturnValue({
      users: [],
      usersState: [],
    }),
  useDispatch: jest.fn(),
  connect: () => jest.fn(),
}));

const setup = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = testUtils.findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as testUtils from "../testUtils/index";
import { Home } from "../components/screens/Home";

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

const setup = (questions = {}) => {
  const store = testUtils.storeFactory(questions);
  const wrapper = shallow(<Home questions={store.getState().questions} />);

  return wrapper;
};

describe("Store has questions", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup({ questions: ["test"] });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("Home component renders", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-home");
    expect(component.exists()).toBe(true);
  });

  test("Loading title renders", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-loading");
    expect(component.exists()).toBe(false);
  });
});

describe("Store has no questions", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup({ questions: [] });
  });

  test("Home component doesn't render", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-home");
    expect(component.exists()).toBe(false);
  });

  test("Loading title does render", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-loading");
    expect(component.exists()).toBe(true);
  });
});

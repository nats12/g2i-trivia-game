import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as testUtils from "../testUtils/index";
import { Home } from "../components/screens/Home";

configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()).mockReturnValue({}),
  useDispatch: jest.fn(),
  connect: () => jest.fn(),
}));

const setup = (state = {}) => {
  const store = testUtils.storeFactory(state);
  const wrapper = shallow(
    <Home
      questions={store.getState().questions}
      error={store.getState().errors}
    />
  );

  return wrapper;
};

describe("Store has questions", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup({ questions: ["test"], errors: null });
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
    wrapper = setup({ questions: [], errors: null });
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

describe("Store has an error", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup({
      errors: "Network error",
    });
  });

  test("Home component doesn't render", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-quiz");
    expect(component.exists()).toBe(false);
  });

  test("Loading component renders", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-loading");
    expect(component.exists()).toBe(false);
  });

  test("Error component renders", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-error");
    expect(component.exists()).toBe(true);
  });
});

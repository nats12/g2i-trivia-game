import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as testUtils from "../testUtils/index";
import { Quiz } from "../components/screens/Quiz";

configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  connect: () => jest.fn(),
}));

const setup = (state: any = {}) => {
  const store = testUtils.storeFactory(state);

  const wrapper = shallow(
    <Quiz
      questions={store.getState().questions}
      error={store.getState().errors}
      results={store.getState().results}
    />
  );

  return wrapper;
};

describe("Store has questions", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup({
      questions: [{ category: "science", text: "test text" }],
      errors: null,
      results: [],
    });
  });

  test("Quiz component renders", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-quiz");
    expect(component.exists()).toBe(true);
  });

  test("Loading title doesn't render", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-loading");
    expect(component.exists()).toBe(false);
  });
});

describe("Store has no questions", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup({ questions: [], errors: null, results: [] });
  });

  test("Quiz component doesn't render", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-quiz");
    expect(component.exists()).toBe(false);
  });

  test("Loading title renders", () => {
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

  test("Quiz component doesn't render", () => {
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

describe("Quiz has finished", () => {
  let wrapper: any;
  const results = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  beforeEach(() => {
    wrapper = setup({ results });
  });

  test("Quiz component doesn't render", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-quiz");
    expect(component.exists()).toBe(false);
  });
});

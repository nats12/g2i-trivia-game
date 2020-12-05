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

const setup = (questions = {}) => {
  const store = testUtils.storeFactory(questions);
  const wrapper = shallow(<Quiz questions={store.getState().questions} />);

  return wrapper;
};

describe("Store has questions", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = setup({ questions: ["test"] });
  });

  test("Quiz component renders without error", () => {
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
    wrapper = setup({ questions: [] });
  });

  test("Quiz component doesn't render error", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-quiz");
    expect(component.exists()).toBe(false);
  });

  test("Loading title renders", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-loading");
    expect(component.exists()).toBe(true);
  });
});

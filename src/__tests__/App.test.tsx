import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as testUtils from "../testUtils/index";
import { App } from "../components/App";

configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()).mockReturnValue({}),
  useDispatch: jest.fn(),
  connect: () => jest.fn(),
}));

const setup = (state: any = {}) => {
  const store = testUtils.storeFactory(state);

  const wrapper = shallow(
    <App
      questions={store.getState().questions}
      error={store.getState().errors}
      results={store.getState().results}
    />
  );
  return wrapper;
};

test("App renders without error", () => {
  const wrapper = setup({
    questions: [],
    errors: null,
    results: [],
  });
  const component = testUtils.findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

describe("Store has errors", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      questions: [],
      errors: "Network error",
      results: [],
    });
  });

  test("Error component is rendered", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-error");
    expect(component.exists()).toBe(true);
  });
});

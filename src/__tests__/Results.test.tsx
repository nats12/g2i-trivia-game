import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as testUtils from "../testUtils/index";
import { Results } from "../components/screens/Results";

configure({ adapter: new Adapter() });

const setup = (state: {}) => {
  const store = testUtils.storeFactory(state);
  const wrapper = shallow(
    <Results
      results={store.getState().results}
      error={store.getState().errors}
    />
  );
  return wrapper;
};

describe("renders", () => {
  let wrapper: any;
  const results = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  beforeEach(() => {
    wrapper = setup({ results, errors: null });
  });
  test("Results component renders without error", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-results");
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

  test("Results component doesn't render", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-results");
    expect(component.exists()).toBe(false);
  });

  // test("Loading component renders", () => {
  //   const component = testUtils.findByTestAttr(wrapper, "component-loading");
  //   expect(component.exists()).toBe(false);
  // });

  test("Error component renders", () => {
    const component = testUtils.findByTestAttr(wrapper, "component-error");
    expect(component.exists()).toBe(true);
  });
});

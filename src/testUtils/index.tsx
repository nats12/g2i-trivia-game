import { createStore } from "redux";
import rootReducer from "../reducers/index";

/**
 *
 * @param initialState
 */
export const storeFactory = (initialState: any) => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
// eslint-disable-next-line import/prefer-default-export
export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};

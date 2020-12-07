import { IAction, IResultsState } from "../../interfaces/StateInterfaces";
import { actionTypes } from "../actions/results";

const initialState: IResultsState = {
  results: [],
};

/**
 * Results reducer
 * @param state the store's state
 * @param action action containing type and payload
 */
export const resultsReducer = (
  state: IResultsState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS:
      const results: {}[] = [...state.results];
      results.push(action.payload);

      return {
        ...state,
        results: results,
      };
    case actionTypes.RESET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

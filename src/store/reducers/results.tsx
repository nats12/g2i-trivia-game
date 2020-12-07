import { IAction, IResultsState } from "../../interfaces/StateInterfaces";
import { actionTypes } from "../actions/results";

const initialState: IResultsState = {
  results: [],
};

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

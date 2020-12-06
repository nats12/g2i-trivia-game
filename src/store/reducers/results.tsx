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
    default:
      return state;
  }
};

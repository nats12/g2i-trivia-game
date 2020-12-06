import { IAction, IErrorsState } from "../../interfaces/StateInterfaces";
import { actionTypes } from "../actions/error";

const initialState: IErrorsState = {
  error: null,
};

export const errorsReducer = (
  state: IErrorsState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

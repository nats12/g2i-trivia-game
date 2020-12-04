import { Action } from "history";
import { actionTypes } from "../actions/questions";

const initialState: IState = {
  questions: [],
};

export type IState = {
  questions: [];
};

type IAction = {
  type: string;
  payload: [];
};

export const questionsReducer = (
  state: IState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

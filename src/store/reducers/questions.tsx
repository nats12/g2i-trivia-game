import { Action } from "history";
import { IQuestionsState } from "../../types/StateTypes";
import { actionTypes } from "../actions/questions";

const initialState: IQuestionsState = {
  questions: [],
  currentQuestion: 0,
};

type IAction = {
  type: string;
  payload: [];
};

export const questionsReducer = (
  state: IQuestionsState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case actionTypes.UPDATE_CURRENT_QUESTION:
      return {
        ...state,
        questions: state.questions,
        currentQuestion: state.currentQuestion + 1,
      };
    default:
      return state;
  }
};

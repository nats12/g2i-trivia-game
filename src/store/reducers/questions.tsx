import { IAction, IQuestionsState } from "../../interfaces/StateInterfaces";
import { actionTypes } from "../actions/questions";

const initialState: IQuestionsState = {
  questions: [],
  currentQuestion: 0,
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
    case actionTypes.RESET_CURRENT_QUESTION:
      return {
        ...state,
        questions: state.questions,
        currentQuestion: 0,
      };
    default:
      return state;
  }
};

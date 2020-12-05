import { Action } from "history";
import { IQuestionsState } from "../../interfaces/StateInterfaces";
import { actionTypes } from "../actions/questions";

const initialState: IQuestionsState = {
  questions: [],
  currentQuestion: 0,
  results: [],
};

type IAction = {
  type: string;
  payload: any;
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
    case actionTypes.UPDATE_RESULTS:
      const results: {}[] = [...state.results];
      results.push(action.payload);

      return {
        ...state,
        questions: state.questions,
        results,
      };
    default:
      return state;
  }
};

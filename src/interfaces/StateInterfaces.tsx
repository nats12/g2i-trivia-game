export interface IQuestionsState {
  questions: [];
  currentQuestion: number;
}

export interface IResultsState {
  results: [];
}

export interface IErrorsState {
  error: null | string;
}

export interface IAction {
  type: string;
  payload: [];
}

export interface ICombinedStates {
  questions?: { questions: []; currentQuestion: number };
  results?: { results: [] };
  errors?: { error: null | string };
}

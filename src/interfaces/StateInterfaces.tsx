export interface IQuestionsState {
  questions: [];
  currentQuestion: number;
  results: [];
}

export interface IErrorsState {
  error: null | string;
}

export interface IAction {
  type: string;
  payload: [];
}

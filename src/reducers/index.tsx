import { combineReducers } from "redux";
import { questionsReducer } from "../store/reducers/questions";
import { errorsReducer } from "../store/reducers/error";
import { resultsReducer } from "../store/reducers/results";

export default combineReducers({
  questions: questionsReducer,
  errors: errorsReducer,
  results: resultsReducer,
});

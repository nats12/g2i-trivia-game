import { combineReducers } from "redux";
import { questionsReducer } from "../store/reducers/questions";
import { errorsReducer } from "../store/reducers/error";

export default combineReducers({
  questions: questionsReducer,
  errors: errorsReducer,
});

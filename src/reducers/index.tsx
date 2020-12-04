import { combineReducers } from "redux";
import { questionsReducer } from "../store/reducers/questions";

export default combineReducers({
  questions: questionsReducer,
});

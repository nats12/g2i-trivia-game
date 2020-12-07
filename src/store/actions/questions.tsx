import axios from "axios";
import Question from "../../models/Question";
import { actionTypes as errorActionTypes } from "../actions/error";

export const actionTypes = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
  UPDATE_CURRENT_QUESTION: "UPDATE_CURRENT_QUESTION",
  RESET_CURRENT_QUESTION: "RESET_CURRENT_QUESTION",
};

/**
 * Fetches quiz questions from the API and creates Quiz class objects which are then
 * stored in the redux store within an array
 */
export const fetch = () => {
  return async (dispatch: any) => {
    try {
      const response: any = await axios
        .get(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        )
        .then((res) => {
          return res;
        })
        .catch((err) => {
          dispatch({
            type: errorActionTypes.SET_ERROR,
            payload: err.message,
          });
        });

      const resData = await response.data.results;

      if (response.status !== 200) {
        dispatch({
          type: errorActionTypes.SET_ERROR,
          payload: response.statusText,
        });
      }

      const loadedQuestions = [];
      let questionID = 1;

      for (const question of resData) {
        loadedQuestions.push(
          new Question(
            questionID,
            question.category,
            question.type,
            question.difficulty,
            question.question,
            question.correct_answer,
            question.incorrect_answers
          )
        );
        questionID++;
      }

      dispatch({
        type: actionTypes.FETCH_QUESTIONS,
        payload: loadedQuestions,
      });
    } catch (err) {
      dispatch({
        type: errorActionTypes.SET_ERROR,
        payload: "App error",
      });
    }
  };
};

/**
 * Dispatches the update_current_question type to the questions reducer
 * This will always result in the current question being incremented by one
 */
export const updateCurrentQuestion = () => {
  return { type: actionTypes.UPDATE_CURRENT_QUESTION };
};

/**
 * Dispatches the reset_current_question type to the questions reducer
 * This will always result in the current question being reset to 0
 */
export const resetCurrentQuestion = () => {
  return { type: actionTypes.RESET_CURRENT_QUESTION };
};

import axios from "axios";
import Question from "../../models/Question";

export const actionTypes = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
  UPDATE_CURRENT_QUESTION: "UPDATE_CURRENT_QUESTION",
  UPDATE_RESULTS: "UPDATE_RESULTS",
};

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
        .catch((err) => console.log(err));

      const resData = await response.data.results;
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
      console.log(err);
    }
  };
};

export const updateCurrentQuestion = () => {
  return { type: actionTypes.UPDATE_CURRENT_QUESTION };
};

export const updateResults = (
  id: number,
  question: string,
  correct_answer: string,
  given_answer: string
) => {
  const ans = { id, question, correct_answer, given_answer };

  return { type: actionTypes.UPDATE_RESULTS, payload: ans };
};

import axios from "axios";

export const actionTypes = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
};

export const fetch = () => {
  try {
    const response = axios
      .get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    return {
      type: actionTypes.FETCH_QUESTIONS,
      payload: ["test"],
    };
  } catch (err) {
    console.log(err);
  }
};

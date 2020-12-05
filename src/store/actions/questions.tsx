import axios from "axios";

export const actionTypes = {
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
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

      dispatch({
        type: actionTypes.FETCH_QUESTIONS,
        payload: resData,
      });
      // return {
      //   type: actionTypes.FETCH_QUESTIONS,
      //   payload: resData.results,
      // };
    } catch (err) {
      console.log(err);
    }
  };
};

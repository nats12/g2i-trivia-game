export const actionTypes = {
  UPDATE_RESULTS: "UPDATE_RESULTS",
  RESET_RESULTS: "RESET_RESULTS",
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

export const resetResults = () => {
  return { type: actionTypes.RESET_RESULTS, payload: [] };
};

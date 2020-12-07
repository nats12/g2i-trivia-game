export const actionTypes = {
  UPDATE_RESULTS: "UPDATE_RESULTS",
  RESET_RESULTS: "RESET_RESULTS",
};

/**
 * Dispatches a new result (answered question) to the results reducer
 * to add to the results array
 * @param id the question id
 * @param question the question text
 * @param correct_answer the question's correct answer
 * @param given_answer the user's answer
 */
export const updateResults = (
  id: number,
  question: string,
  correct_answer: string,
  given_answer: string
) => {
  const ans = { id, question, correct_answer, given_answer };

  return { type: actionTypes.UPDATE_RESULTS, payload: ans };
};

/**
 * Dispatches the reset_results type to the results reducer
 * This results in the results array being reset to empty
 */
export const resetResults = () => {
  return { type: actionTypes.RESET_RESULTS, payload: [] };
};

export const actionTypes = {
  SET_ERROR: "SET_ERROR",
};

/**
 * Dispatches an error message to the redux store.
 * @param message the error message
 */
export const setError = (message: string) => {
  return { type: actionTypes.SET_ERROR, payload: message };
};

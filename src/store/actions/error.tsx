export const actionTypes = {
  SET_ERROR: "SET_ERROR",
};

export const setError = (message: string) => {
  return { type: actionTypes.SET_ERROR, payload: message };
};

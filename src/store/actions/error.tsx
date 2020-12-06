export const actionTypes = {
  SET_ERROR: "SET_ERROR",
};

export const setError = () => {
  const error = {};
  return { type: actionTypes.SET_ERROR, payload: error };
};

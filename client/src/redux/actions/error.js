import { CLEAR_ERRORS, GET_ERRORS } from "./types";

export const returnErrors = (message, status, param) => {
  return {
    type: GET_ERRORS,
    payload: {
      message,
      status,
      param,
    },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  message: null,
  status: null,
  param: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        param: action.payload.param,
      };
    case CLEAR_ERRORS:
      return {
        message: null,
        status: null,
        param: null,
      };
    default:
      return state;
  }
};

export default errorReducer;

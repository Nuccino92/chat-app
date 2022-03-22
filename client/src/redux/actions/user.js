import { registerRequest } from "../../api/register";
import { returnErrors } from "./error";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERR,
  LOGOUT_SUCCESS,
} from "./types";

export const registerUser = (userData) => async (dispatch) => {
  await registerRequest(userData)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      dispatch(returnErrors(null, null, null));
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch(
        returnErrors(
          // pulled out this way because of express validator
          err.response.data[0].msg,
          err.response.status,
          err.response.data[0].param
        )
      );
    });
};

export const logInUser = () => {};

export const loadUser = () => {};

export const logOutUser = () => {};

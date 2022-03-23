import { logInRequest } from "../../api/logIn";
import { registerRequest } from "../../api/register";
import { userAuthRequest } from "../../api/users";
import { tokenConfig } from "../../config/token";
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

export const logInUser = (userData) => async (dispatch) => {
  await logInRequest(userData)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      dispatch(returnErrors(null, null, null));
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(
        returnErrors(
          err.response.data.msg,
          err.response.status,
          err.response.data.param
        )
      );
    });
};

export const loadUser = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  await userAuthRequest(tokenConfig())
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: AUTH_ERR });
    });
};

export const logOutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

import { combineReducers } from "redux";

import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  userReducer,
  errorReducer,
  chatReducer,
});

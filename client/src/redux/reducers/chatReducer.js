import {
  GET_MESSAGES,
  GET_CHAT,
  DELETE_CHAT,
  GET_PARTICIPANT,
} from "../actions/types";

const initialState = {
  chat: null,
  messages: [],
  participant: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT:
      return {
        ...state,
        chat: action.payload,
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case DELETE_CHAT:
      return {
        chat: null,
        messages: [],
      };
    case GET_PARTICIPANT:
      return {
        ...state,
        participant: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;

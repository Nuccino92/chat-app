import {
  deleteConversationRequest,
  getConversationMessagesRequest,
  getConversationRequest,
} from "../../api/conversation";
import { DELETE_CHAT, GET_CHAT, GET_MESSAGES } from "../actions/types";

export const getConversation = (id1, id2) => async (dispatch) => {
  await getConversationRequest(id1, id2)
    .then(async (res) => {
      dispatch({ type: GET_CHAT, payload: res.data });
      await getConversationMessagesRequest(res.data.id)
        .then((messages) => {
          dispatch({ type: GET_MESSAGES, payload: messages.data });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteConversation = (userID1, userID2) => async (dispatch) => {
  await deleteConversationRequest(userID1, userID2)
    .then(() => {
      dispatch({ type: DELETE_CHAT });
    })
    .catch((err) => {
      console.log(err);
    });
};

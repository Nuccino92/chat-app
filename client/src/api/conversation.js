import axios from "axios";

const url = `${process.env.REACT_APP_SERVER_URL}conversation/`;

export const getUserConversations = (id) =>
  axios({
    method: "get",
    url: url + "all/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getConversationRequest = (id1, id2) =>
  axios({
    method: "get",
    url: url + "find/" + id1 + "/" + id2,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const startConversationRequest = (id, body) =>
  axios({
    method: "post",
    url: url + "start/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      user2: body,
    },
  });

export const getConversationMessagesRequest = (id) =>
  axios({
    method: "get",
    url: url + "messages/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const deleteConversationRequest = (id1, id2) =>
  axios({
    method: "delete",
    url: url + "delete/" + id1 + "/" + id2,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

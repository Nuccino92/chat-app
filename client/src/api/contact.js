import axios from "axios";

const url = "https://calm-shore-98024.herokuapp.com/contact/";

export const getAllContactsRequest = (id) =>
  axios({
    method: "get",
    url: url + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getConfirmedContactsRequest = (id) =>
  axios({
    method: "get",
    url: url + "confirmed/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getPendingContactsRequest = (id) =>
  axios({
    method: "get",
    url: url + "pending/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const createContactRequest = (id, body) =>
  axios({
    method: "post",
    url: url + "create/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      user2: body,
    },
  });

export const acceptContactRequest = (id) =>
  axios({
    method: "put",
    url: url + "accept/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const deleteContactRequest = (id, id2) =>
  axios({
    method: "delete",
    url: url + "decline/" + id + "/" + id2,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

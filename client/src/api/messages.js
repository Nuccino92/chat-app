import axios from "axios";

const url = `${process.env.REACT_APP_SERVER_URL}messages/`;

//POST
export const createMessageRequest = (body) =>
  axios({
    method: "post",
    url: url + "create/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      body,
    },
  });

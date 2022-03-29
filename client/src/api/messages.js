import axios from "axios";

const url = "https://calm-shore-98024.herokuapp.com/messages/";

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

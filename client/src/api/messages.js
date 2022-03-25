import axios from "axios";

const url = "http://localhost:8000/messages/";

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

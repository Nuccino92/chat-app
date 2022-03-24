import axios from "axios";

const url = "http://localhost:8000/conversation/";

export const getUserConversations = (id) =>
  axios({
    method: "get",
    url: url + "all/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

//GET
export const getConversationRequest = () => {
  //PARAMS (USER1, USER2) 2 PARAMS
  console.log("contact found");
};

//POST
export const startConversationRequest = (body) => {
  //PARAMS
  console.log("convo started");
};

//GET
export const getConversationMessagesRequest = () => {
  //PARAMS
  console.log("got messages");
};

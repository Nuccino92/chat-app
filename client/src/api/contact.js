import axios from "axios";

const url = "http://localhost:8000/contact/";

//GET
export const getAllContactsRequest = (id) =>
  axios({
    method: "get",
    url: url + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

//GET
export const getConfirmedContactsRequest = () => {
  //PARAMS
  console.log("get confirmed contacts");
};

//GET
export const getPendingContactsRequest = () => {
  //PARAMS
  console.log("got pending contacts");
};

//POST
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

//PUT
export const acceptContactRequest = (body) => {
  //PARAMS
  console.log("contact accepted");
};

//DELETE
export const deleteContactRequest = (body) => {
  //PARAMS
  console.log("contact deleted");
};

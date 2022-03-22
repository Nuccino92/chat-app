import axios from "axios";

const url = "http://localhost:8000/contact/";

//GET
export const getAllContactsRequest = () => {
  //PARAMS
  console.log("all contacts");
};

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
export const createContactRequest = (body) => {
  //PARAMS
  console.log("contact created");
};

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

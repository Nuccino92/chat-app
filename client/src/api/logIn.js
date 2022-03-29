import axios from "axios";

const url = "https://calm-shore-98024.herokuapp.com/logIn/";

export const logInRequest = (body) => axios.post(url, body);

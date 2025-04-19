import axios from "axios";

const url = `${process.env.REACT_APP_SERVER_URL}/logIn/`;

export const logInRequest = (body) => axios.post(url, body);

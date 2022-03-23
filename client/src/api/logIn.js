import axios from "axios";

const url = "http://localhost:8000/logIn/";

export const logInRequest = (body) => axios.post(url, body);

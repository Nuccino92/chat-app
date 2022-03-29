import axios from "axios";

const url = "https://calm-shore-98024.herokuapp.com/register/";

export const registerRequest = (body) => axios.post(url, body);

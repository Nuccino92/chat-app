import axios from "axios";

const url = "https://calm-shore-98024.herokuapp.com/user/";

export const userAuthRequest = (headers) => axios.get(url + "auth", headers);

export const updateUserRequest = (id, data) =>
  axios({
    method: "put",
    url: url + `/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data,
  });

export const getUserRequest = (id) =>
  axios({
    method: "get",
    url: url + "find/" + id,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

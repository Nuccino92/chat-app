export const tokenConfig = () => {
  // grabbing token from userReducer
  const token = localStorage.getItem("token");
  const config = {
    headers: {},
  };
  //if token has no headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

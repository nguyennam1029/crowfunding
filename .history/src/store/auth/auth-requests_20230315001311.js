const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  return axios.post("/users", {
    ...data,
  });
};

export const requestPushCurrentUser = (data) => {
  return axios.post("/currentUser", {
    ...data,
  });
};
export const requestGetUser = () => {
  return axios.get(`http://localhost:3000/currentUser`);
};
// export const requestAuthLogin = (data) => {
//   return axios.post("/auth/login", {
//     ...data,
//   });
// };

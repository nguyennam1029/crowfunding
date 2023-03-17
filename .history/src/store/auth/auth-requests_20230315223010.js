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
export const requestGetCurrentUser = () => {
  return axios.get(`/currentUser`);
};

export const requestGetUsers = () => {
  return axios.get(`/users`);
};
// export const requestAuthLogin = (data) => {
//   return axios.post("/auth/login", {
//     ...data,
//   });
// };

const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  return axios.post("/users", {
    ...data,
  });
};
// export const requestAuthLogin = (data) => {
//   return axios.post("/auth/login", {
//     ...data,
//   });
// };

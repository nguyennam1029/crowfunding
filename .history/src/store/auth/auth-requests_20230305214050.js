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
export const requestAddCampaign = (data) => {
  return axios.post("/campaigns", {
    ...data,
  });
};

export const requestGetCampaign = (data) => {
  return axios.get("/campaigns", {
    ...data,
  });
};

// import axios from "api/axios";
import axios from "axios";
const url = "https://server-crowfunding.vercel.app/campaigns";
// export const requestAddCampaign = (data) => {
//   return axios.post("http://localhost:3000/campaigns", {
//     ...data,
//   });
// };

// export const requestGetCampaign = (query = "") => {
//   return axios.get(`http://localhost:3000/campaigns?q=${query}`);
// };

// export const requestDeleteCampaign = (id) => {
//   return axios.request({
//     method: "DELETE",
//     url: `http://localhost:3000/campaigns/${id}`,
//   });
// };

// export const requestUpdateCampaign = (id, data) => {
//   console.log("data ", data);
//   return axios.put(`http://localhost:3000/campaigns/${id}`, {
//     ...data,
//   });
// };

export const requestAddCampaign = (data) => {
  return axios.post("https://server-crowfunding.vercel.app/campaigns", {
    ...data,
  });
};

export const requestGetCampaign = (query = "") => {
  return axios.get(
    `https://server-crowfunding.vercel.app/campaigns?q=${query}`
  );
};

export const requestDeleteCampaign = (id) => {
  return axios.request({
    method: "DELETE",
    url: `https://server-crowfunding.vercel.app/campaigns/${id}`,
  });
};

export const requestUpdateCampaign = (id, data) => {
  console.log("data ", data);
  return axios.put(`https://server-crowfunding.vercel.app/campaigns/${id}`, {
    ...data,
  });
};
// export const requestSearchCampaign = (query = "") => {
//   console.log("query ", query);
//   return axios.request({
//     method: "GET",
//     url: `http://localhost:3000/campaigns?q=${query}`,
//   });
// };

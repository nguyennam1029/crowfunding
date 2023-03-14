import axios from "api/axios";
import { axios as axiostest } from "axios";

export const requestAddCampaign = (data) => {
  return axios.post("/campaigns", {
    ...data,
  });
};

export const requestGetCampaign = () => {
  return axios.get("/campaigns");
};
export const requestGetCampaignDetail = (id) => {
  return axios.request({
    method: "GET",
    url: `http://localhost:3000/campagins/${id}`,
  });
};

export const requestDeleteCampaign = (id) => {
  return axiostest.request({
    method: "DELETE",
    url: `http://localhost:3000/campagins/${id}`,
  });
  // return axiostest.delete(`http://localhost:3000/campagins/${id}`);
};

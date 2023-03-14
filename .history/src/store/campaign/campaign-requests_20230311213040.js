// import axios from "api/axios";
import axios from "axios";

export const requestAddCampaign = (data) => {
  return axios.post("http://localhost:3000/campaigns", {
    ...data,
  });
};

export const requestGetCampaign = () => {
  return axios.get("http://localhost:3000/campaigns");
};

export const requestDeleteCampaign = (id) => {
  return axios.request({
    method: "DELETE",
    url: `http://localhost:3000/campaigns/${id}`,
  });
};

export const requestUpdateCampaign = (id) => {
  console.log("id request update", id);
  return axios.request({
    method: "UPDATE",
    url: `http://localhost:3000/campaigns/${id}`,
  });
};

import axios from "api/axios";

export const requestAddCampaign = (data) => {
  return axios.post("/campaigns", {
    ...data,
  });
};

export const requestGetCampaign = () => {
  return axios.get("/campaigns");
};

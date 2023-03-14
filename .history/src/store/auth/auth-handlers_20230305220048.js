import axios from "api/axios";
import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { saveToken } from "utils/auth";
import {
  requestAddCampaign,
  requestAuthLogin,
  requestAuthRegister,
  requestGetCampaign,
} from "./auth-requests";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Created new account successfully");
    }
  } catch (error) {
    console.log(error);
  }
}
// function* handleAuthLogin({ payload }) {
//   try {
//     const response = yield call(requestAuthLogin, payload);
//     console.log("function*handleAuthLogin ~ response", response);
//     // accessToken, refreshToken
//     if (response.data.accessToken && response.data.refreshToken) {
//       saveToken(response.data.accessToken, response.data.refreshToken);
//     }
//     yield 1;
//   } catch (error) {}
// }

function* handleAddCampaign({ payload }) {
  console.log("payload", payload);
  try {
    const response = yield call(requestAddCampaign, payload);
    if (response.status === 201) {
      toast.success("add new campaign success");
    }
  } catch (error) {
    toast.error("don't add new campaign");
  }
}

function* handleGetCampaign({ payload }) {
  try {
    const response = yield call(requestGetCampaign);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
export { handleAddCampaign, handleGetCampaign };

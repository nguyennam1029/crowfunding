import axios from "api/axios";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { saveToken } from "utils/auth";
import {
  requestAddCampaign,
  requestAuthLogin,
  requestAuthRegister,
  requestGetCampaign,
} from "./auth-requests";
import { setCampaign } from "../campaign/campaign-slice";

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

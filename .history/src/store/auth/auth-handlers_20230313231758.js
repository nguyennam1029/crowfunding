import { toast } from "react-toastify";
import { call } from "redux-saga/effects";

import { requestAuthRegister } from "./auth-requests";

function* handleAuthRegister(action) {
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

function* handleAuthLogin({ payload }) {}
function* handleAuthLogOut({ payload }) {}
function* handleAuthFlow({ payload }) {}
export {
  handleAuthRegister,
  handleAuthLogin,
  handleAuthLogOut,
  handleAuthFlow,
};

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

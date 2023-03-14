import { take } from "lodash";
import { toast } from "react-toastify";
import { call, fork } from "redux-saga/effects";

import { requestAuthRegister } from "./auth-requests";
import { authLogin } from "./auth-slice";

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

function* handleAuthLogin({ payload }) {
  console.log("login", payload);
  yield 1;
}
function* handleAuthLogOut() {
  console.log("logOut");
  yield 1;
}
function* watchLoginFlow() {
  const action = yield take(authLogin.type);
  yield fork(handleAuthLogin, action.payload);
}
export {
  handleAuthRegister,
  handleAuthLogin,
  handleAuthLogOut,
  watchLoginFlow,
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

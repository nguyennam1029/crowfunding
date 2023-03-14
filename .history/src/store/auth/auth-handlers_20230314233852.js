import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { call, fork, put, take } from "redux-saga/effects";

import { requestAuthRegister, requestGetUser } from "./auth-requests";
import {
  authLogin,
  authLoginSuccess,
  authLogOut,
  getUser,
  setUser,
} from "./auth-slice";

function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);

    yield put(authLogin(payload));
    if (response.status === 201) {
      localStorage.setItem("access_token", "success");

      toast.success("Created new account successfully");
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthLogin(payload) {
  try {
    localStorage.setItem("access_token", payload.accessToken);
    yield put(authLoginSuccess(payload));
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthLogOut() {
  localStorage.removeItem("access_token");
  yield 1;
}

/// ĐẦU TIÊN NÓ SẺ CHẠY VÀO FLOW SAU ĐÓ CHẠY VÀO ACTION VÀ ĐỢI ĐỂ LẤY ACTION SAU ĐÓ CHUYỀN VÀO HÀM LOGIN, sau đó đứng đợi ngay sau đó là LogOut nên khi bấm login lần nữa sẻ k đc
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem("access_token");
    if (!isLoggedIn) {
      const action = yield take(authLogin);
      console.log("action ", action.payload);
      yield fork(handleAuthLogin, action.payload);
    }

    yield take(authLogOut);
    yield call(handleAuthLogOut);
    //DỢI CALL LÀM XONG MỚI ĐI TIÊP
  }
}
export {
  handleAuthRegister,
  handleAuthLogin,
  handleAuthLogOut,
  watchLoginFlow,
  handleGetUser,
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

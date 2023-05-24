import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { call, fork, put, take } from "redux-saga/effects";

import {
  requestAuthRegister,
  requestGetCurrentUser,
  requestGetUsers,
  requestPushCurrentUser,
} from "./auth-requests";
import {
  authLogin,
  authLoginSuccess,
  authLogOut,
  authSignUp,
  getErrorr,
  getUser,
  setCurrentUser,
  setUser,
} from "./auth-slice";

function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);

    // yield put(authLogin(payload));
    if (response.status === 201) {
      toast.success("Created new account successfully");
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin(payload) {
  try {
    const response = yield call(requestGetUsers);
    console.log("resspon ", response.data);
    const accountName = response.data.find(
      (user) =>
        user.email === payload.email && user.password === payload.password
    );
    if (accountName) {
      localStorage.setItem("access_token", accountName.fullName);

      yield put(authLoginSuccess(payload));
      toast.success("Login successfully");
    } else {
      toast.warning("please check your email and password");
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthSignUp(payload) {
  try {
    const { data } = yield call(requestPushCurrentUser, payload);
    yield put(authLoginSuccess(data));
    localStorage.setItem("access_token", data.fullName);
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthLogOut() {
  // yield take(authLogOut);

  localStorage.removeItem("access_token");
}

/// ĐẦU TIÊN NÓ SẺ CHẠY VÀO FLOW SAU ĐÓ CHẠY VÀO ACTION VÀ ĐỢI ĐỂ LẤY ACTION SAU ĐÓ CHUYỀN VÀO HÀM LOGIN, sau đó đứng đợi ngay sau đó là LogOut nên khi bấm login lần nữa sẻ k đc
function* watchSignUpFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem("access_token");
    if (!isLoggedIn) {
      const action = yield take(authSignUp);
      yield fork(handleAuthSignUp, action.payload);
    }

    yield take(authLogOut);
    yield call(handleAuthLogOut);
    //DỢI CALL LÀM XONG MỚI ĐI TIÊP
  }
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem("access_token");
    if (!isLoggedIn) {
      const action = yield take(authLogin);

      yield fork(handleAuthLogin, action.payload);
    }

    // yield take(authLogOut);
    // yield call(handleAuthLogOut);
    //DỢI CALL LÀM XONG MỚI ĐI TIÊP
  }
}

function* handleGetCurrentUser() {
  try {
    const response = yield call(requestGetCurrentUser);
    const { data } = response;
    yield put(setCurrentUser(data));
  } catch (error) {
    console.log(error);
  }
}

export {
  handleAuthRegister,
  handleAuthLogin,
  handleAuthSignUp,
  handleAuthLogOut,
  watchLoginFlow,
  watchSignUpFlow,
  handleGetCurrentUser,
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

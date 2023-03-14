import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { call, fork, put, take } from "redux-saga/effects";

import { requestAuthRegister } from "./auth-requests";
import { authLogin, authLoginSuccess, authLogOut } from "./auth-slice";

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

function* handleAuthLogin(payload) {
  try {
    localStorage.setItem("access_token", "balbla");
    yield put(
      authLoginSuccess({
        id: 1,
        email: "nam@gmail.com",
        password: "nam1234rg",
      })
    );
    yield put(push("/register"));
  } catch (error) {}
}
function* handleAuthLogOut() {
  console.log("logOut");
  localStorage.removeItem("access_token");
  yield 1;
}

/// ĐẦU TIÊN NÓ SẺ CHẠY VÀO FLOW SAU ĐÓ CHẠY VÀO ACTION VÀ ĐỢI ĐỂ LẤY ACTION SAU ĐÓ CHUYỀN VÀO HÀM LOGIN, sau đó đứng đợi ngay sau đó là LogOut nên khi bấm login lần nữa sẻ k đc
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem("access_token");
    if (!isLoggedIn) {
      const action = yield take(authLogin);
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

import { fork, takeLatest } from "redux-saga/effects";
import {
  handleAuthLogOut,
  handleAuthRegister,
  handleGetCurrentUser,
  watchLoginFlow,
  // watchLoginFlow,
  watchSignUpFlow,
} from "./auth-handlers";
import { authLogOut, authRegister, getUser } from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(getUser.type, handleGetCurrentUser);
  yield fork(watchSignUpFlow);
  yield fork(watchLoginFlow);
  yield takeLatest(authLogOut.type, handleAuthLogOut);

  // yield takeLatest(authLogin.type, handleAuthLogin);
}

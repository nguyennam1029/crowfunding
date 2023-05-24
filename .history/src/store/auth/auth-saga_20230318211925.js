import { fork, takeLatest } from "redux-saga/effects";
import {
  handleAuthLogOut2,
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
  yield takeLatest(authLogOut.type, handleAuthLogOut2);
  yield fork(watchSignUpFlow);
  yield fork(watchLoginFlow);
  // yield fork(handleAuthLogOut);

  // yield takeLatest(authLogin.type, handleAuthLogin);
}

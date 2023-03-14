import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootSaga from "./rootSaga";
import { reducer } from "./reducers";
import { routerMiddleware } from "connected-react-router";
import { history } from "utils/history";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: (gDM) =>
    gDM().concat(logger, sagaMiddleware, routerMiddleware(history)),
});
sagaMiddleware.run(rootSaga);

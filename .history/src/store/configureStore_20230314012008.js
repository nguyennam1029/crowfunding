import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootSaga from "./rootSaga";
import { reducer } from "./reducers";
// import { routerMiddleware } from "connected-react-router";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
// import { history } from "utils/history";
const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history: createBrowserHistory(),
});
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware, routerMiddleware),
});
sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);

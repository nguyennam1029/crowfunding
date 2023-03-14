import authReducer from "./auth/auth-slice";
import campaignReducer from "./campaign/campaign-slice";
// import { connectRouter } from "connected-react-router";
// import { history } from "utils/history";

import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});
const { combineReducers } = require("@reduxjs/toolkit");
export const reducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  router: routerReducer,
});

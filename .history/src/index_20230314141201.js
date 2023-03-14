import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ConnectedRouter } from "connected-react-router";
import { history } from "utils/history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <HistoryRouter history={history}> */}
      {/* <ConnectedRouter history={history}> */}
      <App />
      <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
      {/* </ConnectedRouter> */}
      {/* </HistoryRouter> */}
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
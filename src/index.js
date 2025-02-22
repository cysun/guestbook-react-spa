import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { setEntries } from "./reduxActions";
import entries from "./reduxReducer";

import axios from "axios";

const store = createStore(
  entries,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

axios.get("/api").then(res => store.dispatch(setEntries(res.data)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

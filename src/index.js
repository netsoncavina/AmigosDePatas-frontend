import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
// import "./index.css";

// const theme = localStorage.getItem("theme");
// const [theme, setTheme] = useState(localStorage.getItem("theme"));
// if (theme === "dark") {
//   document.body.classList.add("dark");
// } else {
//   document.body.classList.remove("dark");
// }

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

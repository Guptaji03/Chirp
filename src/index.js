import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// import App from "./App";

import { store } from "./app/store";
import "./features/CSS/index.module.css";
import Signupform from "./features/Signup/Signupform";



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <Signupform/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

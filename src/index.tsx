import React from "react";
import ReactDOM from "react-dom/client";
import "styles/1.global.css";
import "styles/2.conf.css";
import "styles/4.style.css";
import "styles/5.common.css";
import "styles/6.fonts.css";
import Transport from "site-transport/Root";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Transport/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

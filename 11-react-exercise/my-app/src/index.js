import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./componentes/Dashboard/Dashboard";
import DashboardCls from "./componentes/Dashboard/DashboardCls";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App initialCount={5} />
    <App initialCount={3} />
    <Dashboard />
    <DashboardCls />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

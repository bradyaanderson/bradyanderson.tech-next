import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assests/stylesheets/index.scss";
import IndexRouter from "./IndexRouter";

/** Application root */
ReactDOM.render(
  <React.StrictMode>
    <IndexRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

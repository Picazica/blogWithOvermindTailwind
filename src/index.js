import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import { overmind } from "./overmind/index";
import { Provider } from "overmind-react";

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

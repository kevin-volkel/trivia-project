import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TriviaProvider } from "./util/context";
import "./styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <TriviaProvider>
      <Router>
        <App />
      </Router>
    </TriviaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

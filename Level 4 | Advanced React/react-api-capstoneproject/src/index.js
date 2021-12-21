import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom";
import { DrinkContextProvider } from "./DrinkContext";

import App from "./components/App"
import "./index.css"

ReactDOM.render(
  <Router>
    <DrinkContextProvider>
    <App/>
    </DrinkContextProvider>
  </Router>,
  document.getElementById("root")
)

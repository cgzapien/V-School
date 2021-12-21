import React from "react"
import ReactDOM from "react-dom"
import {BountyHunterProvider} from "./bountyHunterContext"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./components/App"
import "./index.css"

ReactDOM.render(
  <Router>
    <BountyHunterProvider>
      <App/> 
    </BountyHunterProvider>
  </Router>,
  document.getElementById("root"))
import React from "react";
import {Link, Switch, Route} from "react-router-dom"

import HomePage from "./Home";
import Search from "./Search";
import DrinkDetails from "./DrinkDetails";

function App() {
  return (
    <div>
      <h1 className="appTitle">World of Drinks!</h1>
      <ul className="navBar">
        <li><Link to="/" style={{ textDecoration: 'none' , color: "black"}}>Home</Link></li>
        <li><Link to="/search" style={{ textDecoration: 'none', color: "black" }}>Search</Link></li>
        <li><Link to="/drinkdetails" style={{ textDecoration: 'none', color: "black" }}>Drink Details</Link></li>
      </ul>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route  path="/search"><Search/></Route>
        <Route  path="/drinkdetails/:drinkId"><DrinkDetails/></Route>
      </Switch>
    </div>
  )
}

export default App
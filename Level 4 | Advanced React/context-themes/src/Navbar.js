import React, {useContext} from "react";
import {ThemeContext} from "./ThemeProvider"

function Navbar() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme}-theme`}>
      <ul className="navBarList">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
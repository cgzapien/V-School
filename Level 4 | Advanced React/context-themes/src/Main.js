import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Main() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className="main">
      {/* <button className={`${theme}-theme`} onClick={toggleTheme}>
        Switch Theme
      </button> */}
      {/* <label htmlFor="themes">Choose a theme:</label> */}
      <h1 id="themeHeader">Choose Your Theme:</h1>
      <select onChange={toggleTheme} name="themes"  className={`${theme}-theme`} id="themes" style={{width: "100px"}}>
        <option >Light</option>
        <option>Dark</option>
      </select>
    </div>
  )
}

export default Main
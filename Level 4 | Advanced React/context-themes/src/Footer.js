import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";

function Footer() {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className="footer" >
      <ul className={`${theme}-theme`}>
        <li>This Amazing Footer</li>
      </ul>
    </footer>
  )
}
export default Footer
//import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import Logo from "../Logo"
import { 
  navBarSection,
  navBarWrapper,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./navbar.module.css"

const NavBar = () => {
  return(
    <nav className={navBarWrapper}>
      <div className={navBarSection}>
        <Logo/>
      </div>
      <div className={navBarSection}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}> About </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}> Blog </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
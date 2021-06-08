import React from "react"
import { Link } from "gatsby"
import LogoWord from "../../logo.mdx"
import { 
  logoWrapper,
  logoLink,
 } from "./logo.module.css"

const Logo = () => {
  return(
    <div className={logoWrapper}>
      <Link to="/" className={logoLink}>
        <LogoWord/>
      </Link>
    </div>
  )
}

export default Logo;
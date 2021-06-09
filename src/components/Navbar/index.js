//import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import NavbarLinks from "./NavbarLinks"
import Logo from "../Logo"

/* 전체 Navigation을 감싸는 wrapper */
const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  z-index: 5;
  border-bottom: 1px solid;
`

/* 전체 Navigation을 구성하는 각 Section들 */
const NavSection = styled.div`
  display: flex;
  align-items: center;
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px){
    display: flex;
  }
`
const NavBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-widht: 768px){
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: 10px;
  }
`

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query MenuLinkQuery {
      site {
        siteMetadata{
          menuLinks{
            name
            link
          }
        }
      }
    }
  `)
  
  /* Navigation Bar에 있는 Link를 열고 닫는 상태를 나타냄 */
  const [navbarOpen, setNavbarOpen] = useState(false)

  return(
    <Navigation>
      <NavSection>
        <Logo/>
      </NavSection>
      <NavSection>
        <Toggle navbarOpen={navbarOpen} onClick={()=>setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <NavBox>
            <NavbarLinks data={data.site.siteMetadata.menuLinks} />
          </NavBox>
        ) : (
          <NavBox open>
            <NavbarLinks data={data.site.siteMetadata.menuLinks} />
          </NavBox>
        )}
      </NavSection>
    </Navigation>
  )
}

export default Navbar;
//import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import NavbarLinks from "./NavbarLinks"
import Logo from "../Logo"

/* 전체 Header를 감싸는 wrapper */
const HeaderWrapper = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  z-index: 5;
  border-bottom: 1px solid;
  box-shadow: 0 0 0.4rem 0 black;
`

/* Header의 위쪽 part */
const MainHeader = styled.div`
  padding: 0.3rem;
  display: flex;
`

/* Header의 아래쪽 part */
const SubHeader = styled.div`
  padding: 0.2rem;
  display: flex;
`

/* 전체 Navigation을 구성하는 각 Section들 */
const NavSection = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`

const Header = () => {
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
  
  return(
    <HeaderWrapper>
      <MainHeader>
        <NavSection>
          <Logo/>
        </NavSection>
      </MainHeader>
      <SubHeader>
        <NavSection>
          <NavbarLinks data={data.site.siteMetadata.menuLinks}/>
        </NavSection>
      </SubHeader>
    </HeaderWrapper>
  )
}

export default Header;
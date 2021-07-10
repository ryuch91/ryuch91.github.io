//import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import cx from "classnames"
import { useStaticQuery, graphql } from "gatsby"

import useWindowScrollDirection from "~hooks/useWindowScrollDirection"
import NavbarLinks from "./NavbarLinks"
import Burger from "./Burger"
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
  max-height: 80px;
  transition: top 0.6s ease;

  &.hide {
    top: -6rem;
  }
`

/* Header의 위쪽 part */
const MainHeader = styled.div`
  padding: 0.3rem;
  display: flex;
  justify-content: center;
`

/* Header의 아래쪽 part */
const SubHeader = styled.div`
  padding: 0.2rem;
  display: flex;
  justify-content: center;
`

const BurgerSection = styled.div`
`

const TitleSection = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
  align-items: center;
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
          author{
            socials{
              name
              author
            }
          }
        }
      }
    }
  `)

  const { isUp } = useWindowScrollDirection()
  return(
    <HeaderWrapper className={cx({ 'hide' : !isUp })}>
      <MainHeader>
        <BurgerSection>
          <Burger />
        </BurgerSection>
        <TitleSection>
          <Logo/>
        </TitleSection>
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
import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

import SocialLinks from "../SocialLinks"

const FooterContainer = styled.footer`
  display: flex;
  background-color: #eeeeee;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`

/* flex:none == flex: 0 0 auto */
const FooterFixedElement = styled.div`
  flex: none;
`

const FooterRightElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-left: auto;
`

const StyledLink = styled(Link)`
  margin-left: 0.3rem;
`

const Footer = () => {
  return(
    <FooterContainer>
      <FooterFixedElement>
        <SocialLinks />
      </FooterFixedElement>
      <FooterRightElement>
        © {new Date().getFullYear()}, Built with 
        {` `}
        <StyledLink to="https://www.gatsbyjs.org">Gatsby</StyledLink>
      </FooterRightElement>
    </FooterContainer>
  )
}

export default Footer
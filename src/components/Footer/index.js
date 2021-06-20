import React from "react"
import styled from "styled-components"

import SocialLinks from "../SocialLinks"

const FooterContainer = styled.footer`
  display: flex;
  background-color: #eeeeee;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`

const Footer = () => {
  return(
    <FooterContainer>
      <SocialLinks />
      © {new Date().getFullYear()}, Built with 
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterContainer>
  )
}

export default Footer
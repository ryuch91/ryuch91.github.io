import React from "react"
import styled from "styled-components"

import SocialLinks from "../SocialLinks"

const FooterContainer = styled.div`
  display: flex;
  background-color: #eeeeee;
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
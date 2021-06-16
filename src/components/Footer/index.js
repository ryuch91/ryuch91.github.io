import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`

`

const Footer = () => {
  return(
    <FooterContainer>
      © {new Date().getFullYear()}, Built with 
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterContainer>
  )
}

export default Footer
import React from "react"
import styled from "styled-components"

import Navbar from "./Navbar"

const MainContainer = styled.main`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`

const StyledTitle = styled.title``
const StyledHeading = styled.h1`
  color: rebeccapurple;
`

const Layout = ({ pageTitle, children }) => {
  return(
    <MainContainer>
      <StyledTitle> { pageTitle } </StyledTitle>
      <Navbar />
      <StyledHeading> { pageTitle } </StyledHeading>
      {children}
    </MainContainer>
  )
}

export default Layout
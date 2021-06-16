import React from "react"
import styled from "styled-components"

import Navbar from "./Navbar"
import Footer from "./Footer"

//페이지 전체를 감싸는 div tag 컨테이너
const PageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
`
//페이지의 메인 컨텐츠를 감싸는 태그
const MainContainer = styled.main`
  flex: 1 0 auto;
  max-width: 750px;
  padding: 0 1rem;
`

const Layout = ({ pageTitle, children }) => {
  return(
    <PageContainer>
      <title> { pageTitle } </title>
      <Navbar />
      <MainContainer>
        {children}
        <Footer/>
      </MainContainer>
    </PageContainer>
  )
}

export default Layout
import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"

//페이지 전체를 감싸는 div tag 컨테이너 
const PageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: sans-serif;
`
//페이지의 메인 컨텐츠를 감싸는 태그
const MainContainer = styled.main`
  flex: 1 0 auto;
  max-width: 750px;
  margin-top: 5.4rem;
  padding: 0 1rem;
`

const Layout = ({ pageTitle, children }) => {
  return(
    <PageContainer>
      <title> { pageTitle } </title>
      <Header />
      <MainContainer>
        <SideMenu/>
        {children}
      </MainContainer>
      <Footer/>
    </PageContainer>
  )
}

export default Layout
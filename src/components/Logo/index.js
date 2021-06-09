/* 전체 사이트에서 사용할 로고를 나타내는 컴포넌트 */

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LogoWord from "../../logo.mdx"

const LogoWrapper = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape){
    flex: 0 1 25px;
  }
`

const LogoLink = styled(Link)`
  display: block;
  text-decoration: none;
`

const Logo = () => {
  return(
    <LogoWrapper>
      <LogoLink to="/">
        <LogoWord />
      </LogoLink>
    </LogoWrapper>
  )
}

export default Logo;
/* 전체 사이트에서 사용할 로고를 나타내는 컴포넌트 */

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrapper = styled.div`
  margin: auto 0;
  flex: 0 1 24px;

  @media (max-width: 768px) and (orientation: landscape){
    flex: 0 1 16px;
  }
`

const LogoLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
`

const Logo = () => {
  return(
    <LogoWrapper>
      <LogoLink to="/"> Gan's Devlog </LogoLink>
    </LogoWrapper>
  )
}

export default Logo;
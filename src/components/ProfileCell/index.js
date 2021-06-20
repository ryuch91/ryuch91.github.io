import React from "react"
import styled from "styled-components"

const CellContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const CellHeader = styled.h1``

const CellDescription = styled.summary``

const ProfileCell = ({ title, description, children }) => {
  return(
    <CellContainer>
      <CellHeader>|{title}</CellHeader>
      <CellDescription>{description}</CellDescription>
      {children}
    </CellContainer>
  )
}

export default ProfileCell
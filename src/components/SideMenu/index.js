import React from "react"
import styled from "styled-components"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--primaryLight);
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  border-right: 1px solid;

  @media (max-width: var(--mobile)){
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transfrom: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--primaryDark);
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: var(--mobile)){
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover{
      color: var(--primaryHover);
    }
  }
`

const SideMenu = () => {
  return(
    <StyledMenu>
      <a href="/"> About </a>
      <a href="/"> Posts </a>
      <a href="/"> Tags </a>
    </StyledMenu>
  )
}

export default SideMenu;
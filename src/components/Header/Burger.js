import React from "react"
import styled from "styled-components"

const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 3;

  &:focus {
    outline: none;
  }
`

const BurgerPatty = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: var(--primaryDark);
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
`

const Burger = () => {
  return(
    <StyledBurger>
      <BurgerPatty />
      <BurgerPatty />
      <BurgerPatty />
    </StyledBurger>
  )
}

export default Burger;
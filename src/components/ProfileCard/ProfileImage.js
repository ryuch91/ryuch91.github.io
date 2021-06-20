import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledImg = styled(GatsbyImage)`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  padding: 3rem;
  margin: 3rem;
`

const ProfileImage = ( props ) => {
  const { image, altText, title } = props
  return(
    <StyledImg image={image} alt={altText} title={title} />
  )
}

export default ProfileImage
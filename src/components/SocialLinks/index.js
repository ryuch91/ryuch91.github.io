import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialLinksWrapper = styled.div`
  text-align: center;
`
const LinkElement = styled.a`
  font-size: 1.75em;
  padding: 0em 0.5em;
  color: #000;
  boxShadow: none;
`

const SocialLinks = () => {
  return(
    <SocialLinksWrapper>
      <LinkElement href='https://github.com/ryuch91'>
        <FontAwesomeIcon icon={faGithubSquare} title='Github' />
      </LinkElement>
      <LinkElement href='https://twitter.com/ryuch91'>
        <FontAwesomeIcon icon={faTwitterSquare} title='Twitter' />
      </LinkElement>
      <LinkElement href='https://www.linkedin.com/in/ryuch91/'>
        <FontAwesomeIcon icon={faLinkedin} title='LinkedIn' />
      </LinkElement>
    </SocialLinksWrapper>
  )
}

export default SocialLinks